import * as Type from "./../constants/ActionTypes";

var initialState = [
  {
    id: "1",
    name: "Gimbal Zhiyun Smooth 4 – 1",
    SKU: "GZS41",
    brand: "ZHIYUN",
    price: 2790000,
    srp: 2850000,
    image: "https://digitalking.com.vn/wp-content/uploads/2018/08/smooth-4.jpg",
    slug: "gimbal-zhiyun-smooth-4",
    customer: "Alan NG",
    phone: 703120226,
    address: "61 Ba Vân"
  }
];

const orders = (state = initialState, action) => {
  switch (action.type) {
    case Type.ORDERS:
      state = action.orders;
      return [...state];
    default:
      return [...state];
  }
};

export default orders;
