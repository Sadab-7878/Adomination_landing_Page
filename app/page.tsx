import { Josefin_Sans } from "next/font/google";
import Image from "next/image";
import Logo from "../public/logo.jpg";
import Marquee from "react-fast-marquee";

const josefinSans = Josefin_Sans({
  weight: "600",

  subsets: ["latin"],
});

const josefinSans1 = Josefin_Sans({
  weight: "400",

  subsets: ["latin"],
});

export default function Home() {
  return (
    <main>
      <div className="mt-28 flex flex-col items-center">
        <h1 className="-mb-1 mr-32">THE</h1>
        <h1 style={josefinSans.style} className="font-sans text-6xl">
          A<span className="text-5xl">D</span>
          <span className="text-4xl" style={josefinSans1.style}>
            omination
          </span>
        </h1>
      </div>

      <div className="my-28">
        {/* 1 */}
        <div className="mx-4  rounded-[80px] lg:rounded-[100px] h-[300px]  lg:w-[700px] lg:h-[400px] bg-[#CD2B2D] ">
          <div className="px-20 py-10">

        
          {/* 1 */}
          <div
            style={josefinSans.style}
            className=" flex justify-between font-bold items-center"
          >
            <div className="text-4xl">Craft CMS</div>

            <div className="-mr-8">
              <Image src={Logo} alt="logo" className="h-20 w-20 rounded-full" />
            </div>
          </div>

          </div>

          <div className="text-center">

            <Marquee  className="text-8xl overflow-hidden font-semibold">We create extraordinary digital solutions that get people talking</Marquee>

          </div>

          {/* 2 */}

          <div>
            {/* 1 */}

            <div>
            </div>

            {/* 2 */}

            <div>
            </div>
          </div>

          {/* 3 */}

          <div></div>
        </div>

        {/* 2 */}
        <div></div>
      </div>
    </main>
  );
}
