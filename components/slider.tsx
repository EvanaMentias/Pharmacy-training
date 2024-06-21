"use client";
import { Button } from "@nextui-org/button";
import React, { useRef } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import Image from "next/image";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import Link from "next/link";
const Slider = () => {
  const filteredItems = [
    {
      id: 1,
      img: "/_1.svg",
      header: "Refill On-The-Go",
      description:
        "Easily refill your prescriptions anytime, anywhere. With our user-friendly mobile service, say goodbye to waiting and phone calls. Take control of your health with SuperHealt",
    },
    {
      id: 2,
      img: "/_2.svg",
      header: "Pill Reminders",
      description:
        "Never forget your medications or refills. Our personalized Pill Reminders keep you on schedule and ensure you stay healthy. Simplify your healthcare routine with SuperHealth ",
    },

    {
      id: 3,
      img: "/_1.svg",
      header: "Refill On-The-Go",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
    },
    {
      id: 4,
      img: "/_1.svg",
      header: "Refill On-The-Go",
      description:
        "lorem refill your prescriptions anytime, anywhere. With our user-friendly mobile service, say goodbye to waiting and phone calls. Take control of your health with SuperHealth ",
    },
  ];

  const slideRef = useRef<HTMLDivElement>(null);

  const onNext = () => {
    if (slideRef.current) {
      slideRef.current.scrollBy({
        left: 400,
        behavior: "smooth",
      });
    }
  };
  const onPrev = () => {
    if (slideRef.current) {
      slideRef.current.scrollBy({
        left: -400,
        behavior: "smooth",
      });
    }
  };
  return (
    <div>
      <div className="  w-full bg-sky-200 flex p-10 pr-0 rounded-bl-3xl gap-10">
        <div className=" ml-36 flex-1 flex-col items-center w-full">
          <div className="font-bold text-3xl py-5">
            <h1>
              Manage Your Health on-the-go <br /> with Our Free Mobile App
            </h1>
          </div>
          <div>
            <p>
              Stay in control of your health with our state-of-the-art mobile
              app. Our SuperHealth Pharmacy app empowers you to refill your
              prescriptions 24/7, set pill reminders to never miss a dose, and
              securely store your personal health information. Whether you're at
              home or on-the-go, our app ensures a seamless and convenient
              pharmacy experience at your fingertips.
            </p>
          </div>
          <div className="py-10">
            <Button radius="full" className="bg-neeviBlue text-white mx-5">
              <span>Download IOS</span>{" "}
              <Image
                src="/download.svg"
                alt="download"
                width={10}
                height={10}
              />
            </Button>
            <Button radius="full" className="bg-neeviBlue  text-white">
              <span>Download Android</span>{" "}
              <Image
                src="/download.svg"
                alt="download"
                width={10}
                height={10}
              />
            </Button>
          </div>
          <div className="flex items-center pb-10">
            <Button
              className="rounded-full  bg-transparent border-gray-500 border-2 mx-5"
              onClick={onPrev}
            >
              <GrPrevious />
            </Button>

            <Button
              className=" bg-transparent border-gray-500 border-2 rounded-full"
              onClick={onNext}
            >
              <GrNext />
            </Button>
          </div>
        </div>
        <div className="flex-1 gap-5  flex justify-center ">
          <div
            ref={slideRef}
            className="flex overflow-x-hidden gap-5"
            id="slider"
          >
            {filteredItems.map((item) => (
              <Card className="flex-none p-4 w-1/2 rounded-3xl shadow-none">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl mt-5"
                  src={item.img}
                  width={40}
                  height={40}
                />
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start mt-10">
                  <h1 className=" font-bold text-3xl text-neeviBlueBlack">
                    {item.header}
                  </h1>
                </CardHeader>
                <CardBody className="overflow-visible py-2 ">
                  <p className="mt-7">{item.description}</p>
                  <Button className="bg-white border-2 border-gray-500 rounded-full mt-7 w-32 ">
                    Read More
                  </Button>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-neeviBlueBlack p-20">
        <div className="flex ml-36 ">
          <div className="flex-1">
            <Image
              className=""
              src="/Logo.svg"
              alt="Logo"
              width={200}
              height={200}
            />
            <h1 className="text-white py-8">Follow us on social media</h1>
            <div className="flex gap-1">
              <Image
                className=""
                src="/facebook.svg"
                alt="Logo"
                width={40}
                height={40}
              />
              <Image
                className=""
                src="/insta.svg"
                alt="Logo"
                width={40}
                height={40}
              />
            </div>
            <div className="py-5">
              <Button
                radius="full"
                className="bg-green-600 border-2 border-white text-white"
              >
                <span>Download App</span>{" "}
                <Image
                  src="/download.svg"
                  alt="download"
                  width={10}
                  height={10}
                />
              </Button>
            </div>
          </div>
          <div className="flex-1">
            <div className="grid grid-cols-3 text-white">
              <div className="text-md">
                <h1 className="pb-16 ">What we do</h1>
                <h1 className=" border-b border-solid border-green-700 inline-block">
                  <Link href="./">Home</Link>
                </h1>
                <h1 className="py-3">About us</h1>
                <h1 className="py-2">Services</h1>
              </div>
              <div className="text-md">
                <h1 className="pb-16 ">Who we are</h1>
                <h1>FAQ</h1>
                <h1 className="py-3">Careers</h1>
                <h1 className="py-2">Privacy</h1>
              </div>
              <div className="text-md">
                <h1 className="pb-16 ">Need help?</h1>
                <h1>Contact us</h1>
                <h1 className="py-3">Help Center</h1>
                <h1 className="py-2">Coronavirus</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
