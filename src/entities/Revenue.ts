import 'reflect-metadata';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('revenues')
export class Revenue {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar' })
  month!: string;

  @Column({ type: 'float' })
  amount!: number;
}
