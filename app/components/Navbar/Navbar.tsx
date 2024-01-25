"use client";
import Image from "next/image";
import { Dashboard } from "../Icons/Dashboard/Dashboard";
import { Connectors } from "../Icons/Connectors/Connectors";
import { Devices } from "../Icons/Devices/Devices";
import Link from "next/link";
import { Settings } from "../Icons/Settings/Settings";
import { Profile } from "../Icons/Profile/Profile";
import { Chevron } from "../Icons/Chevron/Chevron";
import Logo from "../../../public/Logotype.svg";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="bg-primary-dark text-ight-grey py-5 px-40 border-b-2 border-solid border-secondary">
      <nav>
        <div className="flex gap-10 justify-between">
          <div className="flex gap-10 items-center">
            <div>
              <Image src={Logo} width={66} height={40} alt="logo" />
            </div>

            <Link
              href="/dashboard"
              className={`flex gap-2 items-center ${
                pathname === "/dashboard" ? "fill-blue" : "fill-primary-light"
              }`}
            >
              <Dashboard />
              <h3 className="text-sm text-primary-light">Dashboard</h3>
            </Link>

            <Link
              href="/connectors"
              className={`flex gap-2 items-center ${
                pathname === "/connectors" ? "fill-blue" : "fill-primary-light"
              }`}
            >
              <Connectors />
              <h3 className="text-sm text-primary-light">Connectors</h3>
            </Link>

            <Link
              href="/devices"
              className={`flex gap-2 items-center ${
                pathname === "/devices" ? "fill-blue" : "fill-primary-light"
              }`}
            >
              <Devices />
              <h3 className="text-sm text-primary-light">Devices</h3>
            </Link>

            <Link
              href="/settings"
              className={`flex gap-2 items-center ${
                pathname === "/settings" ? "fill-blue" : "fill-primary-light"
              }`}
            >
              <Settings />
              <h3 className="text-sm text-primary-light">General Settings</h3>
            </Link>
          </div>

          <div className="flex gap-10">
            <div className="flex gap-2 items-center">
              <Profile />
              <h3 className="text-sm text-primary-light">Roberts</h3>
              <Chevron />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
