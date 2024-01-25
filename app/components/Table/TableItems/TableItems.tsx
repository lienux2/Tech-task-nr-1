"use client";
import { useMemo, useState } from "react";
import { Arrow } from "../../Icons/Arrow/Arrow";
import { Status } from "../../Icons/Status/Status";
import { Search } from "../../Icons/Search/Search";
import { Button } from "../../Button/Button";

type Device = {
  id: number;
  title: string;
  connection: number;
  model: string;
  conStat: string;
  status: string;
};

type DevicesProps = {
  devices: Device[];
};

type Status = "online" | "offline" | "all";

export const TableItems = ({ devices }: DevicesProps) => {
  const [status, setStatus] = useState<Status>("all");
  const [search, setSearch] = useState("");

  const deviceStatusSort = useMemo(() => {
    const stats = {};
    let onlineDeviceCount = 0;
    let offlineDeviceCount = 0;

    devices.reduce((acc, device) => {
      if (device.connection > 0) {
        onlineDeviceCount++;
      }
      if (device.connection === 0) {
        offlineDeviceCount++;
      }
      return acc;
    }, {});

    return { onlineDeviceCount, offlineDeviceCount, stats };
  }, [devices]);

  const showDevices = devices.filter((device: Device) => {
    const searchResults =
      device.title.toLowerCase().includes(search.toLowerCase()) ||
      device.model.toLowerCase().includes(search.toLowerCase()) ||
      device.conStat.toLowerCase().includes(search.toLowerCase());
    if (status === "all") {
      return device && searchResults;
    } else if (status === "offline") {
      return device.status === "offline" && searchResults;
    } else {
      return device.status === "online" && searchResults;
    }
  });

  // @ts-ignore
  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <div className="w-full flex flex-col px-5 py-5">
        <div className="flex justify-between">
          <div className="flex">
            <Button
              number={deviceStatusSort.onlineDeviceCount}
              text="Online"
              active={status === "online"}
              click={() => {
                if (status === "all" || status === "offline") {
                  setStatus("online");
                } else {
                  setStatus("all");
                }
              }}
            />
            <Button
              number={deviceStatusSort.offlineDeviceCount}
              active={status === "offline"}
              text="Offline"
              click={() => {
                if (status === "all" || status === "online") {
                  setStatus("offline");
                } else {
                  setStatus("all");
                }
              }}
            />
          </div>
          <div className="flex items-center gap-2 bg-off-white px-7 rounded-md">
            <label htmlFor="search">
              <Search />
            </label>
            <input
              className="bg-off-white rounded-md"
              type="text"
              id="search"
              placeholder="Quick search..."
              value={search}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 px-5 pt-0 pb-5">
        {showDevices?.map((device) => (
          <div
            className="flex items-center justify-between gap-20 border rounded-md py-3 gap-4 pl-5 pr-2 hide"
            key={device.id}
          >
            <div className="flex items-center gap-3 max-w-64">
              <div
                className={`${
                  device.connection > 0 ? "fill-green" : "fill-red"
                }`}
              >
                <Status />
              </div>
              <div>
                <p className="text-sm font-medium">{device.title}</p>
                <span className="text-grey text-xs font-normal">
                  Connection: {device.connection}%
                </span>
              </div>
            </div>
            <div>
              <div>
                <span className="text-grey text-xs font-normal opacity-70">
                  Model
                </span>
                <p className="text-sm font-medium">{device.model}</p>
              </div>
            </div>
            <div>
              <span className="text-grey text-xs font-normal opacity-70">
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

      <div className="flex py-3 pl-5 pr-5 items-center gap-5 self-strech bg-off-white">
        <button>
          <span className="text-grey w-full">
            Showing 1 - {showDevices.length} of {showDevices.length} devices
          </span>
        </button>
      </div>
    </>
  );
};
