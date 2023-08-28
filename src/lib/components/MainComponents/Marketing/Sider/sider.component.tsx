import React, { Fragment, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
interface PROPS {}

const Slider: React.FC<PROPS> = () => {
  const router = useRouter();
  const slideImages = [
    {
      url: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      caption: "Slide 1",
    },
    {
      url: "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
      caption: "Slide 2",
    },
    {
      url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      caption: "Slide 3",
    },
  ];
  const spanStyle = {
    padding: "20px",
    background: "#efefef",
    color: "#000000",
    // width:"90%"
  };

  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    height: "400px",
  };
  return (
    <>
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          height:'90vh',
          background: "linear-gradient(white,transparent)",
          backgroundColor: "#263c6f" /*this your primary color*/,
        }}
      >
        <div style={{ width: "90%", marginTop: 40 }}>
          <Slide>
            {slideImages.map((slideImage, index) => (
              <div key={index}>
                <div
                  style={{
                    ...divStyle,
                    backgroundImage: `url(${slideImage.url})`,
                  }}
                >
                  <span style={spanStyle}>{slideImage.caption}</span>
                </div>
              </div>
            ))}
          </Slide>
        </div>
      </section>
    </>
  );
};

export default Slider;
