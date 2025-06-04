import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Package, Users, ShoppingCart, Activity } from 'lucide-react';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const AdminDashboardPage = () => {
  const [stats, setStats] = useState({
    totalPackages: 0,
    totalOrders: 0,
    activeUsers: 0,
    revenue: 0
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      // Get total packages
      const { data: packages } = await supabase
        .from('packages')
        .select('count');
      
      // Get total orders
      const { data: orders } = await supabase
        .from('orders')
        .select('price');

      // Calculate stats
      const totalPackages = packages?.[0]?.count || 0;
      const totalOrders = orders?.length || 0;
      const revenue = orders?.reduce((sum, order) => sum + (order.price || 0), 0) || 0;

      setStats({
        totalPackages,
        totalOrders,
        activeUsers: totalOrders, // Simplified - could be unique users
        revenue
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  const StatCard = ({ title, value, icon: Icon, color }) => (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <Icon className={`h-4 w-4 ${color}`} />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
      </CardContent>
    </Card>
  );

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Packages"
          value={stats.totalPackages}
          icon={Package}
          color="text-blue-600"
        />
        <StatCard
          title="Total Orders"
          value={stats.totalOrders}
          icon={ShoppingCart}
          color="text-green-600"
        />
        <StatCard
          title="Active Users"
          value={stats.activeUsers}
          icon={Users}
          color="text-purple-600"
        />
        <StatCard
          title="Total Revenue"
          value={`€${stats.revenue.toFixed(2)}`}
          icon={Activity}
          color="text-orange-600"
        />
      </div>
    </div>
  );
};

export default AdminDashboardPage;