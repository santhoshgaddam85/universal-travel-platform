import GooglePlayLogo from "../app/assets/google-play.svg";
import AppStoreLogo from "../app/assets/app-store.svg";
import AccreditationBNM from "../app/assets/accreditation-BNM.png";
import AccreditationOFS from "../app/assets/accreditation-OFS.png";
import AccreditationPIAM from "../app/assets/accreditation-PIAM.png";
import AccreditationPIDM from "../app/assets/accreditation-PIDM.png";
import TPLogo from "../app/assets/TP-logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="mt-10">
      <footer className="bg-gray-900">
        <div className="container px-6 py-12 mx-auto">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-5">
            <div>
              <Image src={TPLogo} width="60" height="90" alt="logo" />

              <div className="flex flex-col items-start mt-5 space-y-2">
                <p className="font-semibold text-white">Official Partners</p>
                <Image src={AccreditationBNM} width="170" height="110" alt="" />
                <Image src={AccreditationOFS} width="210" height="110" alt="" />
                <Image src={AccreditationPIDM} width="60" height="60" alt="" />
                <Image src={AccreditationPIAM} width="70" height="60" alt="" />
              </div>
            </div>
            <div>
              <p className="font-semibold text-white">About Tune Protect</p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <p className="text-white text-xs transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-red-500">
                  Contact Us
                </p>
                <p className="text-white text-xs transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-red-500">
                  Help Center
                </p>
                <p className="text-white text-xs transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-red-500">
                  Careers
                </p>
                <p className="text-white text-xs transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-red-500">
                  About Us
                </p>
              </div>
            </div>

            <div>
              <p className="font-semibold text-white">Follow us on</p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <p className="text-white transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-red-500">
                  LinkedIn
                </p>
                <p className="text-white text-xs transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-red-500">
                  Facebook
                </p>
                <p className="text-white text-xs transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-red-500">
                  Instagram
                </p>
                <p className="text-white transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-red-500">
                  Twitter
                </p>
                <p className="text-white text-xs transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-red-500">
                  Telegram
                </p>
              </div>
            </div>

            <div>
              <p className="font-semibold text-white">Products</p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <p className="text-white text-xs transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-red-500">
                  Travel
                </p>
                <p className="text-white text-xs transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-red-500">
                  Motor
                </p>
                <p className="text-white text-xs transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-red-500">
                  Home
                </p>
                <p className="text-white text-xs transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-red-500">
                  Life
                </p>
                <p className="text-white text-xs transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-red-500">
                  Pet Health
                </p>
                <p className="text-white text-xs transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-red-500">
                  Gadget
                </p>
                <p className="text-white text-xs transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-red-500">
                  Student PA
                </p>
                <p className="text-white text-xs transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-red-500">
                  Sports +
                </p>
              </div>
            </div>

            <div>
              <p className="font-semibold text-white">Other</p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <p className="text-white text-xs transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-red-500">
                  Blog
                </p>
                <p className="text-white text-xs transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-red-500">
                  Privacy Notice
                </p>
                <p className="text-white text-xs transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-red-500">
                  Terms & Conditions
                </p>
                <p className="text-white text-xs transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-red-500">
                  Travel Partners
                </p>
                <p className="text-white text-xs transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-red-500">
                  White Label
                </p>
                <p className="text-white text-xs transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-red-500">
                  Claims
                </p>
                <p className="font-semibold text-white mt-20 inlin-block">
                  Download Tune Protect App
                </p>
                <Image
                  src={AppStoreLogo}
                  width="130"
                  height="110"
                  alt="app store"
                />
                <Image
                  src={GooglePlayLogo}
                  width="130"
                  height="110"
                  alt="google play"
                />
              </div>
            </div>
          </div>

          <hr className="my-6 border-gray-200 md:my-8" />

          <p className="text-white text-start md:text-center md:text-xs">
            Tune Insurance Malaysia Berhad (Company No.: 197601004719 (30686-K))
          </p>
          <p className="text-white text-start md:text-center md:text-sm md:p-2">
            Copyright © 2024 Tune Protect. All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
