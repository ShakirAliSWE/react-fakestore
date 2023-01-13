import React from "react";
import { Link } from "react-router-dom";
import { base64Encode } from "../../utils";

export default function Card({ id = 0, title = "", image = "", price = 0 }) {
  if (title.length > 16) {
    title = title.substring(0, 13) + "...";
  }

  return (
    <Link to={`../product/${base64Encode(id)}`}>
      <div className="mb-2 custom-product-card" style={{ width: "172px" }}>
        <img
          src={image}
          style={{ width: "140px", height: "120px" }}
          className="mb-2"
          alt={title}
        />
        <div className="fw-normal">{title}</div>
        <div className="fw-bolder">PKR {price}</div>
      </div>
    </Link>
  );
}
