import React from "react";
import ReactLoading from "react-loading";
const Loading = () => {
  return (
    <div className="w-full min-h-[300px] flex justify-center items-center">
      <ReactLoading
        type={"spinningBubbles"}
        color={"#000"}
        height={"80px"}
        width={"80px"}
      />
    </div>
  );
};

export default Loading;
