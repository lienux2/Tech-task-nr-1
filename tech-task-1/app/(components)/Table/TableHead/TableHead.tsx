"use client";
import { useState } from "react";
import { Search } from "../../Icons/Search/Search";

export const TableHead = () => {
  // const [btnOnlineClass, setBtnOnlineClass] = useState(false);
  // const [btnOfflineClass, setBtnOfflineClass] = useState(false);
  // const trueColor =
  //   "flex py-2 pl-3 pr-2 rounded-md border-2 border-solid border-[#3498db] bg-[#3498db] justify-center items-center gap-3";
  // const falseColor =
  //   "flex py-2 pl-3 pr-2 rounded-md border-2 border-solid border-[#d6d8e0] bg-[#fff] justify-center items-center gap-3";

  return (
    <>
      {/* <div className="w-full flex flex-col px-5 py-5">
        <div className="flex justify-between">
          <div className="flex">
            <button
              onClick={() => {
                btnOnlineClass
                  ? setBtnOnlineClass(false)
                  : setBtnOnlineClass(true);
              }}
              className={btnOnlineClass ? trueColor : falseColor}
            >
              Online
              <span className="flex py-1 px-2 rounded-md bg-[#f0f1f4] gap-2">
                2
              </span>
            </button>
            <button
              onClick={() => {
                btnOfflineClass
                  ? setBtnOfflineClass(false)
                  : setBtnOfflineClass(true);
              }}
              className={btnOfflineClass ? trueColor : falseColor}
            >
              Offline
              <span className="flex py-1 px-2 rounded-md bg-[#d6efff] gap-2">
                3
              </span>
            </button>
          </div>
          <div className="flex items-center gap-2 bg-[#F0F1F4] px-7 rounded-md">
            <label htmlFor="search">
              <Search />
            </label>
            <input
              className="bg-[#F0F1F4] rounded-md"
              type="text"
              id="search"
              placeholder="Quick search..."
            />
          </div>
        </div>
      </div> */}
    </>
  );
};
