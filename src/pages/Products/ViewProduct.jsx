import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Loading, LoadingBox } from "../../components/Loading";
import { serverRequest, base64Decode } from "../../utils";

export default function ViewProduct() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({});

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = () => {
    setLoading(true);
    serverRequest(
      `https://fakestoreapi.com/products/${base64Decode(id)}`,
      (data) => {
        setProduct(data);
        setLoading(false);
      }
    );
  };

  return (
    <>
      <div className="">
        <Link to="../../" className="btn">
          Go Back Home
        </Link>
      </div>
      <div className="row mt-4">
        <div className="col-md-4 text-center mb-4">
          {loading ? (
            <LoadingBox lines={1} />
          ) : (
            <img
              src={product.image}
              className="img-fluid"
              style={{ width: "60%" }}
            />
          )}
        </div>
        <div className="col-md-6">
          <div className="h4">{loading ? <Loading /> : product.title}</div>
          {loading ? (
            <Loading />
          ) : (
            <div className="badge bg-secondary mb-2 text-uppercase">
              {product.category}
            </div>
          )}
          <div className="fw-normal mb-2">
            {loading ? <Loading /> : product.description}
          </div>
          <div className="h2 fw-bold mb-4">
            {loading ? <Loading /> : "PKR " + product.price}
          </div>
          <div className="text-center">
            {loading ? (
              <Loading />
            ) : (
              <button className="btn btn-primary w-75 m-1">ADD TO CART</button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
