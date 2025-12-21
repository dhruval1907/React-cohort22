import React from "react";
import Info1 from "./Info1";
import Info2 from "./Info2";

const Info = () => {
  return (
    <div class="h-[15%] w-full flex ">
      <Info1 name="DESIGNER" num="150+" />
      <Info1 name="CLIENTS" num="500+" />
      <Info2 name="MASTERPEICES" num="20K+" />
      <Info2 name="EVENTS" num="50+" />
    </div>
  );
};

export default Info;
