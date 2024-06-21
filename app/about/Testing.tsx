"use client";
import { Select, SelectItem } from "@nextui-org/select";
import Image from "next/image";
import Link from "next/link";

const branches = [
  {
    key: "branch1",
    name: "branch1",
  },
  {
    key: "branch2",
    name: "branch2",
  },
  {
    key: "branch3",
    name: "branch3",
  },
];
const Testing = () => {
  return (
    <div className="min-h-screen bg-blue-100 p-28 ">
      <h1 className="text-center   text-3xl pb-16">
        <span className=" font-bold">Comprehensive Testing Forms Hub</span>
        <br /> Access Essential Health Documentation
      </h1>
      <div className="grid  md:grid-cols-4 gap-6 mx-60 ">
        <div className="bg-white rounded-3xl col-span-2">
          <div className="p-10">
            <Image
              className="flex-1/2 mb-4"
              src="/gridPic1.svg"
              alt="vaccine"
              width={70}
              height={70}
            />

            <h1 className="text-2xl font-semibold text-neeviBlueBlack">
              COVID-19 Vaccination form
            </h1>
            <Select
              label="Select a branch"
              className="w-96 mt-3"
              classNames={{
                trigger: "rounded-full bg-white drop-shadow-md shadow-inner",
              }}
            >
              {branches.map((branch) => (
                <SelectItem key={branch.key}>{branch.name}</SelectItem>
              ))}
            </Select>
            <div className="mt-3 flex gap-3">
              <Image
                className="flex-1/2"
                src="/right-arrow-circle.svg"
                alt="vaccine"
                width={27}
                height={27}
              />
              <Link className="border-b-2 border-green-500" href={"#"}>
                Click to access Form
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-3xl col-span-2  ">
          <div className="p-10">
            <Image
              className="flex-1/2 mb-4"
              src="/gridPic2.svg"
              alt="vaccine"
              width={70}
              height={70}
            />

            <h1 className="text-2xl font-semibold text-neeviBlueBlack">
              COVID-19 Testing
            </h1>
            <Select
              label="Select a branch"
              className="w-96 mt-3"
              classNames={{
                trigger: "rounded-full bg-white drop-shadow-md shadow-inner",
              }}
            >
              {branches.map((branch) => (
                <SelectItem key={branch.key}>{branch.name}</SelectItem>
              ))}
            </Select>
            <div className="mt-3 flex gap-3">
              <Image
                className="flex-1/2"
                src="/right-arrow-circle.svg"
                alt="vaccine"
                width={27}
                height={27}
              />
              <Link className="border-b-2 border-green-500" href={"#"}>
                Click to access Form
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-3xl col-start-2 col-end-4">
          <div className="p-10">
            <Image
              className="flex-1/2 mb-4"
              src="/gridPic3.svg"
              alt="vaccine"
              width={70}
              height={70}
            />

            <h1 className="text-2xl font-semibold text-neeviBlueBlack">
              Monkey Pox Vaccination Appointment
            </h1>
            <Select
              label="Select a branch"
              className="w-96 mt-3"
              classNames={{
                trigger: "rounded-full bg-white drop-shadow-md shadow-inner",
              }}
            >
              {branches.map((branch) => (
                <SelectItem key={branch.key}>{branch.name}</SelectItem>
              ))}
            </Select>
            <div className="mt-3 flex gap-3">
              <Image
                className="flex-1/2"
                src="/right-arrow-circle.svg"
                alt="vaccine"
                width={27}
                height={27}
              />
              <Link className="border-b-2 border-green-500" href={"#"}>
                Click to access Form
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testing;
