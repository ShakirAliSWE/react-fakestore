import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Loading } from "../../components/Loading";

import { serverRequest } from "../../utils";

export default function AllCategories() {
  const { state } = useLocation();
  const [loading, setLoading] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  const locationState = state ? state : { name: "All Categories" };

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    setActiveCategory(locationState.name);
  }, [locationState.name]);

  const getCategories = async () => {
    setLoading(true);
    await serverRequest(
      "https://fakestoreapi.com/products/categories",
      (data) => {
        setCategories(data);
        setLoading(false);
      }
    );
  };

  return (
    <div className="mt-2 mb-2">
      <div className="fw-bold mb-2">Categories</div>

      <ul className="list-group">
        <Link to={`../../`}>
          <li
            className={`list-group-item list-group-item-action text-capitalize ${
              activeCategory == "All Categories" ? "active" : null
            }`}
          >
            All Categories
          </li>
        </Link>
        {loading ? <Loading lines={10} /> : null}
        {categories.map((c, i) => (
          <Link key={i} to={`../category/${c}`} state={{ name: c }}>
            <li
              className={`list-group-item list-group-item-action text-capitalize ${
                activeCategory == c ? "active" : null
              }`}
            >
              {c}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
