import React from "react";
import "./creators.css";
import Image from "next/image";
import Bloomberg from "@public/bloomberg.svg";
import Crunchbase from "@public/crunchbase.svg";
import Forbes from "@public/forbes.svg";
import Fortune from "@public/fortune.svg";
import Thenewyorktime from "@public/thenewyorktime.svg";
import Techcrunch from "@public/techcrunch.svg";
import Thewallstreet from "@public/thewallstreet.svg";
import Theinformation from "@public/theinformation.svg";
import Businessinsider from "@public/businessinsider.svg";
import useMediaQuery from '@mui/material/useMediaQuery';
import Link from "next/link";
import { marketingConstants } from "@/lib/ts/constants";
import { Slide } from "react-slideshow-image";

interface PROPS {}

const Creators: React.FC<PROPS> = () => {
  const isMobile = useMediaQuery('(max-width:600px)'); 
  const sources = [
    { name: "Bloomberg", src: Bloomberg },
    { name: "Crunchbase", src: Crunchbase },
    { name: "Forbes", src: Forbes },
    { name: "Fortune", src: Fortune },
    {
      name: "Theinformation",
      src: Theinformation,
    },
    {
      name: "Businessinsider",
      src: Businessinsider,
    },
    { name: "TechCrunch", src: Techcrunch },
    {
      name: "The Wall Street Journal",
      src: Thewallstreet,
    },
    {
      name: "The New York Times",
      src: Thenewyorktime,
    },
  ];
  return (
    <section className="creatorsMainDiv">
      <div className="titleMainCretaers">
        {marketingConstants.BROUGHTTOYOUBYTHEcreatorsOFSPACtrackASMENTIONEDIN}
      </div>
      <div
        style={{
          width: "100%",
        }}
      >
        <div style={{ width: "100%" }}>
          <Slide slidesToScroll={1} slidesToShow={isMobile ? 3 : 5} duration={1500}>
            {sources.map((source, index) => (
              <Image
                src={source.src}
                alt={source.name}
                width={130}
                height={47}
                key={index}
                style={{
                  cursor: "pointer",
                  objectFit: "contain",
                }}
              />
            ))}
          </Slide>
        </div>
      </div>
    </section>
  );
};

export default Creators;
