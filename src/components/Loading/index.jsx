import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loading = ({ lines = 1 }) => {
  return <Skeleton count={lines} />;
};

const LoadingBox = ({ lines = 12 }) => {
  return (
    <Skeleton
      count={lines}
      height={"160px"}
      width={"172px"}
      className="m-1"
      containerClassName="d-flex flex-wrap"
    />
  );
};

export { Loading, LoadingBox };
