import axios from "axios";
import { TableItems } from "../components/Table/TableItems/TableItems";

const getDevices = async () => {
  try {
    const { data } = await axios.get('http://localhost:5000/devices');
    return data;
  } catch (error) {
    console.error('Error fetching devices:', error);
    return [];
  }
};

const DevicesPage = async () => {

  const devices = await getDevices();

  return (
    <div>
      <div className="pb-16 px-40 bg-primary-dark">
        <h1 className="font-medium text-white text-xl">Devices</h1>
      </div>
      <div className="-my-10 mx-40 border-solid border border-light-grey bg-white rounded-md">
        <TableItems devices={devices}/>
      </div>
    </div>
  );
}

export default DevicesPage
