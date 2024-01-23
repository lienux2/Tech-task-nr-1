import { useMemo } from "react";
import { Devices } from "../(components)/Devices/Devices";
import { Connectors } from "../(components)/Connectors/Connectors";
import { Dashboard } from "../(components)/Dashboard/Dashboard";
import { Settings } from "../(components)/Settings/Settings";

export default function Page({ params }: { params: { id: string } }) {
  const id: string = params.id;
  const capitalizeId = id[0].toUpperCase() + id.slice(1);

  const isDevicesPage = capitalizeId === "Devices";
  const isConnectorsPage = capitalizeId === "Connectors";
  const isDashboardPage = capitalizeId === "Dashboard";
  const isSettingsPage = capitalizeId === "Settings";

  const devices = useMemo(() => <Devices />, [isDevicesPage]);
  const connectors = useMemo(() => <Connectors />, [isConnectorsPage]);
  const dashboard = useMemo(() => <Dashboard />, [isDashboardPage]);
  const settings = useMemo(() => <Settings />, [isSettingsPage]);

  return (
    <main>
      <div className="pb-16 px-40 bg-[#181e34]">
        <h1 className="font-medium text-white text-xl">{capitalizeId}</h1>
      </div>
      <div className="flex flex-col">
        {isDevicesPage && devices}
        {isConnectorsPage && connectors}
        {isDashboardPage && dashboard}
        {isSettingsPage && settings}
      </div>
    </main>
  );
}
