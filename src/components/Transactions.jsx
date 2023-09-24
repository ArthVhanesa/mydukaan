import Search from "../assets/icons/Search.svg";
import Sort from "../assets/icons/Sort.svg";
import Download from "../assets/icons/Download.svg";
import TriangleIcon from "../assets/icons/TriangleIcon.svg";

export default function Transactions() {
  return (
    <>
      <div className="mb-5 mt-2 text-zinc-900 text-xl font-medium font-['Galano Grotesque'] leading-7">
        Transactions | This Month
      </div>
      <div className="w-[238px] h-8 justify-start items-start gap-3 inline-flex">
        <div className="cursor-pointer px-4 py-1.5 bg-sky-700 rounded-[40px] justify-start items-center gap-1.5 flex">
          <div className="text-white text-sm font-medium font-['Galano Grotesque'] leading-tight">
            Payouts (22)
          </div>
        </div>
        <div className="cursor-pointer px-4 py-1.5 bg-neutral-200 rounded-[40px] justify-start items-center gap-2.5 flex">
          <div className="text-zinc-500 text-sm font-medium font-['Galano Grotesque'] leading-tight">
            Refunds (2)
          </div>
        </div>
      </div>

      <div className="w-full mt-5 p-3 bg-white rounded-lg shadow flex-col justify-start items-start inline-flex">
        <div className="w-full mb-5 h-10 justify-between items-center inline-flex">
          <div className="h-10 justify-start items-start flex">
            <div className="grow shrink basis-0 h-10 px-4 py-2.5 bg-white rounded border-[1.5px] border-zinc-200 justify-start items-center gap-2 flex">
              <img className="w-3.5 h-3.5 relative" src={Search} />
              <input
                type="text"
                placeholder="Order ID or transaction ID"
                className="bg-transparent border-0 outline-none text-neutral-500 text-sm font-normal font-['Galano Grotesque'] leading-tight"
              />
            </div>
          </div>
          <div className="justify-start items-center gap-3 flex">
            <div className="justify-start items-center gap-3 flex">
              <div className="justify-end items-center gap-4 flex">
                <div className="justify-start items-center gap-3 flex">
                  <div className="px-3 cursor-pointer py-1.5 bg-white rounded border border-zinc-300 justify-start items-center gap-1.5 flex">
                    <div className="text-neutral-600 text-base font-normal font-['Galano Grotesque'] leading-normal">
                      Sort
                    </div>
                    <img className="w-4 h-4 relative" src={Sort} />
                  </div>
                </div>
                <div className="w-9 h-9 relative cursor-pointer">
                  <div className="w-9 h-9 left-0 top-0 absolute rounded border border-zinc-300" />
                  <img
                    className="w-5 h-5 left-[8px] top-[8px] absolute"
                    src={Download}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <table className="w-full">
          <thead>
            <tr className="bg-neutral-100">
              <th className="text-left p-3 rounded-l-lg text-neutral-600 w-1/6 font-medium">
                <div className="flex">
                  Date <img className="pl-2" src={TriangleIcon} />
                </div>
              </th>
              <th className="text-left p-3 text-neutral-600 w-1/6 font-medium">
                Status
              </th>
              <th className="text-left p-3 text-neutral-600 w-1/6 font-medium">
                Transaction ID
              </th>
              <th className="text-right p-3 text-neutral-600 w-1/6 font-medium">
                Order amount
              </th>
              <th className="text-right p-3 text-neutral-600 w-1/6 font-medium">
                Transaction fees
              </th>
              <th className="text-right p-3 rounded-r-lg text-neutral-600 w-1/6 font-medium">
                Total
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="">
              <td className="text-left p-3 text-sky-700 border-b text-sm font-medium">
                Today, 09:00 PM
              </td>
              <td className="text-left p-3 border-b">
                <div className="flex justify-start items-center">
                  <div className="w-2.5 h-2.5 bg-neutral-400 rounded-full mr-1.5" />
                  <div className="text-zinc-900 text-sm font-normal font-['Galano Grotesque'] leading-tight">
                    Processing
                  </div>
                </div>
              </td>
              <td className="text-left p-3 border-b text-zinc-900 text-sm font-normal">
                131634495747
              </td>
              <td className="text-right p-3 border-b text-zinc-900 text-sm font-normal">
                ₹10,125.00
              </td>
              <td className="text-right p-3 border-b text-zinc-900 text-sm font-normal">
                ₹1,125.00
              </td>
              <td className="text-right p-3 border-b text-zinc-900 text-sm font-normal">
                ₹9,312
              </td>
            </tr>

            <tr className="">
              <td className="text-left p-3 text-sky-700 border-b text-sm font-medium">
                Today, 03:00 PM
              </td>
              <td className="text-left p-3 border-b">
                <div className="flex justify-start items-center">
                  <div className="w-2.5 h-2.5 bg-green-600 rounded-full mr-1.5" />
                  <div className="text-zinc-900 text-sm font-normal font-['Galano Grotesque'] leading-tight">
                    Successful
                  </div>
                </div>
              </td>
              <td className="text-left p-3 border-b text-zinc-900 text-sm font-normal">
                131634495747
              </td>
              <td className="text-right p-3 border-b text-zinc-900 text-sm font-normal">
                ₹10,125.00
              </td>
              <td className="text-right p-3 border-b text-zinc-900 text-sm font-normal">
                ₹1,125.00
              </td>
              <td className="text-right p-3 border-b text-zinc-900 text-sm font-normal">
                ₹9,312
              </td>
            </tr>

            <tr className="">
              <td className="text-left p-3 text-sky-700 border-b text-sm font-medium">
                Today, 09:00 AM
              </td>
              <td className="text-left p-3 border-b">
                <div className="flex justify-start items-center">
                  <div className="w-2.5 h-2.5 bg-green-600 rounded-full mr-1.5" />
                  <div className="text-zinc-900 text-sm font-normal font-['Galano Grotesque'] leading-tight">
                    Successful
                  </div>
                </div>
              </td>
              <td className="text-left p-3 border-b text-zinc-900 text-sm font-normal">
                131634495747
              </td>
              <td className="text-right p-3 border-b text-zinc-900 text-sm font-normal">
                ₹10,125.00
              </td>
              <td className="text-right p-3 border-b text-zinc-900 text-sm font-normal">
                ₹1,125.00
              </td>
              <td className="text-right p-3 border-b text-zinc-900 text-sm font-normal">
                ₹9,312
              </td>
            </tr>

            <tr className="">
              <td className="text-left p-3 text-sky-700 border-b text-sm font-medium">
                Yesterday, 3:00 PM
              </td>
              <td className="text-left p-3 border-b">
                <div className="flex justify-start items-center">
                  <div className="w-2.5 h-2.5 bg-green-600 rounded-full mr-1.5" />
                  <div className="text-zinc-900 text-sm font-normal font-['Galano Grotesque'] leading-tight">
                    Successful
                  </div>
                </div>
              </td>
              <td className="text-left p-3 border-b text-zinc-900 text-sm font-normal">
                131634495747
              </td>
              <td className="text-right p-3 border-b text-zinc-900 text-sm font-normal">
                ₹10,125.00
              </td>
              <td className="text-right p-3 border-b text-zinc-900 text-sm font-normal">
                ₹1,125.00
              </td>
              <td className="text-right p-3 border-b text-zinc-900 text-sm font-normal">
                ₹9,312
              </td>
            </tr>

            <tr className="">
              <td className="text-left p-3 text-sky-700 border-b text-sm font-medium">
                Yesterday, 09:00 AM
              </td>
              <td className="text-left p-3 border-b">
                <div className="flex justify-start items-center">
                  <div className="w-2.5 h-2.5 bg-green-600 rounded-full mr-1.5" />
                  <div className="text-zinc-900 text-sm font-normal font-['Galano Grotesque'] leading-tight">
                    Successful
                  </div>
                </div>
              </td>
              <td className="text-left p-3 border-b text-zinc-900 text-sm font-normal">
                131634495747
              </td>
              <td className="text-right p-3 border-b text-zinc-900 text-sm font-normal">
                ₹10,125.00
              </td>
              <td className="text-right p-3 border-b text-zinc-900 text-sm font-normal">
                ₹1,125.00
              </td>
              <td className="text-right p-3 border-b text-zinc-900 text-sm font-normal">
                ₹9,312
              </td>
            </tr>

            <tr className="">
              <td className="text-left p-3 text-sky-700 border-b text-sm font-medium">
                12 Jul 2023, 03:00 PM
              </td>
              <td className="text-left p-3 border-b">
                <div className="flex justify-start items-center">
                  <div className="w-2.5 h-2.5 bg-green-600 rounded-full mr-1.5" />
                  <div className="text-zinc-900 text-sm font-normal font-['Galano Grotesque'] leading-tight">
                    Successful
                  </div>
                </div>
              </td>
              <td className="text-left p-3 border-b text-zinc-900 text-sm font-normal">
                131634495747
              </td>
              <td className="text-right p-3 border-b text-zinc-900 text-sm font-normal">
                ₹10,125.00
              </td>
              <td className="text-right p-3 border-b text-zinc-900 text-sm font-normal">
                ₹1,125.00
              </td>
              <td className="text-right p-3 border-b text-zinc-900 text-sm font-normal">
                ₹9,312
              </td>
            </tr>

            <tr className="">
              <td className="text-left p-3 text-sky-700  text-sm font-medium">
                12 Jul 2023, 11:00 AM
              </td>
              <td className="text-left p-3 ">
                <div className="flex justify-start items-center">
                  <div className="w-2.5 h-2.5 bg-green-600 rounded-full mr-1.5" />
                  <div className="text-zinc-900 text-sm font-normal font-['Galano Grotesque'] leading-tight">
                    Successful
                  </div>
                </div>
              </td>
              <td className="text-left p-3  text-zinc-900 text-sm font-normal">
                131634495747
              </td>
              <td className="text-right p-3  text-zinc-900 text-sm font-normal">
                ₹10,125.00
              </td>
              <td className="text-right p-3  text-zinc-900 text-sm font-normal">
                ₹1,125.00
              </td>
              <td className="text-right p-3  text-zinc-900 text-sm font-normal">
                ₹9,312
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
