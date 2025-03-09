import React from "react";
import Phone2 from "../assets/reviews-phone.png";

export default function Atims() {
  return (
    <section>
      <div className="container mx-auto items-center px-4 lg:grid lg:grid-cols-2 lg:gap-10 lg:py-10">
        <div className="lg:col-[2]">
          <h2 className="text-main font-sans text-[30px] leading-tight font-black text-balance lg:text-[50px]">
            Get The Best Trading Experience in Nigeria
          </h2>
          <p className="text-main py-5 text-[14px] leading-tight lg:text-[20px]">
            In the heart of Nigeria's crypto community, CubEx stands our as your
            trusted friend. Since 2020, we have empowered every enthusiast to
            navigate their crypto journey with unparralleled confidence
          </p>
          <p className="text-main pb-5 text-[14px] leading-tight lg:text-[18px]">
            Conviniently convert 170+ crypto to cash, crypto to crypto, pay
            bills, generate incoices, and more.
          </p>
        </div>{" "}
        <img
          className="mx-auto w-[80%] lg:col-span-1 lg:row-[1]"
          src={Phone2}
          alt=""
        />
      </div>
    </section>
  );
}
