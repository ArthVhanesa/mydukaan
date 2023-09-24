import ChevronDownDark from "../assets/icons/ChevronDownDark.svg";
import HelpWhite from "../assets/icons/HelpWhite.svg";
import Help from "../assets/icons/Help.svg";
import ChevronRightWhite from "../assets/icons/ChevronRightWhite.svg";
import ChevronRightBlue from "../assets/icons/ChevronRightBlue.svg";
import { useState } from "react";

export default function Overview() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };
  return (
    <>
      <div className="mt-5 w-full h-9 justify-between items-center inline-flex">
        <div className="text-zinc-900 text-xl font-medium font-['Galano Grotesque'] leading-7">
          Overview
        </div>
        <div className="justify-start items-center gap-4 flex flex-row">
          {/* <div className="h-[36px] bg-white rounded border-[1.5px] border-zinc-300 flex justify-center items-center px-3">
            <div className=" text-neutral-600 text-base font-normal font-['Galano Grotesque'] leading-normal">
              This Month
            </div>
            <img className="w-4 h-4 ml-2" src={ChevronDownDark} />
          </div> */}

          <div className="relative">
            <button
              className="flex items-center bg-white rounded border-[1.5px] border-zinc-300 px-3 py-2"
              onClick={toggleDropdown}
            >
              <span className="text-neutral-600 text-base font-normal font-GalanoGrotesque leading-normal">
                This Month
              </span>
              <img
                className="w-4 h-4 ml-2"
                src={ChevronDownDark}
                alt="Chevron Down"
              />
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-full bg-white border-[1.5px] border-zinc-300 rounded">
                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    This month
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    This week
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* analytics card */}

      <div className="w-full h-[154px] justify-start items-start gap-5 mt-6 mb-8 inline-flex">
        <div className="grow shrink basis-0 shadow flex-col justify-center items-center inline-flex bg-sky-700 rounded-lg">
          <div className="self-stretch h-[124px] p-5 bg-sky-700 rounded-lg flex-col justify-start items-start gap-4 flex">
            <div className="self-stretch h-[78px] flex-col justify-start items-start gap-4 flex">
              <div className="self-stretch justify-between items-center inline-flex">
                <div className="justify-start items-center gap-2 flex">
                  <div className="text-white text-base font-normal font-['Galano Grotesque'] leading-normal">
                    Next Payout
                  </div>
                  <img
                    className="w-4 h-4 relative cursor-pointer"
                    src={HelpWhite}
                  />
                </div>
              </div>
              <div className="self-stretch justify-between items-center inline-flex">
                <div className="text-white text-[32px] font-medium font-['Galano Grotesque'] leading-[38px]">
                  ₹2,312.23
                </div>
                <div className="justify-start cursor-pointer items-center flex">
                  <div className="justify-start items-start gap-2 flex">
                    <div className="text-white text-base font-medium font-['Galano Grotesque'] underline leading-normal">
                      23 orders
                    </div>
                  </div>
                  <img className="w-6 h-6 relative" src={ChevronRightWhite} />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-6 py-2 bg-sky-800 rounded-lg justify-between items-start inline-flex">
            <div className="text-zinc-100 text-sm font-normal font-['Galano Grotesque'] leading-tight">
              Next payout date:
            </div>
            <div className="text-zinc-100 text-sm font-medium font-['Galano Grotesque'] leading-tight">
              Today, 04:00PM
            </div>
          </div>
        </div>
        <div className="grow shrink basis-0 h-[118px] justify-center items-center gap-6 flex">
          <div className="grow shrink basis-0 p-5 bg-white rounded-lg shadow flex-col justify-start items-start gap-4 inline-flex">
            <div className="self-stretch h-[78px] flex-col justify-start items-start gap-4 flex">
              <div className="justify-start items-center gap-2 inline-flex">
                <div className="text-neutral-600 text-base font-normal font-['Galano Grotesque'] leading-normal">
                  Amount Pending
                </div>
                <img className="w-4 h-4 relative cursor-pointer" src={Help} />
              </div>
              <div className="self-stretch justify-between items-center inline-flex">
                <div className="text-zinc-900 text-[32px] font-medium font-['Galano Grotesque'] leading-[38px]">
                  ₹92,312.20
                </div>
                <div className="justify-start cursor-pointer items-center flex">
                  <div className="justify-start items-start gap-2 flex">
                    <div className="text-sky-700 text-base font-medium font-['Galano Grotesque'] underline leading-normal">
                      13 orders
                    </div>
                  </div>
                  <img className="w-6 h-6 relative" src={ChevronRightBlue} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grow shrink basis-0 h-[118px] justify-center items-center gap-6 flex">
          <div className="grow shrink basis-0 p-5 bg-white rounded-lg shadow flex-col justify-start items-start gap-4 inline-flex">
            <div className="self-stretch h-[78px] flex-col justify-start items-start gap-4 flex">
              <div className="justify-start items-center gap-2 inline-flex">
                <div className="text-neutral-600 text-base font-normal font-['Galano Grotesque'] leading-normal">
                  Amount Processed
                </div>
                <img className="w-4 h-4 relative cursor-pointer" src={Help} />
              </div>
              <div className="self-stretch justify-between items-center inline-flex">
                <div className="grow shrink basis-0 h-[38px] justify-between items-center flex">
                  <div className="text-zinc-900 text-[32px] font-medium font-['Galano Grotesque'] leading-[38px]">
                    ₹23,92,312.19
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
