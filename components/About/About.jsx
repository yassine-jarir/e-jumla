import Image from "next/image";
import aboutPic from "@/public/assets/AboutUs.svg";
const About = ({ translation, isRTL }) => {
  return (
    <div
      id="about"
      dir={isRTL ? "rtl" : "ltr"}
      className=" w-full flex md:flex-row flex-col justify-center items-center sm:p-10 p-5"
    >
      <div
        className={`md:w-[50%] w-full h-full flex flex-col sm:gap-10 gap-5 rounded-lg`}
      >
        <div className="sm:text-5xl text-4xl font-extrabold text-[var(--primary-color)]">
          <h1>{translation?.title}</h1>
        </div>
        <div className="flex flex-col gap-5">
          <p className=" text-start text-black sm:text-lg text-base font-medium">
            {translation?.description}
          </p>
        </div>
      </div>
      <div
        className={`md:w-[50%] w-full h-full flex justify-center items-center `}
      >
        <Image
          src={aboutPic}
          width={2000}
          height={2000}
          alt="about pic"
          className="sm:w-[500px] w-[300px]  mx-auto"
        />
      </div>
    </div>
  );
};

export default About;