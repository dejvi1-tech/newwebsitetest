/*
  # Initial Schema Setup
  
  1. New Tables
    - packages: Stores eSIM package information
    - orders: Stores customer orders and payment status
  
  2. Security
    - Enable RLS on both tables
    - Add policies for public access to packages
    - Add policies for order management
    
  3. Triggers
    - Add updated_at triggers for both tables
*/

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow public read access to active packages" ON packages;
DROP POLICY IF EXISTS "Allow insert for new orders" ON orders;
DROP POLICY IF EXISTS "Allow users to view their own orders" ON orders;

-- Create tables
CREATE TABLE IF NOT EXISTS packages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  region text NOT NULL,
  data_limit text NOT NULL,
  validity_days integer NOT NULL,
  price decimal(10,2) NOT NULL,
  stock integer DEFAULT NULL,
  active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  package_id uuid REFERENCES packages(id),
  email text NOT NULL,
  name text NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  payment_intent text,
  esim_qr text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE packages ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Packages policies
CREATE POLICY "Allow public read access to active packages" ON packages
  FOR SELECT
  TO public
  USING (active = true);

-- Orders policies
CREATE POLICY "Allow insert for new orders" ON orders
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Allow users to view their own orders" ON orders
  FOR SELECT
  TO public
  USING (email = current_user);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Add triggers
DROP TRIGGER IF EXISTS update_packages_updated_at ON packages;
CREATE TRIGGER update_packages_updated_at
  BEFORE UPDATE ON packages
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_orders_updated_at ON orders;
CREATE TRIGGER update_orders_updated_at
  BEFORE UPDATE ON orders
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();