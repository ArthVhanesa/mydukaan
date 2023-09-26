import Help from "../assets/icons/Help.svg";
import Search from "../assets/icons/Search.svg";
import SortArrow from "../assets/icons/SortArrow.svg";
import Feedback from "../assets/icons/Feedback.svg";

export default function Navbar() {
  return (
    <div className="w-full h-16 px-8 py-3 bg-white border-b border-zinc-300 justify-start items-center gap-4 inline-flex">
      <div className="w-[33%] grow shrink basis-0 h-7 justify-start items-center gap-4 flex">
        <div className="justify-start items-center gap-4 flex">
          <div className="text-zinc-900 text-xl font-medium font-GalanoGrotesque-medium leading-7">
            Payouts
          </div>
        </div>
        <div className="justify-start items-center gap-1.5 flex">
          <img className="w-3.5 h-3.5 relative cursor-pointer" src={Help} />
          <div className="text-neutral-600 text-xs font-normal font-GalanoGrotesque-regular leading-none">
            How it works
          </div>
        </div>
      </div>

      {/* <div className="w-[400px] self-stretch px-4 py-[9px] bg-zinc-100 rounded-md justify-start items-center gap-2 flex">
        <img className="w-4 h-4 relative" src={Search} />
        <div className="text-zinc-500 text-[15px] font-normal font-GalanoGrotesque-regular leading-snug">
          Search features, tutorials, etc.
        </div>
      </div> */}

      <div className="w-[33%] flex px-4 py-[9px] items-center gap-2 bg-zinc-100 rounded-md">
        <img className="w-4 h-4 absolute" src={Search} alt="Search Icon" />
        <input
          type="text"
          className="pl-6 text-zinc-500 text-sm font-normal font-GalanoGrotesque-regular leading-snug bg-transparent border-0 outline-none w-[400px]"
          placeholder="Search features, tutorials, etc."
        />
      </div>

      <div className="w-[33%] grow shrink basis-0 h-10 justify-end items-start gap-2 flex">
        <div className="justify-start items-start gap-3 flex">
          <div className="w-10 h-10 relative cursor-pointer">
            <div className="w-10 h-10 left-0 top-0 flex justify-center items-center absolute bg-neutral-200 rounded-full">
              <img src={Feedback} alt="" />
            </div>
          </div>
          <div className="w-10 h-10 relative cursor-pointer">
            <div className="w-10 h-10 left-0 top-0 flex justify-center items-center absolute bg-neutral-200 rounded-full">
              <img src={SortArrow} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
