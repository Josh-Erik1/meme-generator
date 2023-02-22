import React from "react";
import memeImage from "./Inputs";

const Image = () => {
  return (
    <div className="flex align-center mt-4 justify-center">
      <img src={memeImage} alt="" />
    </div>
  );
};

export default Image;
