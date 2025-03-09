import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { TiThMenuOutline } from "react-icons/ti";
import MobileNav from "./MobileNav";

export default function Header() {
  const [open, setOpen] = useState(false);
  console.log(open);
  useEffect(() => {
    if (open) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [open]);
  return (
    <>
      <header className="bg-bodyLight absolute top-0 left-0 z-[9999] w-full py-4">
        <div className="container mx-auto flex items-center justify-between px-4">
          <img className="w-[120px]" src={logo} alt="" />
          <nav className="hidden lg:flex lg:gap-8">
            <a href="#">Sell Crypto</a>
            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#">Contact Us</a>
          </nav>
          <div className="inline-flex items-center gap-4">
            <button className="bg-main rounded-md px-4 py-1.5 text-white">
              Contact
            </button>
            <span
              onClick={() => setOpen(true)}
              className="cursor-pointer lg:hidden"
            >
              <TiThMenuOutline size={35} className="text-main" />
            </span>
          </div>
        </div>
      </header>
      <MobileNav open={open} setOpen={setOpen} />
    </>
  );
}
