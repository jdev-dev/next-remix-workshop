import React from "react";

import { APP_NAME } from "../../shared/utils/constants";

const Banner = () => (
  <div className="banner">
    <div className="container">
      <h1 className="logo-font">{APP_NAME.toLowerCase()}</h1>
      <p>A place to share your knowledge.</p>
    </div>
  </div>
);

export default Banner;
