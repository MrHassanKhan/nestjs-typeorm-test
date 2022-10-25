/* eslint-disable prettier/prettier */
import { Column, Entity, ManyToOne,CreateDateColumn, PrimaryGeneratedColumn, JoinColumn } from 'typeorm';
import { Event } from './event.entity';

@Entity()
export class Workshop {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  start: string;
  @Column()
  end: string;

  @ManyToOne(type => Event, event => event.id)
  @JoinColumn({ name: "eventId"} )
  event: Event;

  @Column()
  name: string;

  @CreateDateColumn({default: () => 'NOW()'})
  createdAt: string;
}
