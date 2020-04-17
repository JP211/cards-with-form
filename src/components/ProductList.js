import React, { useState, useEffect } from "react";
import NewProductForm from "./NewProductForm";
import uuid from "uuid/v1";
import { ProductCard } from "./ProductCard";

const ProductList = () => {
  const [product, setProduct] = useState([
    {
      title: "Sea Shell Necklace",
      review: "Absolutely Beautiful!",
      price: 29.99,
      score: 5,
      imgUrl:
        "https://images.unsplash.com/photo-1573041309991-c841f6a27c11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
      id: 1
    },
    {
      title: "Pearl Crystal Bracelet",
      review: "Perfectly complements my wardrobe.",
      price: 19.99,
      score: 4,
      imgUrl:
        "https://images.unsplash.com/photo-1474585628895-4579822e21a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80",
      id: 2
    },
    {
      title: "Druzy Quartz Charms",
      review: "So sparkly, will definitely buy more!",
      price: 9.99,
      score: 4.5,
      imgUrl:
        "https://images.unsplash.com/photo-1558882268-15aa056d885f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
      id: 3
    }
  ]);
  const addProduct = ({ title, review, price, score, imgUrl }) => {
    setProduct([
      ...product,
      {
        title: title,
        review: review,
        price: price,
        score: score,
        imgUrl: imgUrl,
        id: uuid()
      }
    ]);
  };

  useEffect(() => {
    console.log("useEffect hook ran", product);
  }, [product]);

  return (
    <div className="product-list">
      <ProductCard product={product} />
      <NewProductForm addProduct={addProduct} />
    </div>
  );
};

export default ProductList;
