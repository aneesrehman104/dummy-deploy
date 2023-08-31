import React from "react";
import "./creators.css";
import Image from "next/image";
import Brand1 from "@public/brand1.svg";
import Brand2 from "@public/brand2.svg";
import Brand3 from "@public/brand3.svg";
import Brand4 from "@public/brand4.svg";

import Bloomberg from "@public/bloomberg.svg";
import Crunchbase from "@public/crunchbase.svg";
import Forbes from "@public/forbes.svg";
import Fortune from "@public/fortune.svg";
import Thenewyorktime from "@public/thenewyorktime.svg";
import Techcrunch from "@public/techcrunch.svg";
import Thewallstreet from "@public/thewallstreet.svg";

import Link from "next/link";
import { marketingConstants } from "@/lib/ts/constants";

interface PROPS {}

const Creators: React.FC<PROPS> = () => {
  const sources = [
    { name: "Bloomberg", src: Bloomberg, link: "https://www.bloomberg.com" },
    { name: "Crunchbase", src: Crunchbase, link: "https://www.crunchbase.com" },
    { name: "Forbes", src: Forbes, link: "https://www.forbes.com" },
    { name: "Fortune", src: Fortune, link: "https://www.fortune.com" },
    {
      name: "The New York Times",
      src: Thenewyorktime,
      link: "https://www.nytimes.com",
    },
    { name: "TechCrunch", src: Techcrunch, link: "https://www.techcrunch.com" },
    {
      name: "The Wall Street Journal",
      src: Thewallstreet,
      link: "https://www.wsj.com",
    },
  ];
  return (
    <section className="creatorsMainDiv">
      <div className="titleMainCretaers">
        {marketingConstants.BROUGHTTOYOUBYTHEcreatorsOFSPACtrackASMENTIONEDIN}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "90%",
          
          flexWrap: "wrap",
        }}
      >
        {sources.map((source, index) => (
          <Link
            key={index}
            href={source.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={source.src}
              alt={source.name}
              width={130}
              height={47}
              style={{ cursor: "pointer", margin:10 }}
            />
          </Link>
        ))}
        {/* <Link href="">
          <Image
            src={Brand3}
            alt="Brand3"
            width={130}
            height={47}
            style={{ cursor: "pointer", marginTop: 10, marginBottom: 10 }}
          />
        </Link>
        <Link href="">
          <Image
            src={Brand2}
            alt="Brand2"
            width={180}
            height={31}
            style={{ cursor: "pointer", marginTop: 10, marginBottom: 10 }}
          />
        </Link>
        <Link href="">
          <Image
            src={Brand1}
            alt="Brand1"
            width={180}
            height={31}
            style={{ cursor: "pointer", marginTop: 10, marginBottom: 10 }}
          />
        </Link>
        <Link href="">
          <Image
            src={Brand4}
            alt="Brand4"
            width={180}
            height={31}
            style={{ cursor: "pointer", marginTop: 10, marginBottom: 10 }}
          />
        </Link> */}
      </div>
    </section>
  );
};

export default Creators;
