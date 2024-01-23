import { Devices } from "../(components)/Devices/Devices";
import { Connectors } from "../(components)/Connectors/Connectors";
import { Dashboard } from "../(components)/Dashboard/Dashboard";
import { Settings } from "../(components)/Settings/Settings";

export default function Page({ params }: { params: { id: string } }) {
  const id: string = params.id;
  const capitalizePageName = id[0].toUpperCase() + id.slice(1);

  const isDevicesPage = capitalizePageName === "Devices";
  const isConnectorsPage = capitalizePageName === "Connectors";
  const isDashboardPage = capitalizePageName === "Dashboard";
  const isSettingsPage = capitalizePageName === "Settings";

  const showPage = () => {
    if (isDevicesPage) {
      return <Devices />;
    } else if (isConnectorsPage) {
      return <Connectors />;
    } else if (isDashboardPage) {
      return <Dashboard />;
    } else if (isSettingsPage) {
      return <Settings />;
    }
  };

  return (
    <main>
      <div className="pb-16 px-40 bg-[#181e34]">
        <h1 className="font-medium text-white text-xl">{capitalizePageName}</h1>
      </div>
      <div className="flex flex-col">{showPage()}</div>
    </main>
  );
}
