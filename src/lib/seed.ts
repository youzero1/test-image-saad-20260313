import { DataSource } from 'typeorm';
import { Revenue } from '../entities/Revenue';
import { Sale } from '../entities/Sale';
import { Stat } from '../entities/Stat';

export async function seedDatabase(dataSource: DataSource) {
  const revenueRepo = dataSource.getRepository(Revenue);
  const saleRepo = dataSource.getRepository(Sale);
  const statRepo = dataSource.getRepository(Stat);

  const revenueCount = await revenueRepo.count();
  if (revenueCount === 0) {
    const monthlyData = [
      { month: 'Jan', amount: 4000 },
      { month: 'Feb', amount: 3000 },
      { month: 'Mar', amount: 5000 },
      { month: 'Apr', amount: 4000 },
      { month: 'May', amount: 7000 },
      { month: 'Jun', amount: 5000 },
      { month: 'Jul', amount: 6000 },
      { month: 'Aug', amount: 8000 },
      { month: 'Sep', amount: 7000 },
      { month: 'Oct', amount: 9000 },
      { month: 'Nov', amount: 11000 },
      { month: 'Dec', amount: 10000 },
    ];
    for (const d of monthlyData) {
      const rev = revenueRepo.create(d);
      await revenueRepo.save(rev);
    }
  }

  const saleCount = await saleRepo.count();
  if (saleCount === 0) {
    const salesData = [
      { name: 'Olivia Martin', email: 'olivia.martin@email.com', amount: 1999.0, avatarUrl: '' },
      { name: 'Jackson Lee', email: 'jackson.lee@email.com', amount: 39.0, avatarUrl: '' },
      { name: 'Isabella Nguyen', email: 'isabella.nguyen@email.com', amount: 299.0, avatarUrl: '' },
      { name: 'William Kim', email: 'will@email.com', amount: 99.0, avatarUrl: '' },
      { name: 'Sofia Davis', email: 'sofia.davis@email.com', amount: 39.0, avatarUrl: '' },
    ];
    for (const s of salesData) {
      const sale = saleRepo.create(s);
      await saleRepo.save(sale);
    }
  }

  const statCount = await statRepo.count();
  if (statCount === 0) {
    const statsData = [
      { label: 'Total Revenue', value: '$45,231.89', change: '+20.1% from last month', icon: 'DollarSign' },
      { label: 'Subscriptions', value: '+2,350', change: '+180.1% from last month', icon: 'Users' },
      { label: 'Sales', value: '+12,234', change: '+19% from last month', icon: 'CreditCard' },
      { label: 'Active Now', value: '+573', change: '+201 since last hour', icon: 'Activity' },
    ];
    for (const s of statsData) {
      const stat = statRepo.create(s);
      await statRepo.save(stat);
    }
  }
}
