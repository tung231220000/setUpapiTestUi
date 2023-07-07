import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn({
    type: 'integer',
    name: 'id',
  })
  id: number;

  @Column({
    default: '',
  })
  name: string;

  @Column({ nullable: true })
  price: string;

  @Column({
    type: 'integer',
  })
  quantity: number;
}
