import React from "react";
import Image from "next/image";

import Branches from "./branches";
const Landing = () => {
  return (
    <div>
      <div className=" w-full bg-[url('/background.svg')] bg-cover flex pt-64 ">
        <div className="w-1/2 bg-slate-50 " style={{ height: "51rem" }}>
          <div className=" flex flex-col items-start justify-center h-full ml-64">
            <h1 className="font-bold text-3xl py-2">
              Our Branches:
              <br />
              <span className="text-green-600">Serving Your Community</span>
            </h1>
            <p className="w-3/4 mt-5 text-neeviBlueBlack">
              we are proud to have established multiple branches serving diverse
              communities across [Your Location]. Each of our branches embodies
              our commitment to providing exceptional healthcare services and
              personalized care to the neighborhoods we serve. With a focus on
              accessibility and convenience, our branches are strategically
              located to ensure easy access to top-quality pharmaceutical care,
              expert guidance, and a wide range of health and wellness products.
              Our friendly and knowledgeable staff at each branch is dedicated
              to meeting the unique needs of our customers while upholding the
              highest standards of service excellence. Explore our network of
              branches and experience the convenience and care that [Your
              Pharmacy Name] brings to your community.
            </p>
          </div>
        </div>
        <div className="w-1/2 mt-20">
          <Image
            alt="Logo"
            className="rounded-3xl -ml-24"
            height={520}
            src="/pharmacy.svg"
            width={730}
          />
        </div>
      </div>
      <div>
        <Branches />
      </div>
    </div>
  );
};

export default Landing;
