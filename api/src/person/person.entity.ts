import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'people' })
export class Person {
  @PrimaryGeneratedColumn() id!: string;

  @Column({ default: false }) isAdmin!: boolean;

  @Column({ default: false }) isActive!: boolean;

  @Column({ unique: true }) username!: string;

  @Column() password!: string;

  @Column({ unique: true }) email!: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt?: Date;
}
