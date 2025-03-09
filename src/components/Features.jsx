import React from "react";
import Wallets from "../assets/wallets.png";
import Rates from "../assets/rates.png";
import Hands from "../assets/Hands.png";

export default function Features() {
  return (
    <section>
      <div className="container mx-auto grid gap-5 px-4 py-10 md:grid-cols-5 md:grid-rows-[250px_250px] md:gap-7">
        {/* ---- start of features div---- */}
        <div className="bg-secondary/20 mx-auto w-full overflow-hidden rounded-[10px] px-7 pt-10 md:col-span-3 lg:flex lg:gap-8">
          <div className="mt-7">
            <h2 className="text-main font-san text-[30px] font-black lg:text-[40px]">
              Secure Wallets
            </h2>
            <p className="text-main py-1 text-base leading-tight lg:text-[18px]">
              Your digital assets are always protected by industry-leading
              security measures
            </p>
          </div>
          <img className="mx-auto w-[300px]" src={Wallets} alt="" />
        </div>
        {/* ----- second components ----- */}
        <div className="bg-secondary/20 mx-auto w-full overflow-hidden rounded-[10px] px-7 pt-10 md:col-span-3 md:row-[2] lg:flex lg:gap-8">
          <div>
            <h2 className="text-main font-san text-[30px] font-black lg:text-[40px]">
              Best Rates
            </h2>
            <p className="text-main py-1 text-base leading-tight lg:text-[18px]">
              Your digital assets are always protected by industry-leading
              security measures
            </p>
          </div>
          <img className="mx-auto w-[300px]" src={Rates} alt="" />
        </div>
        {/* --- third components--- */}
        <div className="bg-secondary/20 relative mx-auto overflow-hidden rounded-[10px] px-7 py-10 md:col-span-2 md:row-span-2 lg:flex lg:flex-col-reverse lg:gap-8 lg:pb-25">
          <div>
            <h2 className="text-main font-san text-[30px] font-black lg:text-[40px]">
              24/7 Support
            </h2>
            <p className="text-main py-1 text-base leading-tight lg:text-[18px]">
              Your digital assets are always protected by industry-leading
              security measures
            </p>
          </div>
          <img
            className="mx-auto w-[300px] lg:absolute lg:top-0 lg:left-0 lg:w-[400px]"
            src={Hands}
            alt=""
          />
        </div>
        {/* ---- stop here ---- */}
      </div>
    </section>
  );
}
