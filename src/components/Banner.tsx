import Image from 'next/image';
import TravelBanner from '../app/assets/travel-unlimited.png'
import PromoIcon from '../app/assets/promo.png'

const Banner = () => {
  return (
    <div className="mt-10 mx-10">
      <h1 className="align-middle inline-block mx-2 text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-2xl">
        Travel Insurance Promo
      </h1>
      <Image
        className="align-middle inline-block"
        src={PromoIcon}
        alt="promo"
        width={30}
      ></Image>
      <p className="promo-subtext">
        Buy Travel Insurance Now! Campaign ends 31 August 2024
      </p>
      <Image src={TravelBanner} className="mt-4" alt="travel unlimited"></Image>
    </div>
  );
}

export default Banner;
