import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
class Order extends BaseEntity {
  @PrimaryGeneratedColumn()
  OrderId: number;

  @Column({ type: 'text' })
  phoneNumber: string;

  @Column({ type: 'text' })
  message: string;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}
export default Order;
