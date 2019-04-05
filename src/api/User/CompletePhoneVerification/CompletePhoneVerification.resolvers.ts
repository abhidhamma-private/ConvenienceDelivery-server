import { Resolvers } from '../../../types/resolvers';
import {
  CompletePhoneVerificationMutationArgs,
  CompletePhoneVerificationResponse,
} from '../../../types/graph';
import Verification from '../../../entities/Verification';

const resolvers: Resolvers = {
  Mutation: {
    CompletePhoneVerification: async (
      _,
      args: CompletePhoneVerificationMutationArgs
    ): Promise<CompletePhoneVerificationResponse> => {
      const { phoneNumber, key } = args;

      try {
        const verification = await Verification.findOne({
          payload: phoneNumber,
          key,
        });
        if (!verification) {
          return {
            ok: false,
            error: 'Verification key not valid',
          };
        } else {
          verification.verified = true;
          verification.save();
          return {
            ok: true,
            error: null,
          };
        }
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
