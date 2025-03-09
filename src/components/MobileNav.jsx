import React from "react";
import { FaTimes } from "react-icons/fa";

export default function MobileNav({ open, setOpen }) {
  return (
    <div
      className={`fixed top-0 z-[9999] h-screen w-full overflow-hidden bg-black/50 duration-300 ${open ? "right-0" : "-right-full"}`}
      onClick={() => setOpen(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-main absolute top-0 right-0 h-screen w-1/2"
      >
        <span
          className="absolute top-5 right-5 text-white"
          onClick={() => setOpen(false)}
        >
          <FaTimes size={20} />
        </span>
        <nav className="mt-20 flex flex-col gap-8 pl-8 *:text-white *:duration-500 *:hover:text-purple-950">
          <a onClick={() => setOpen(false)} href="#">
            Sell Crypto
          </a>
          <a onClick={() => setOpen(false)} href="#">
            About
          </a>
          <a onClick={() => setOpen(false)} href="#">
            Blog
          </a>
          <a onClick={() => setOpen(false)} href="#">
            Contact Us
          </a>
        </nav>
      </div>
    </div>
  );
}
