import { FaThList } from "react-icons/fa";
import { MdMeetingRoom, MdLockPerson } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { AiOutlineHistory } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { BsList } from "react-icons/bs";
import { TbLockAccess } from "react-icons/tb";

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard',
    icon: <FaThList />,
  },
  {
    title: 'Role',
    path: '/role',
    icon: <MdLockPerson  />,
  },
  {
    title: 'ACL',
    path: '/access-control-list',
    icon: <TbLockAccess />,
  },
  {
    title: 'Rooms',
    path: '/rooms',
    icon: <MdMeetingRoom />,
  },
  {
    title: 'Employees',
    path: '/employees',
    icon: <FiUsers />,
  },
  {
    title: 'Calls',
    path: '/calls',
    icon: <IoMdCall />,
  },
  {
    title: 'Call History',
    path: '/call-history',
    icon: <AiOutlineHistory />,
  },
  {
    title: 'Project',
    path: '/project',
    icon: <BsList/>,
  },
];

export default navConfig;
