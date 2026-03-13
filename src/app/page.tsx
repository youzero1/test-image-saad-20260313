import { Sidebar } from '../components/Sidebar';
import { Header } from '../components/Header';
import { StatCard } from '../components/StatCard';
import { OverviewChart } from '../components/OverviewChart';
import { RecentSales } from '../components/RecentSales';
import { DollarSign, Users, CreditCard, Activity } from 'lucide-react';

async function getDashboardData() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/dashboard`, {
      cache: 'no-store',
    });
    if (!res.ok) {
      throw new Error('Failed to fetch');
    }
    return res.json();
  } catch {
    // Return fallback data if API fails during build
    return {
      stats: [
        { id: 1, label: 'Total Revenue', value: '$45,231.89', change: '+20.1% from last month', icon: 'DollarSign' },
        { id: 2, label: 'Subscriptions', value: '+2,350', change: '+180.1% from last month', icon: 'Users' },
        { id: 3, label: 'Sales', value: '+12,234', change: '+19% from last month', icon: 'CreditCard' },
        { id: 4, label: 'Active Now', value: '+573', change: '+201 since last hour', icon: 'Activity' },
      ],
      revenues: [
        { id: 1, month: 'Jan', amount: 4000 },
        { id: 2, month: 'Feb', amount: 3000 },
        { id: 3, month: 'Mar', amount: 5000 },
        { id: 4, month: 'Apr', amount: 4000 },
        { id: 5, month: 'May', amount: 7000 },
        { id: 6, month: 'Jun', amount: 5000 },
        { id: 7, month: 'Jul', amount: 6000 },
        { id: 8, month: 'Aug', amount: 8000 },
        { id: 9, month: 'Sep', amount: 7000 },
        { id: 10, month: 'Oct', amount: 9000 },
        { id: 11, month: 'Nov', amount: 11000 },
        { id: 12, month: 'Dec', amount: 10000 },
      ],
      sales: [
        { id: 1, name: 'Olivia Martin', email: 'olivia.martin@email.com', amount: 1999.0 },
        { id: 2, name: 'Jackson Lee', email: 'jackson.lee@email.com', amount: 39.0 },
        { id: 3, name: 'Isabella Nguyen', email: 'isabella.nguyen@email.com', amount: 299.0 },
        { id: 4, name: 'William Kim', email: 'will@email.com', amount: 99.0 },
        { id: 5, name: 'Sofia Davis', email: 'sofia.davis@email.com', amount: 39.0 },
      ],
    };
  }
}

const iconMap: Record<string, React.ReactNode> = {
  DollarSign: <DollarSign className="h-4 w-4 text-gray-500" />,
  Users: <Users className="h-4 w-4 text-gray-500" />,
  CreditCard: <CreditCard className="h-4 w-4 text-gray-500" />,
  Activity: <Activity className="h-4 w-4 text-gray-500" />,
};

export default async function DashboardPage() {
  const data = await getDashboardData();
  const { stats, revenues, sales } = data;

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-sm text-gray-500">Welcome back! Here&apos;s what&apos;s happening.</p>
          </div>

          {/* Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {stats.map((stat: { id: number; label: string; value: string; change: string; icon: string }) => (
              <StatCard
                key={stat.id}
                title={stat.label}
                value={stat.value}
                change={stat.change}
                icon={iconMap[stat.icon]}
              />
            ))}
          </div>

          {/* Bottom Panels */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            <div className="lg:col-span-3">
              <OverviewChart data={revenues} />
            </div>
            <div className="lg:col-span-2">
              <RecentSales sales={sales} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
