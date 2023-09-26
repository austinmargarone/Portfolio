import React from "react";

type Props = { my_role: string; start_date: string; end_date: string };

const MyRole = (props: Props) => {
  return (
    <section className="p2 md:p2lg flex-col md:shrink-0 md:flex-row md:content-center md:justify-between">
      <div>
        <p className="md:boldbody smallbold mb-[.62rem] dark:text-slate">
          {props.my_role}
        </p>
        <p className="md:boldbase boldp dark:text-white">Software Engineer</p>
      </div>
      <div>
        <p className="md:boldbody smallbold mb-[.62rem] dark:text-slate">
          {props.start_date}
        </p>
        <p className="md:boldbase boldp dark:text-white">02/03/2023</p>
      </div>
      <div>
        <p className="md:boldbody smallbold mb-[.62rem] dark:text-slate">
          {props.end_date}
        </p>
        <p className="md:boldbase boldp dark:text-white">02/03/2023</p>
      </div>
    </section>
  );
};

export default MyRole;
