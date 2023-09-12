import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="about md:aboutlg mx-auto my-[3rem] bg-white1 dark:bg-darkbg md:max-w-[80rem] xl:max-w-[120rem]">
      <div>
        <h2 className="dark:text-white">
          What <span className="underline-magic w-fit">they say</span> about me
        </h2>
      </div>
      <div className="md:hidden">
        <div className="flex gap-[2rem]">
          <div>
            <Image
              className="shrink-0 rounded-[1rem]"
              src="/Headshot.jpg"
              width={328}
              height={328}
              alt="Headshot"
            />
          </div>
          <div className="flex gap-[1rem]">
            <div className="circle">
              <Image
                className="shrink-0 rounded-[1rem]"
                src="/arrow-left.svg"
                width={20}
                height={20}
                alt="Arrow Left"
              />
            </div>
            <div className="circle">
              <Image
                className="shrink-0 rounded-[1rem]"
                src="/arrow-right.svg"
                width={20}
                height={20}
                alt="Arrow Right"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="mb-[1rem] mt-[2.5rem]">
            <Image
              className="shrink-0 rounded-[1rem]"
              src="/Stars.svg"
              width={200}
              height={200}
              alt="Stars"
            />
          </div>
          <div>
            <p className="regbody mb-[1.5rem] self-stretch text-black dark:text-white">
              He was very knowledgeable about what he was doing and provided a
              high level of service. I could not have asked for more. I will
              definitely be using him in the future, and would highly recommend
              him to anyone considering his services!
            </p>
          </div>
          <div>
            <p className="boldbody self-stretch text-black dark:text-white1">
              - Austin Margarone
            </p>
            <p className="regbody self-stretch text-slate	dark:text-white">
              Managing-Member of FC Virtual Tours
            </p>
          </div>
        </div>
      </div>
      <div className="mt-[4rem] hidden md:block">
        <div className="flex">
          <div className="circlelg mt-[6rem] flex">
            <Image
              className="shrink-0 rounded-[1rem]"
              src="/arrow-left.svg"
              width={24}
              height={24}
              alt="Arrow Left"
            />
          </div>
          <div className="flex">
            <div className="mx-[1.62rem]">
              <Image
                className="shrink-0 rounded-[1rem]"
                src="/Headshot.jpg"
                width={328}
                height={328}
                alt="Headshot"
              />
            </div>
            <div className="absolute h-full w-full">
              <Image
                src="/Group1.svg"
                className="object-cover"
                fill={true}
                alt="Background Desktop"
              />
            </div>
            <div>
              <div className="mb-[1rem]">
                <Image
                  className="shrink-0 rounded-[1rem]"
                  src="/Stars.svg"
                  width={116}
                  height={20}
                  alt="Stars"
                />
              </div>
              <div>
                <p className="regbase mb-[2rem] text-slate">
                  Austin was very knowledgeable about what he was doing and
                  provided a high level of service. I could not have asked for
                  more. I will definitely be using him in the future, and would
                  highly recommend him to anyone considering his services!
                </p>
              </div>
              <div>
                <p className="boldbody mb-[.25rem] self-stretch text-black">
                  - Austin Margarone
                </p>
                <p className="regbody self-stretch text-slate	">
                  Managing-Member of FC Virtual Tours
                </p>
              </div>
            </div>
          </div>
          <div className="circlelg mt-[6rem]">
            <Image
              className="shrink-0 rounded-[1rem]"
              src="/arrow-right.svg"
              width={24}
              height={24}
              alt="Arrow Right"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
