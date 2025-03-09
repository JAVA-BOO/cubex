import React from "react";
import ReviewCard from "./ReviewCard";

export default function Review() {
  return (
    <section className="overflow-hidden">
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-main font-sans text-[30px] leading-tight font-black text-balance lg:text-[50px]">
          Reviews from happy customers
        </h2>
        <div className="noScrollBar w-full overflow-x-auto">
          <div className="flex w-max gap-6">
            {reviews.map((item, index) => {
              return (
                <ReviewCard
                  key={index}
                  comments={item.comment}
                  name={item.name}
                  source={item.source}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

const reviews = [
  {
    comment: "The withdrawals were quicker than expected. Well done guys",
    name: "@John Doe",
    source: "Playstore",
  },
  {
    comment: "The withdrawals were quicker than expected. Well done guys",
    name: "@John Doe",
    source: "Playstore",
  },
  {
    comment: "The withdrawals were quicker than expected. Well done guys",
    name: "@John Doe",
    source: "Playstore",
  },
  {
    comment: "The withdrawals were quicker than expected. Well done guys",
    name: "@John Doe",
    source: "Playstore",
  },
  {
    comment: "The withdrawals were quicker than expected. Well done guys",
    name: "@John Doe",
    source: "Playstore",
  },
];
