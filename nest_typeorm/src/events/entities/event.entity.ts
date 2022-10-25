/* eslint-disable prettier/prettier */
import { Column, Entity, CreateDateColumn, PrimaryGeneratedColumn, OneToMany,JoinColumn } from 'typeorm';
import { Workshop } from './workshop.entity';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @CreateDateColumn({default: () => 'NOW()'})
  createdAt: string;

  @OneToMany(type => Workshop, workshop => workshop.event)
  @JoinColumn()
  workshops: Workshop[];
}
