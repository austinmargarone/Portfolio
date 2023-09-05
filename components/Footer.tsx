"use client";

import Image from "next/image";

type Props = {};

const Footer = (props: Props) => {
  return (
    <section className="mx-[1.5rem] my-[3rem] flex flex-col justify-between gap-[1rem] border-t-[3px] border-white1 px-[1.5rem] py-[3rem] md:mx-[5.31rem] md:my-[3.25rem] md:flex-row md:p-0">
      <div className="flex content-center justify-center md:pt-[2rem]">
        <h1 className="text-lg leading-[1.8rem] text-grey">
          © 2023 Austin. All rights reserved.
        </h1>
      </div>
      <div className="flex content-center justify-center gap-[1.5rem] md:pt-[2rem]">
        <div>
          <Image src="/Social.svg" width={24} height={4} alt="Social Link" />
        </div>
        <div>
          <Image src="/GitHub.svg" width={24} height={24} alt="Github Link" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
