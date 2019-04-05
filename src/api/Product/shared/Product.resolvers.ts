import { Resolvers } from 'src/types/resolvers';
import { ProductItemsResponse } from 'src/types/graph';
import Product from '../../../entities/Product';

const resolevers: Resolvers = {
  Query: {
    ProductItems: async (): Promise<ProductItemsResponse> => {
      const ProductItems = await Product.find({ relations: ['category'] });
      try {
        if (!Product) {
          return {
            ok: false,
            error: 'Product가 없습니다.',
            products: null,
          };
        }
        return {
          ok: true,
          error: null,
          products: ProductItems,
        };
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          products: null,
        };
      }
    },
  },
};
export default resolevers;
