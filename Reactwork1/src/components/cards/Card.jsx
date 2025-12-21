import React from "react";
import Card1 from "./Card1";

const Card = () => {
  return (
    <div class="flex w-full h-[40%] gap-3 px-6 bg-black ">
      <Card1
        name="INDENDEPANCY"
        p="Explore the creativity of independent designers from around the globe."
      />
      <Card1
        name="UNIQUITY"
        p="Discover the charm of unique pieces that stand out effortlessly."
      />
      <Card1
        name="QUALITY"
        p="Experience unparalleled craftsmanship and attention to detail."
      />
      <Card1
        name="SUSTAINABILITY"
        p="Embrace eco-conscious fashion choices without compromising on style."
      />
    </div>
  );
};

export default Card;
