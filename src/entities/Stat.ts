import 'reflect-metadata';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('stats')
export class Stat {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar' })
  label!: string;

  @Column({ type: 'varchar' })
  value!: string;

  @Column({ type: 'varchar' })
  change!: string;

  @Column({ type: 'varchar' })
  icon!: string;
}
