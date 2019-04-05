import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import User from './User';
import Product from './Product';
@Entity()
class Category extends BaseEntity {
  @PrimaryGeneratedColumn()
  categoryId: number;

  @OneToMany(type => Product, product => product.category, {
    nullable: true,
  })
  products: Product[];

  @ManyToOne(type => User, user => user.plans)
  user: User;

  @Column({ type: 'text', nullable: true })
  name: string;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}
export default Category;
