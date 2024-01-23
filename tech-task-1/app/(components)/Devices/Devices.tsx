import { TableContentOffline } from "../Table/TableContentOffline/TableContentOffline";
import { TableFooter } from "../Table/TableFooter/TableFooter";
import { TableHead } from "../Table/TableHead/TableHead";

export const Devices = () => {
  return (
    <>
      <div className="-my-10 mx-40 border-solid border-2 border-[#c5c7d3] bg-[#ffffff] rounded-md">
        <TableHead />
        <TableContentOffline />
        <TableFooter />
      </div>
    </>
  );
};
