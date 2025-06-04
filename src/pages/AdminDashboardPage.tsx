import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Package, Users, ShoppingCart, Activity, Plus, Trash2, Edit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const AdminDashboardPage = () => {
  const { toast } = useToast();
  const [stats, setStats] = useState({
    totalPackages: 0,
    totalOrders: 0,
    activeUsers: 0,
    revenue: 0
  });

  const [packages, setPackages] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newPackage, setNewPackage] = useState({
    name: '',
    region: '',
    data_limit: '',
    validity_days: '',
    price: '',
    stock: ''
  });

  useEffect(() => {
    fetchStats();
    fetchPackages();
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
        activeUsers: totalOrders,
        revenue
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  const fetchPackages = async () => {
    try {
      const { data, error } = await supabase
        .from('packages')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPackages(data || []);
    } catch (error) {
      console.error('Error fetching packages:', error);
      toast({
        title: "Error",
        description: "Failed to fetch packages",
        variant: "destructive"
      });
    }
  };

  const handleAddPackage = async (e) => {
    e.preventDefault();
    try {
      const { error } = await supabase
        .from('packages')
        .insert([{
          ...newPackage,
          price: parseFloat(newPackage.price),
          validity_days: parseInt(newPackage.validity_days),
          stock: parseInt(newPackage.stock)
        }]);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Package added successfully"
      });

      setShowAddForm(false);
      setNewPackage({
        name: '',
        region: '',
        data_limit: '',
        validity_days: '',
        price: '',
        stock: ''
      });
      fetchPackages();
      fetchStats();
    } catch (error) {
      console.error('Error adding package:', error);
      toast({
        title: "Error",
        description: "Failed to add package",
        variant: "destructive"
      });
    }
  };

  const handleDeletePackage = async (id) => {
    if (!confirm('Are you sure you want to delete this package?')) return;

    try {
      const { error } = await supabase
        .from('packages')
        .delete()
        .eq('id', id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Package deleted successfully"
      });

      fetchPackages();
      fetchStats();
    } catch (error) {
      console.error('Error deleting package:', error);
      toast({
        title: "Error",
        description: "Failed to delete package",
        variant: "destructive"
      });
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
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
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

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Manage Packages</h2>
          <Button
            onClick={() => setShowAddForm(!showAddForm)}
            className="bg-blue-600 hover:bg-blue-700"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Package
          </Button>
        </div>

        {showAddForm && (
          <form onSubmit={handleAddPackage} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <Input
              placeholder="Name"
              value={newPackage.name}
              onChange={(e) => setNewPackage({ ...newPackage, name: e.target.value })}
              required
            />
            <Input
              placeholder="Region"
              value={newPackage.region}
              onChange={(e) => setNewPackage({ ...newPackage, region: e.target.value })}
              required
            />
            <Input
              placeholder="Data Limit (e.g., 10GB)"
              value={newPackage.data_limit}
              onChange={(e) => setNewPackage({ ...newPackage, data_limit: e.target.value })}
              required
            />
            <Input
              placeholder="Validity Days"
              type="number"
              value={newPackage.validity_days}
              onChange={(e) => setNewPackage({ ...newPackage, validity_days: e.target.value })}
              required
            />
            <Input
              placeholder="Price (EUR)"
              type="number"
              step="0.01"
              value={newPackage.price}
              onChange={(e) => setNewPackage({ ...newPackage, price: e.target.value })}
              required
            />
            <Input
              placeholder="Stock (optional)"
              type="number"
              value={newPackage.stock}
              onChange={(e) => setNewPackage({ ...newPackage, stock: e.target.value })}
            />
            <div className="col-span-full flex gap-2">
              <Button type="submit" className="bg-green-600 hover:bg-green-700">
                Save Package
              </Button>
              <Button type="button" variant="outline" onClick={() => setShowAddForm(false)}>
                Cancel
              </Button>
            </div>
          </form>
        )}

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Name</th>
                <th className="text-left py-3 px-4">Region</th>
                <th className="text-left py-3 px-4">Data</th>
                <th className="text-left py-3 px-4">Validity</th>
                <th className="text-left py-3 px-4">Price</th>
                <th className="text-left py-3 px-4">Stock</th>
                <th className="text-left py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {packages.map((pkg) => (
                <tr key={pkg.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">{pkg.name}</td>
                  <td className="py-3 px-4">{pkg.region}</td>
                  <td className="py-3 px-4">{pkg.data_limit}</td>
                  <td className="py-3 px-4">{pkg.validity_days} days</td>
                  <td className="py-3 px-4">€{pkg.price}</td>
                  <td className="py-3 px-4">{pkg.stock || 'Unlimited'}</td>
                  <td className="py-3 px-4">
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDeletePackage(pkg.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;