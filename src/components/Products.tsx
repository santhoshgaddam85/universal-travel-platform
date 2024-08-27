import Image from "next/image";
import Protection from "../app/assets/add-protection.png";
import ProductImg from "../app/assets/adventure_protection_main.jpg";
import Arrow from "../app/assets/arrow.png";
const Products = () => {
  return (
    <div className="mt-10 mx-10">
      <Image
        className="align-middle inline-block"
        src={Protection}
        alt=""
        width={25}
      ></Image>
      <h1 className="text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-2xl mx-4 align-middle inline-block">
        Discover other insurance products
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        <div className="px-5 h-48 product-thumb product-thumb1 rounded-md">
          {/* <Image src={ProductImg} alt='lifestyle'></Image> */}
          <h1 className="text-white inline-block text-lg font-bold mt-5">
            Pet Health
          </h1>
          <p className="text-white text-base">exclusive with AirAsia</p>
        </div>
        <div className="px-5 h-48 product-thumb1 product-thumb2 rounded-md">
          {/* <Image src={ProductImg} alt='lifestyle'></Image> */}
          <h1 className="text-white inline-block text-lg font-bold mt-5">
            Health
          </h1>
          <p className="text-white text-base">exclusive with AirAsia</p>
        </div>
        <div className="px-5 h-48 product-thumb product-thumb3 rounded-md">
          <h1 className="text-white inline-block text-lg font-bold mt-5">
            Sports
          </h1>
          <p className="text-white text-base">exclusive with AirAsia</p>
        </div>
        <div className="px-5 h-48 product-thumb product-thumb4 rounded-md">
          <h1 className="text-white inline-block text-lg font-bold mt-5">
            Gadget
          </h1>
          <p className="text-white text-base">exclusive with AirAsia</p>
        </div>
        <div className="px-5 h-48 product-thumb product-thumb5 rounded-md">
          <h1 className="text-white inline-block text-lg font-bold mt-5">
          Student PA
          </h1>
          <p className="text-white text-base">exclusive with AirAsia</p>
        </div>
        <div className="px-5 h-48 product-thumb product-thumb6 rounded-md">
          <h1 className="text-white inline-block text-lg font-bold mt-5">
            Gadget
          </h1>
          <p className="text-white text-base">exclusive with AirAsia</p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <button
          type="submit"
          className="w-64 mt-10 bg-gray-200 hover:bg-gray-300 text-red-700 font-bold py-2 px-4 rounded"
        >
          See All
          {/* <Image
        className="align-middle inline-block"
        src={Arrow}
        alt="arrow"
        width={40}
      ></Image> */}
        </button>
      </div>
    </div>
  );
};

export default Products;
