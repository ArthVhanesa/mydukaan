import Image from "../assets/Image.png";
import ChevronDown from "../assets/icons/ChevronDown.svg";
import Home from "../assets/icons/Home.svg";
import Orders from "../assets/icons/Orders.svg";
import Catalogue from "../assets/icons/Catalogue.svg";
import Analytics from "../assets/icons/Analytics.svg";
import Appearance from "../assets/icons/Appearance.svg";
import Customers from "../assets/icons/Customers.svg";
import Delivery from "../assets/icons/Delivery.svg";
import Discounts from "../assets/icons/Discounts.svg";
import Payments from "../assets/icons/Payments.svg";
import Plugin from "../assets/icons/Plugin.svg";
import Marketing from "../assets/icons/Marketing.svg";
import Wallet from "../assets/icons/Wallet.svg";

export default function SideNav() {
  return (
    <>
      <div className="w-56 fixed h-full px-[10px] py-[16px] bg-slate-800 flex-col justify-between items-center gap-[16px] inline-flex">
        <div>
          <div className="w-52 grow shrink basis-0 flex-col justify-center items-center gap-[24px] flex">
            <div className="w-48 justify-start items-center gap-3 inline-flex">
              <img className="w-[42px] h-[42px] rounded" src={Image} />
              <div className="grow shrink basis-0 flex-col justify-center items-start gap-1 inline-flex">
                <div className="self-stretch text-white text-[15px] font-medium ">
                  Nishyan
                </div>
                <div className="self-stretch opacity-80 text-white text-[13px] font-normal cursor-pointer underline">
                  Visit store
                </div>
              </div>
              <img className="w-5 h-5 relative" src={ChevronDown} />
            </div>

            <div className="w-52 grow shrink basis-0 flex-col justify-start items-start gap-1 flex">
              <div className="w-52 px-4 py-2 rounded justify-start items-start gap-3 inline-flex cursor-pointer">
                <img className="w-5 h-5 relative opacity-80" src={Home} />
                <div className="opacity-80 text-white text-sm font-medium">
                  Home
                </div>
              </div>
              <div className="w-52 px-4 py-2 rounded justify-start items-start gap-3 inline-flex cursor-pointer">
                <img className="w-5 h-5 relative opacity-80" src={Orders} />

                <div className="opacity-80 text-white text-sm font-medium  ">
                  Orders
                </div>
              </div>
              <div className="w-52 px-4 py-2 rounded justify-start items-start gap-3 inline-flex cursor-pointer">
                <img className="w-5 h-5 relative opacity-80" src={Catalogue} />

                <div className="opacity-80 text-white text-sm font-medium  ">
                  Products
                </div>
              </div>
              <div className="w-52 px-4 py-2 rounded justify-start items-start gap-3 inline-flex cursor-pointer">
                <img className="w-5 h-5 relative opacity-80" src={Delivery} />

                <div className="opacity-80 text-white text-sm font-medium  ">
                  Delivery
                </div>
              </div>
              <div className="w-52 px-4 py-2 rounded justify-start items-start gap-3 inline-flex cursor-pointer">
                <img className="w-5 h-5 relative opacity-80" src={Marketing} />

                <div className="opacity-80 text-white text-sm font-medium  ">
                  Marketing
                </div>
              </div>
              <div className="w-52 px-4 py-2 rounded justify-start items-start gap-3 inline-flex cursor-pointer">
                <img className="w-5 h-5 relative opacity-80" src={Analytics} />

                <div className="opacity-80 text-white text-sm font-medium  ">
                  Analytics
                </div>
              </div>
              <div className="w-52 px-4 py-2 bg-white bg-opacity-10 rounded justify-start items-start gap-3 inline-flex cursor-pointer">
                <img className="w-5 h-5 relative opacity-80" src={Payments} />

                <div className="text-white text-sm font-medium">Payouts</div>
              </div>
              <div className="w-52 px-4 py-2 rounded justify-start items-start gap-3 inline-flex cursor-pointer">
                <img className="w-5 h-5 relative opacity-80" src={Discounts} />

                <div className="opacity-80 text-white text-sm font-medium  ">
                  Discounts
                </div>
              </div>
              <div className="w-52 px-4 py-2 rounded justify-start items-start gap-3 inline-flex cursor-pointer">
                <img className="w-5 h-5 relative opacity-80" src={Customers} />

                <div className="opacity-80 text-white text-sm font-medium  ">
                  Audience
                </div>
              </div>
              <div className="w-52 px-4 py-2 rounded justify-start items-start gap-3 inline-flex cursor-pointer">
                <img className="w-5 h-5 relative opacity-80" src={Appearance} />

                <div className="opacity-80 text-white text-sm font-medium  ">
                  Appearance
                </div>
              </div>
              <div className="w-52 px-4 py-2 rounded justify-start items-start gap-3 inline-flex cursor-pointer">
                <img className="w-5 h-5 relative opacity-80" src={Plugin} />
                <div className="opacity-80 text-white text-sm font-medium  ">
                  Plugins
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-[54px] px-[12px] py-[6px] bg-slate-700 rounded flex-col justify-center items-start flex">
          <div className="justify-center items-center gap-3 inline-flex">
            <div className="p-1.5 bg-white bg-opacity-10 rounded justify-start items-start flex">
              <div className="w-6 h-6 relative">
                <img
                  className="w-[23.65px] h-[19.60px] left-[0.20px] top-[2.20px] absolute"
                  src={Wallet}
                />
              </div>
            </div>
            <div className="flex-col justify-center items-start gap-0.5 inline-flex">
              <div className="opacity-80 text-white text-[13px] font-normal  leading-none">
                Available credits
              </div>
              <div className="text-white text-base font-medium  leading-normal">
                222.10
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
