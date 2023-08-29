import React from "react";
import "./checkout.css";
import { useRouter } from "next/navigation";
import Image from "next/image";
import footerLogo from "@public/footerLogo.svg";
import { CommonfiButton } from "@CommonComponents/index";
interface PROPS {}

const Checkout: React.FC<PROPS> = () => {
  const router = useRouter();
  return (
    <section className="checkout-main-wrapper ">
      <main>
        <header style={{ marginBottom: 50 }}>
          <Image src={footerLogo} alt="footerImage" width={200} height={50} />
        </header>
        <main className="checkout-description-holder">
          <div style={{ color: "#263C6F", fontWeight: 500, fontSize: 33 }}>
            Amazing
          </div>
          <div style={{ width: "100%", marginTop: 10, marginBottom: 20 }}>
            Congratulations. You are done
          </div>
          <CommonfiButton
            variant="contained"
            className="buttonStylePlans paddingTop"
            title="Go to Home"
            onClick={() => router.push("/home")}
          />
        </main>
      </main>
    </section>
  );
};

export default Checkout;