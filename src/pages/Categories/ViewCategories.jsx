import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../../components/Card";
import { LoadingBox } from "../../components/Loading";
import { serverRequest } from "../../utils";

export default function ViewCategories() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, [id]);

  const getProducts = async () => {
    await serverRequest(
      `https://fakestoreapi.com/products/category/${id}`,
      (data) => {
        setProducts(data);
      }
    );
  };

  return (
    <div className="d-flex flex-wrap">
      {products.length ? (
        products.map((p) => (
          <Card
            key={p.id}
            id={p.id}
            title={p.title}
            image={p.image}
            price={p.price}
          />
        ))
      ) : (
        <LoadingBox />
      )}
    </div>
  );
}
