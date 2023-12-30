import type { NextPage } from "next";
import Image from "next/image";
import home1 from "/public/images/home/1.webp";
import home1Mobile from "/public/images/home/1m.webp";
import home2 from "/public/images/home/2.webp";
import home2Mobile from "/public/images/home/2m.webp";
import OurMission from "/public/images/home/OurMission.jpg";
import OurMissionMobile from "/public/images/home/OurMissionMobile.jpg";
import LetCollaborate from "/public/images/home/LetsCollaborate.jpg";
import LetCollaborateMobile from "/public/images/home/LetsCollaborateMobile.jpg";
import { ProductGrid } from "../components/ProductGrid";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  function addBusinessJsonLd() {
    return {
      __html: `{
  "@context": "https://schema.org",
  "@type": "FurnitureStore",
  "name": "Yahtzmen Furnishings",
  "description": "At Yahtzmen Furnishings we design and hand make luxurious furnishings that are unique and timeless for modern living."
}
            `,
    };
  }
  const router = useRouter();
  return (
    <div className={"z-0 bg-blue-800 py-10"}>
      <div className={"mx-auto max-w-5xl px-5 font-lora lg:px-0"}>
        <div className={"overflow-hidden rounded-lg  "}>
          <div className="relative hidden aspect-[16/9] sm:flex">
            <Image
              src={home1}
              alt={
                "Thoughtfully Designed, Bespoke Furnishings for Modern Living."
              }
            />
          </div>
          <div className="visible relative aspect-[11/16] sm:hidden">
            <Image
              src={home1Mobile}
              alt={
                "Thoughtfully Designed, Bespoke Furnishings for Modern Living."
              }
            />
          </div>
        </div>
        <div className={"my-10 overflow-hidden rounded-lg"}>
          <div className="relative hidden aspect-[16/9] sm:flex">
            <Image
              src={home2}
              alt={
                "Thoughtfully Designed, Bespoke Furnishings for Modern Living."
              }
            />
          </div>
          <div className="visible relative aspect-[11/16] sm:hidden">
            <Image
              src={home2Mobile}
              alt={
                "Thoughtfully Designed, Bespoke Furnishings for Modern Living."
              }
            />
          </div>
        </div>
        <div className={"overflow-hidden rounded-lg"}>
          <ProductGrid />
        </div>
        <div className={"my-10 overflow-hidden rounded-lg  "} id={"mission"}>
          <div className="relative hidden aspect-[16/9] sm:block">
            <Image
              src={OurMission}
              alt={
                "Thoughtfully Designed, Bespoke Furnishings for Modern Living."
              }
            />
          </div>
          <div className="visible relative aspect-[11/16] sm:hidden">
            <Image
              src={OurMissionMobile}
              alt={
                "Thoughtfully Designed, Bespoke Furnishings for Modern Living."
              }
            />
          </div>
        </div>
        <div className={"mt-10 overflow-hidden rounded-lg"}>
          <div
            className={"hover:cursor-pointer hover:opacity-75 "}
            id={"collaborate"}
            onClick={() => router.push("mailto:info@yahtzmen.com")}
          >
            <div className="relative hidden aspect-[16/9] sm:block">
              <Image
                src={LetCollaborate}
                alt={
                  "Thoughtfully Designed, Bespoke Furnishings for Modern Living."
                }
              />
            </div>
            <div className="visible relative aspect-[8/16] sm:hidden">
              <Image
                src={LetCollaborateMobile}
                alt={
                  "Thoughtfully Designed, Bespoke Furnishings for Modern Living."
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
