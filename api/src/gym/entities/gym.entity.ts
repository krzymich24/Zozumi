import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'gym' })
export class Gym {
  @PrimaryGeneratedColumn() id!: string;

  @Column({ nullable: false }) name: string;

  @Column({ nullable: false }) location: string;

  @Column({ default: 'PRW.jpg' }) image: string;
}
