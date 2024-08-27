import Image from "next/image"
import Question from '../app/assets/question.png'
import Chatting from '../app/assets/chatting.png'
import FlexiBooking from '../app/assets/package-list.png'
import SecurePayment from '../app/assets/secure-payment.png'

const Features = () => {
  return (
    <div className="mt-10 mx-10">
      <Image
        className="align-middle inline-block"
        src={Question}
        alt="question"
        width={25}
      ></Image>
      <h1 className="mx-2 text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-2xl align-middle inline-block">
        Why choose Tune Protect?
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-10">
        <div className="grid grid-rows-3 grid-flow-col h-28 border border-gray-300 rounded-md">
          <div className="row-span-3 pt-4 px-2">
            <Image width={70} src={Chatting} alt="all in one"></Image>
          </div>
          <div className="col-span-2">
            <h1 className="text-sm sm:text-md md:text-lg lg:text-lg xl:text-lg font-bold mt-5">All in one</h1>
          </div>
          <div className="col-span-2 mt-4">
            <p className="text-base text-xs">
              One-stop shop to all your insurance needs.
            </p>
          </div>
        </div>
        <div className="grid grid-rows-3 grid-flow-col h-28 border border-gray-300 rounded-md">
          <div className="row-span-3 pt-4 px-2">
          <Image width={70} src={FlexiBooking} alt="flexible booking"></Image>
          </div>
          <div className="col-span-2">
            <h1 className="text-sm sm:text-md md:text-lg lg:text-lg xl:text-lg font-bold mt-5">Flexible booking options</h1>
          </div>
          <div className="col-span-2 mt-4">
            <p className="text-base text-xs">
            Fast and easy online sales funnel. But insurance and make claims
            on one site.
            </p>
          </div>
        </div>
        <div className="grid grid-rows-3 grid-flow-col h-28 border border-gray-300 rounded-md">
          <div className="row-span-3 pt-4 px-2">
          <Image width={70} src={SecurePayment} alt="secure payment"></Image>
          </div>
          <div className="col-span-2">
            <h1 className="text-sm sm:text-md md:text-lg lg:text-lg xl:text-lg font-bold mt-5">Secure payment</h1>
          </div>
          <div className="col-span-2 mt-4">
            <p className="text-base text-xs">
            Enjoy many secure ways to pay, in the currency that suits you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features