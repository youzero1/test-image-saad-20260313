import 'reflect-metadata';
import { DataSource } from 'typeorm';
import path from 'path';
import { Revenue } from '../entities/Revenue';
import { Sale } from '../entities/Sale';
import { Stat } from '../entities/Stat';

const dbPath = process.env.DATABASE_PATH
  ? path.resolve(process.cwd(), process.env.DATABASE_PATH)
  : path.resolve(process.cwd(), 'data', 'dashboard.db');

let AppDataSource: DataSource | null = null;

export async function getDataSource(): Promise<DataSource> {
  if (AppDataSource && AppDataSource.isInitialized) {
    return AppDataSource;
  }

  AppDataSource = new DataSource({
    type: 'better-sqlite3',
    database: dbPath,
    synchronize: true,
    logging: false,
    entities: [Revenue, Sale, Stat],
  });

  await AppDataSource.initialize();
  return AppDataSource;
}
