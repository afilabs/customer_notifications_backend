import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

class ColumnNumericTransformer {
  to(data: number): number {
    return data;
  }
  from(data: string): number {
    return parseFloat(data);
  }
}

@Entity()
export class Stop {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column('numeric', {
    transformer: new ColumnNumericTransformer(),
  })
  lat: number;

  @Column('numeric', {
    transformer: new ColumnNumericTransformer(),
  })
  lng: number;

  @Column('numeric', {
    transformer: new ColumnNumericTransformer(),
  })
  driverLat: number;

  @Column('numeric', {
    transformer: new ColumnNumericTransformer(),
  })
  driverLng: number;

  @Column()
  driverTimezone: string;

  @Column()
  eta: string;

  @Column()
  phone: string;

  @Column()
  email: string;
}
