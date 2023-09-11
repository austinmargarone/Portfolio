import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div className="flex">
      {/* Mobile */}
      <div className="contact relative mx-auto mb-[3rem] flex h-[19.4375rem] w-[21.5625rem] md:hidden">
        <div>
          <div className="absolute shrink-0">
            <Image
              src="/Group.svg"
              width={362}
              height={362}
              alt="Background Mobile"
            />
          </div>
        </div>
        <div className="absolute">
          <h4 className="contacttext mx-[1rem] mb-[1rem] mt-[4.87rem]">
            Have a project in mind that requires technical expertise?
          </h4>
          <button className="contactbtn mx-auto">
            <p className="contactbtntext">Get in Touch with Me</p>
            <Image src="/Arrow2.svg" width={14} height={0} alt="Ellipse" />
          </button>
        </div>
      </div>
      {/* Desktop */}
      <div className="mx-auto hidden md:block md:max-w-[80rem]">
        <div className="contact relative flex h-[330px] w-[1270px] shrink-0">
          <div className="absolute">
            <Image
              src="/Group1.svg"
              width={1270}
              height={330}
              alt="Background Desktop"
            />
          </div>
          <div className="absolute flex">
            <h2 className="ml-[4.66rem] mt-[5.19rem] w-[32.5rem] text-left">
              Have a project in mind that requires technical expertise?
            </h2>
            <div className="ml-[17.62rem] mt-[10.69rem] flex">
              <button className="contactbtnlg flex">
                <p className="boldbody text-white">Get in Touch with Me</p>
                <Image src="/Arrow2.svg" width={16} height={0} alt="Ellipse" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
