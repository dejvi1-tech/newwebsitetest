import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
import Stripe from 'stripe';
import { Resend } from 'resend';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Initialize Supabase
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

app.use(cors());
app.use(express.json());

// Create a checkout session
app.post('/api/create-checkout-session', async (req, res) => {
  try {
    const { packageId, email, name } = req.body;

    // Get package details from Supabase
    const { data: packageData, error: packageError } = await supabase
      .from('packages')
      .select('*')
      .eq('id', packageId)
      .single();

    if (packageError) throw packageError;

    // Create order in database
    const { data: order, error: orderError } = await supabase
      .from('orders')
      .insert([
        {
          package_id: packageId,
          email,
          name,
          status: 'pending'
        }
      ])
      .select()
      .single();

    if (orderError) throw orderError;

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: packageData.name,
              description: `${packageData.data_limit} / ${packageData.validity_days} days`,
            },
            unit_amount: packageData.price * 100, // Convert to cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.FRONTEND_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.FRONTEND_URL}/cancel`,
      customer_email: email,
      metadata: {
        order_id: order.id,
      },
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ error: 'Failed to create checkout session' });
  }
});

// Stripe webhook handler
app.post('/api/webhook', async (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error('Webhook Error:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    
    try {
      // Update order status
      const { error: updateError } = await supabase
        .from('orders')
        .update({ status: 'paid', payment_intent: session.payment_intent })
        .eq('id', session.metadata.order_id);

      if (updateError) throw updateError;

      // Generate eSIM QR code (mock function)
      const qrCode = await generateESIMQR();

      // Send email with QR code
      await resend.emails.send({
        from: 'noreply@yourdomain.com',
        to: session.customer_email,
        subject: 'Your eSIM is Ready!',
        html: `
          <h1>Thank you for your purchase!</h1>
          <p>Here's your eSIM QR code:</p>
          <img src="${qrCode}" alt="eSIM QR Code" />
          <h2>Installation Instructions:</h2>
          <ol>
            <li>Go to your phone's settings</li>
            <li>Select Mobile Data > Add eSIM</li>
            <li>Scan the QR code above</li>
            <li>Follow the on-screen instructions</li>
          </ol>
        `
      });

      // Update order with QR code
      await supabase
        .from('orders')
        .update({ 
          status: 'completed',
          esim_qr: qrCode
        })
        .eq('id', session.metadata.order_id);

    } catch (error) {
      console.error('Error processing webhook:', error);
      return res.status(500).json({ error: 'Failed to process payment webhook' });
    }
  }

  res.json({ received: true });
});

// Mock function to generate eSIM QR code
async function generateESIMQR() {
  // In production, this would call your eSIM provider's API
  return 'https://example.com/qr-code.png';
}

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});