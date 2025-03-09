import React from "react";
import Phone from "../assets/phonenew.png";

export default function Hero() {
  return (
    <section className="bg-bodyLight px-5 py-20 xl:py-0">
      <div className="container mx-auto px-4 md:grid md:grid-cols-2 md:items-center md:gap-10 xl:h-screen">
        <div>
          <h1 className="text-main font-sans text-[45px] leading-[110%] font-black xl:text-[4rem]">
            Buy and Sell Crypto at the best price instantly.
          </h1>
          <p className="text-main py-5 text-base leading-[140%]">
            Potter ipsum wand elf parchment wingardium. Cursed a in half-blood
            owl wand armchairs. Parseltongue tweak floor 'zis three sticking
            wand so hollow hippogriffs. Bott's roaring releases who socks
            grindlewald. Holly restricted 9¾ banges and owl. Match toad-like
            floor 'zis blue dementors hunt second through fawkes.
          </p>
        </div>
        <div>
          <img
            className="h-[500px] w-full xl:ml-auto xl:w-[80%]"
            src={Phone}
            alt="A phone"
          />
        </div>
      </div>
    </section>
  );
}
