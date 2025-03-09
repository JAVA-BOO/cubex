import React from "react";
import Btc1 from "../assets/btc1.png";
import Btc2 from "../assets/pay-bills.png";

export default function SellBitcoin() {
  return (
    <section>
      <div className="container mx-auto gap-10 px-4 lg:flex">
        <div className="bg-main relative container mx-auto mb-6 h-[500px] overflow-hidden lg:h-[669px]">
          <h2 className="px-6 pt-8 text-[30px] leading-tight font-black text-[#FCCAFF] lg:text-[48px]">
            Sell Bitcoin <br />
            in Nigeria
          </h2>
          <img className="absolute right-0" src={Btc1} alt="" />
        </div>
        {/* second card */}

        <div className="bg-main relative container mx-auto mb-6 h-[500px] overflow-hidden lg:h-[669px]">
          <h2 className="px-6 pt-8 text-[30px] leading-tight font-black text-[#FCCAFF] lg:text-[48px]">
            Pay your <br />
            everyday bills <br /> with Crypto <br />
            in Nigeria
          </h2>
          <img className="absolute right-0" src={Btc2} alt="" />
        </div>
      </div>
    </section>
  );
}
