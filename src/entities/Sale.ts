import 'reflect-metadata';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('sales')
export class Sale {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar' })
  name!: string;

  @Column({ type: 'varchar' })
  email!: string;

  @Column({ type: 'float' })
  amount!: number;

  @Column({ type: 'varchar', nullable: true })
  avatarUrl!: string;

  @CreateDateColumn()
  createdAt!: Date;
}
