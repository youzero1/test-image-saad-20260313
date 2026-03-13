import { NextResponse } from 'next/server';
import { getDataSource } from '../../../lib/database';
import { seedDatabase } from '../../../lib/seed';
import { Revenue } from '../../../entities/Revenue';
import { Sale } from '../../../entities/Sale';
import { Stat } from '../../../entities/Stat';

export async function GET() {
  try {
    const dataSource = await getDataSource();
    await seedDatabase(dataSource);

    const revenueRepo = dataSource.getRepository(Revenue);
    const saleRepo = dataSource.getRepository(Sale);
    const statRepo = dataSource.getRepository(Stat);

    const revenues = await revenueRepo.find();
    const sales = await saleRepo.find({ order: { createdAt: 'DESC' }, take: 5 });
    const stats = await statRepo.find();

    return NextResponse.json({ revenues, sales, stats });
  } catch (error) {
    console.error('Dashboard API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch dashboard data', details: String(error) },
      { status: 500 }
    );
  }
}
