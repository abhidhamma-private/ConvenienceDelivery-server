import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import Category from './Category';

@Entity()
class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  productId: number;

  @ManyToOne(type => Category, category => category.products, {
    nullable: true,
  })
  category: Category;

  @Column({ type: 'text', default: '없다' })
  name: string;

  @Column({ type: 'text', default: '없다' })
  photo: string;

  @Column({ type: 'text', default: '없다' })
  price: string;

  @Column({ type: 'boolean', default: false })
  onSale: boolean;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}
export default Product;
