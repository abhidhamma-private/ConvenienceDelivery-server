import { Resolvers } from 'src/types/resolvers';
import { ProductItemQueryArgs } from 'src/types/graph';
import Product from '../../../entities/Product';

const resolevers: Resolvers = {
  Query: {
    ProductItem: async (_, args: ProductItemQueryArgs): Promise<any> => {
      const ProductItem = await Product.findOne(
        { productId: args.productId },
        { relations: ['category'] }
      );
      try {
        if (!Product) {
          return {
            ok: false,
            error: 'Product가 없습니다.',
            product: null,
          };
        } else {
          return {
            ok: true,
            error: null,
            product: ProductItem,
          };
        }
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          product: null,
        };
      }
    },
  },
};
export default resolevers;
