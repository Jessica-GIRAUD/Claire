import React from "react";

import Presentation from "./Presentation";
import ScrollArrow from "./ScrollArrow";
import Who from "./Who";
import Why from "./Why";

const Sophrologie = () => {
  return (
    <div className="greenPage">
      <Presentation />
      <Who />
      <Why />
      <ScrollArrow />
    </div>
  );
};

export default Sophrologie;
