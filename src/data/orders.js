import product1 from "../assets/images/product-1.jpg";
import product2 from "../assets/images/product-2.jpg";
import product3 from "../assets/images/product-3.jpg";

const orders = [
  {
    id: "ORD1001",
    date: "12 Jul 2026",
    status: "Delivered",
    total: 2999,
    items: [
      {
        id: 1,
        name: "Wireless Headphones",
        price: 2999,
        quantity: 1,
        image: product1,
      },
    ],
  },
  {
    id: "ORD1002",
    date: "08 Jul 2026",
    status: "Shipped",
    total: 5798,
    items: [
      {
        id: 2,
        name: "Smart Watch",
        price: 3999,
        quantity: 1,
        image: product2,
      },
      {
        id: 3,
        name: "Bluetooth Speaker",
        price: 1799,
        quantity: 1,
        image: product3,
      },
    ],
  },
];

export default orders;