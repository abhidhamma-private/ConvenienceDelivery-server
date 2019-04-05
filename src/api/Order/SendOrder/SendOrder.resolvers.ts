import { SendOrderMutationArgs, SendOrderResponse } from '../../../types/graph';
import { Resolvers } from '../../../types/resolvers';
import { sendOrderSMS } from '../../../utils/sendSMS';
import Order from '../../../entities/Order';

const resolvers: Resolvers = {
  Mutation: {
    SendOrder: async (
      _,
      args: SendOrderMutationArgs
    ): Promise<SendOrderResponse> => {
      const { phoneNumber, message } = args;
      try {
        const sendOrder = await Order.create({
          phoneNumber,
          message,
        }).save();
        await sendOrderSMS(sendOrder.phoneNumber, sendOrder.message);
        return {
          ok: true,
          error: null,
        };
      } catch (error) {
        return {
          ok: false,
          error: error.message,
        };
      }
    },
  },
};

export default resolvers;
