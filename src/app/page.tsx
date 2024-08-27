import Image from "next/image";
import Navbar from "../components/Navbar";
import { NavBarNew } from "@/components/NavbarNew";
import NavBar2 from "@/components/Navbar2";
import Banner from "../components/Banner";
import Products from "../components/Products";
import Features from "../components/Features";
import Footer from "../components/Footer";
import TPLogo from "../app/assets/TP-logo.png";
import LogoWL from "../app/assets/powered.png";

export default function Home() {
  return (
    <main>
      <div className="home-bg bg-fixed bg-no-repeat bg-cover">
        <Image
          src={TPLogo}
          alt=""
          className="absolute mt-2 mx-10"
          width={60}
          height={70}
        />
        <Navbar />
        {/* <NavBarNew /> */}
        {/* <NavBar2 /> */}
        <div className="relative text-center">
          <div className="w-full absolute top-0 left-0 text-center mt-28">
            <h2 className="title-main text-6xl font-bold text-white text-center">
              One-stop Travel Insurance Around Asia.
            </h2>
            <h6 className="text-base text-white text-center mt-10">
              Tune Protect provides a Universal Travel Platform that meets your
              needs.
            </h6>
            <button
              type="submit"
              className="w-64 mt-10 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Get Started
            </button>
          </div>
        </div>
        <Image
          src={LogoWL}
          width={150}
          height={200}
          className="absolute m-auto  left-0 right-0 top-100 bottom-0"
          alt=""
        />
      </div>
      <Banner />
      <Products />
      <Features />
      <Footer />
    </main>
  );
}
