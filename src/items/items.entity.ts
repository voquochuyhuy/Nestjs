import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Items {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  qty: number;
}