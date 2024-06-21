import Image from "next/image";
import Testing from "./Testing";

export default function AboutPage() {
  return (
    <div>
      <div className=" w-full bg-[url('/background.svg')] bg-cover pt-64">
        <div className="container mx-auto md:flex items-center py-16 px-4 md:px-8 ">
          <div className="md:w-1/2 justify-center ">
            <div>
              <h1 className="text-white text-3xl md:text-5xl mb-4 ">
                Comprehensive Testing <br /> Forms Hub:
                <span className="text-green-500 font-bold">
                  Access Essential <br /> Health Documentation
                </span>
              </h1>
              <p className="text-white pt-8 text-xl ">
                Access necessary testing and vaccination forms
                <br /> conveniently at Super health pharmacy. Streamline <br />{" "}
                your healthcare process with our user-friendly <br /> platform
                for a seamless experience
              </p>
            </div>
          </div>
          <div className="md:w-1/2  ">
            <Image
              src="/Speech_Bubble.svg"
              alt="Dentist and patient"
              width={550}
              height={550}
              className="rounded-lg animate-pulse-slow"
            />
          </div>
        </div>
        <div>
          <Testing />
        </div>
      </div>
    </div>
  );
}
