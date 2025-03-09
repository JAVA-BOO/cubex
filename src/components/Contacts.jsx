import React from "react";
import ContactAbout from "./ContactAbout";
import QuickLinks from "./QuickLinks";

export default function Contacts() {
  return (
    <section className="bg-[#2B0F2E]">
      <div className="container mx-auto px-5 py-4">
        <div className="justify-between lg:flex">
          <ContactAbout />
          <QuickLinks />
        </div>
        <div className="align-center py-4 text-center text-white">
          <hr className="text-white" />
          <p className="py-5 text-[12px] lg:text-[16px]">
            Copyright © 2024 Cubex. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
