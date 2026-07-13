import product1 from "../assets/images/product-1.jpg";
import product2 from "../assets/images/product-2.jpg";
import product3 from "../assets/images/product-3.jpg";
import product4 from "../assets/images/product-4.jpg";
import product5 from "../assets/images/product-5.jpg";
import product6 from "../assets/images/product-6.jpg";
import product7 from "../assets/images/product-7.jpg";
import product8 from "../assets/images/product-8.jpg";
import product9 from "../assets/images/product-9.jpg";
import product10 from "../assets/images/product-10.jpg";
import product11 from "../assets/images/product-11.jpg";
import product12 from "../assets/images/product-12.jpg";
import product13 from "../assets/images/product-13.jpg";
import product14 from "../assets/images/product-14.jpg";
import product15 from "../assets/images/product-15.jpg";
import product16 from "../assets/images/product-16.jpg";
import product17 from "../assets/images/product-17.jpg";
import product18 from "../assets/images/product-18.jpg";
import product19 from "../assets/images/product-19.jpg";
import product20 from "../assets/images/product-20.jpg";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 2999,
    oldPrice: 3999,
    rating: 4.8,
    image: product1,
    isNew: true,
    description:
    "Premium quality wireless headphones with immersive sound and long battery life.",
  },
  {
    id: 2,
    name: "Running Shoes",
    category: "Footwear",
    price: 2499,
    oldPrice: 3499,
    rating: 4.5,
    image: product2,
    isNew: false,
    description:
  "Lightweight running shoes designed for superior comfort, breathable support, and excellent traction on every run.",
  },
  {
    id: 3,
    name: "Smart Watch",
    category: "Electronics",
    price: 4999,
    oldPrice: 5999,
    rating: 4.7,
    image: product3,
    isNew: true,
    description:
  "Modern smartwatch with a vibrant display, health tracking features, fitness monitoring, and long-lasting battery life.",
    
  },
  {
    id: 4,
    name: "Laptop Backpack",
    category: "Bags",
    price: 1599,
    oldPrice: 1999,
    rating: 4.6,
    image: product4,
    isNew: false,
    description:
  "Durable laptop backpack with a spacious design, padded compartments, multiple storage pockets, and comfortable shoulder straps.",
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    category: "Electronics",
    price: 1899,
    oldPrice: 2499,
    rating: 4.4,
    image: product5,
    isNew: true,
    description:
  "Portable Bluetooth speaker with powerful sound, deep bass, wireless connectivity, and long-lasting battery life.",
  },
  {
    id: 6,
    name: "Casual T-Shirt",
    category: "Fashion",
    price: 799,
    oldPrice: 999,
    rating: 4.3,
    image: product6,
    isNew: false,
    description:
  "Comfortable casual T-shirt made from soft, breathable fabric with a modern fit, perfect for everyday wear.",
  },
   {
    id: 7,
    name: "Gaming Mouse",
    category: "Electronics",
    price: 1499,
    oldPrice: 1999,
    rating: 4.6,
    image: product7,
    isNew: true,
    description: "Ergonomic gaming mouse with RGB lighting and adjustable DPI.",
  },
   {
    id: 8,
    name: "Men's Hoodie",
    category: "Fashion",
    price: 1399,
    oldPrice: 1799,
    rating: 4.5,
    image: product8,
    isNew: false,
    description: "Warm and stylish hoodie made from premium cotton fabric.",
  },
  {
    id: 9,
    name: "Wireless Keyboard",
    category: "Electronics",
    price: 2199,
    oldPrice: 2699,
    rating: 4.4,
    image: product9,
    isNew: true,
    description: "Slim wireless keyboard with silent keys and long battery life.",
  },
  {
    id: 10,
    name: "Travel Bag",
    category: "Bags",
    price: 2499,
    oldPrice: 2999,
    rating: 4.5,
    image: product10,
    isNew: false,
    description: "Large travel bag with spacious compartments and durable material.",
  },
  {
    id: 11,
    name: "Sports Water Bottle",
    category: "Accessories",
    price: 499,
    oldPrice: 699,
    rating: 4.2,
    image: product11,
    isNew: true,
    description: "Leak-proof stainless steel water bottle for sports and travel.",
  },
  {
    id: 12,
    name: "Sunglasses",
    category: "Fashion",
    price: 999,
    oldPrice: 1299,
    rating: 4.4,
    image: product12,
    isNew: false,
    description: "UV-protected stylish sunglasses for everyday outdoor use.",
  },
  {
    id: 13,
    name: "Power Bank",
    category: "Electronics",
    price: 1699,
    oldPrice: 2199,
    rating: 4.6,
    image: product13,
    isNew: true,
    description: "10000mAh fast-charging power bank with dual USB ports.",
  },
  {
    id: 14,
    name: "Office Chair",
    category: "Furniture",
    price: 6999,
    oldPrice: 7999,
    rating: 4.7,
    image: product14,
    isNew: false,
    description: "Comfortable ergonomic office chair with adjustable height.",
  },
  {
    id: 15,
    name: "Coffee Mug",
    category: "Kitchen",
    price: 399,
    oldPrice: 599,
    rating: 4.3,
    image: product15,
    isNew: true,
    description: "Ceramic coffee mug with elegant design and heat resistance.",
  },
  {
    id: 16,
    name: "LED Desk Lamp",
    category: "Home",
    price: 1299,
    oldPrice: 1599,
    rating: 4.5,
    image: product16,
    isNew: false,
    description: "Energy-efficient LED desk lamp with adjustable brightness.",
  },
  {
    id: 17,
    name: "Wireless Earbuds",
    category: "Electronics",
    price: 2799,
    oldPrice: 3499,
    rating: 4.7,
    image: product17,
    isNew: true,
    description: "True wireless earbuds with crystal-clear sound and noise cancellation.",
  },
  {
    id: 18,
    name: "Yoga Mat",
    category: "Fitness",
    price: 999,
    oldPrice: 1299,
    rating: 4.5,
    image: product18,
    isNew: false,
    description: "Non-slip yoga mat with extra cushioning for comfortable workouts.",
  },
  {
    id: 19,
    name: "Digital Camera",
    category: "Electronics",
    price: 24999,
    oldPrice: 27999,
    rating: 4.8,
    image: product19,
    isNew: true,
    description: "High-resolution digital camera for photography and video recording.",
  },
  {
    id: 20,
    name: "Leather Wallet",
    category: "Accessories",
    price: 1199,
    oldPrice: 1499,
    rating: 4.4,
    image: product20,
    isNew: false,
    description: "Premium leather wallet with multiple card slots and cash compartments.",
  },
];

export default products;