import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Stop {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  lat: number;

  @Column()
  lng: number;

  @Column()
  eta: string;

  @Column()
  phone: string;
}
