import { BiSolidHomeAlt2 } from "react-icons/bi";
import { FaUserTie } from "react-icons/fa";
import { RiComputerFill } from "react-icons/ri";

export default function NavBar() {
  return (
    <div className="w-1/2 flex justify-evenly">
      <button className="flex justify-center p-4 w-1/4">
        <BiSolidHomeAlt2 className="text-3xl" />
      </button>

      <button className="flex justify-center p-4 w-1/4">
        <FaUserTie className="text-3xl" />
      </button>

      <button className="flex justify-center p-4 w-1/4">
        <RiComputerFill className="text-3xl" />
      </button>
    </div>
  );
}
