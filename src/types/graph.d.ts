export const typeDefs = ["type SendOrderResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype Mutation {\n  SendOrder(phoneNumber: String!, message: String!): SendOrderResponse!\n  CompletePhoneVerification(phoneNumber: String!, key: String!): CompletePhoneVerificationResponse!\n  StartPhoneVerification(phoneNumber: String!): StartPhoneVerificationResponse!\n}\n\ntype Order {\n  orderId: Int\n  phoneNumber: String\n  message: String\n  createdAt: String\n  updatedAt: String\n}\n\ntype ProductItemResponse {\n  ok: Boolean!\n  error: String\n  product: Product\n}\n\ntype Query {\n  ProductItem(productId: Int!): ProductItemResponse!\n  ProductItems: ProductItemsResponse!\n}\n\ntype ProductItemsResponse {\n  ok: Boolean!\n  error: String\n  products: [Product]\n}\n\ntype Category {\n  categoryId: Int\n  products: [Product]\n  name: String\n  createdAt: String\n  updatedAt: String\n}\n\ntype Product {\n  productId: Int\n  category: Category\n  name: String\n  photo: String\n  price: String\n  onSale: Boolean\n  createdAt: String\n  updatedAt: String\n}\n\ntype CompletePhoneVerificationResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype StartPhoneVerificationResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype Verification {\n  id: Int!\n  target: String!\n  payload: String!\n  key: String!\n  verified: Boolean!\n  createdAt: String!\n  updateAt: String!\n}\n"];
/* tslint:disable */

export interface Query {
  ProductItem: ProductItemResponse;
  ProductItems: ProductItemsResponse;
}

export interface ProductItemQueryArgs {
  productId: number;
}

export interface ProductItemResponse {
  ok: boolean;
  error: string | null;
  product: Product | null;
}

export interface Product {
  productId: number | null;
  category: Category | null;
  name: string | null;
  photo: string | null;
  price: string | null;
  onSale: boolean | null;
  createdAt: string | null;
  updatedAt: string | null;
}

export interface Category {
  categoryId: number | null;
  products: Array<Product> | null;
  name: string | null;
  createdAt: string | null;
  updatedAt: string | null;
}

export interface ProductItemsResponse {
  ok: boolean;
  error: string | null;
  products: Array<Product> | null;
}

export interface Mutation {
  SendOrder: SendOrderResponse;
  CompletePhoneVerification: CompletePhoneVerificationResponse;
  StartPhoneVerification: StartPhoneVerificationResponse;
}

export interface SendOrderMutationArgs {
  phoneNumber: string;
  message: string;
}

export interface CompletePhoneVerificationMutationArgs {
  phoneNumber: string;
  key: string;
}

export interface StartPhoneVerificationMutationArgs {
  phoneNumber: string;
}

export interface SendOrderResponse {
  ok: boolean;
  error: string | null;
}

export interface CompletePhoneVerificationResponse {
  ok: boolean;
  error: string | null;
}

export interface StartPhoneVerificationResponse {
  ok: boolean;
  error: string | null;
}

export interface Order {
  orderId: number | null;
  phoneNumber: string | null;
  message: string | null;
  createdAt: string | null;
  updatedAt: string | null;
}

export interface Verification {
  id: number;
  target: string;
  payload: string;
  key: string;
  verified: boolean;
  createdAt: string;
  updateAt: string;
}
