import React from "react";
import Caro from "../assets/Ellipse.png";

export default function ReviewCard({ comments, name, source }) {
  return (
    <>
      <div className="bg-main/7 my-4 w-[300px] px-5 py-5 md:w-[403px]">
        <span className="text-main text-[40px] leading-tight font-black">
          "
        </span>
        <p className="text-main text-[18px]">{comments}</p>
        <div className="flex items-center justify-between pt-7">
          <div className="">
            <h2 className="text-main text-[12px] font-extrabold">{name}</h2>
            <p className="text-main text-[10px]">{source}</p>
          </div>
          <img src={Caro} alt="" />
        </div>
      </div>
    </>
  );
}
