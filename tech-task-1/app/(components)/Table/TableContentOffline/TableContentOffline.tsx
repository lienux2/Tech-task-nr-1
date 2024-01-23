"use client";

import { useEffect, useRef, useState } from "react";
import { Arrow } from "../../Icons/Arrow/Arrow";
import { Status } from "../../Icons/Status/Status";
import axios from "axios";
import { Search } from "../../Icons/Search/Search";

interface Device {
  id: number;
  title: string;
  connection: number;
  model: string;
  conStat: string;
}

export const TableContentOffline = () => {
  const [devices, setDevices] = useState([]);

  const [btnOnlineClass, setBtnOnlineClass] = useState(false);
  const [btnOfflineClass, setBtnOfflineClass] = useState(false);
  const trueColor =
    "flex py-2 pl-3 pr-2 rounded-md border-2 border-solid border-[#3498db] bg-[#3498db] justify-center items-center gap-3";
  const falseColor =
    "flex py-2 pl-3 pr-2 rounded-md border-2 border-solid border-[#d6d8e0] bg-[#fff] justify-center items-center gap-3";


  useEffect(() => {
    axios.get("http://localhost:5000/devices").then((response) => {
      const data = response.data;
      setDevices(data);
    });
  }, []);

  const online = devices.filter((device: Device) => device.connection > 0).length;
  const offline = devices.filter((device: Device) => device.connection === 0).length;

  const filteredDevices = () => {
    if (btnOnlineClass) {
      return devices.filter((device: Device) => device.connection > 0);
    } else if (btnOfflineClass) {
      return devices.filter((device: Device) => device.connection === 0);
    } else {
      return devices;
    }
  };

  return (
    <>
     <div className="w-full flex flex-col px-5 py-5">
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
                {online}
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
              {offline}
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
      </div>

      <div className="flex flex-col gap-2 px-5 pt-0 pb-5">
      {filteredDevices().map((device: Device) => (
          <div
            className="flex items-center justify-between gap-20 border rounded-md py-3 gap-4 pl-5 pr-2 hide"
            key={device.id}
          >
            <div className="flex items-center gap-3 max-w-64">
              <div>
                <Status />
              </div>
              <div>
                <p className="text-sm font-medium">{device.title}</p>
                <span className="text-[#5c5f70] text-xs font-normal">
                  Connection: {device.connection}%
                </span>
              </div>
            </div>
            <div>
              <div>
                <span className="text-[#5c5f70] text-xs font-normal opacity-70">
                  Model
                </span>
                <p className="text-sm font-medium">{device.model}</p>
              </div>
            </div>
            <div>
              <span className="text-[#5c5f70] text-xs font-normal opacity-70">
                Con-stat
              </span>
              <p className="text-sm font-medium max-w-64 min-w-60">
                {device.conStat}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button className="hover-button">Settings</button>
              <button className="hover-button">Control</button>
              <Arrow />
            </div>
          </div>
        ))}
      </div>
      <div className="flex py-3 pl-5 pr-5 items-center gap-5 self-strech bg-[#F0F1F4]">
        <button>
          <span className="text-[#5c5f70] w-full">
            Showing 1 - {filteredDevices().length} of {filteredDevices().length} devices
          </span>
        </button>
      </div>
    </>
  );
};
