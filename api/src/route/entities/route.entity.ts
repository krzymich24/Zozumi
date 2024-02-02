import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { RouteSetter } from '../../route-setter/route-setter.entity';

@Entity({ name: 'route' })
export class Route {
  @PrimaryGeneratedColumn() id!: string;

  @Column({ nullable: false }) name: string;

  @Column({ nullable: false }) grade: string;

  @ManyToOne((type) => RouteSetter, { eager: true })
  @JoinColumn({ name: 'author' })
  author: RouteSetter;
}
