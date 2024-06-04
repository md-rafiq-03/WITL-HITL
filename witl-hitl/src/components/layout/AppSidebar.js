"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFileLines} from  "@fortawesome/free-regular-svg-icons"
import {
  faRightFromBracket,
  faArrowLeft,
  faChartLine
} from "@fortawesome/free-solid-svg-icons";
import LogoutButton from "@/components/buttons/LogoutButton";
import { usePathname } from "next/navigation";



export default function AppSidebar() {
    const path=usePathname();
  return (
    <nav className="flex flex-col text-center mt-12 gap-4 text-gray-700
    text-gray-500">
      <Link 
       href={"/account"} 
       className={"flex gap-4 " + (path==='/account'?"text-blue-500":'')}>
        <FontAwesomeIcon
          fixedWidth={true}
          icon={faFileLines}
          className={"h-6 w-6 "}
        />
        <span className="">My Page</span>
      </Link>

      <Link href={"/analytics"} className={"flex gap-4 "+ (path==='/analytics'?"text-blue-500":'')}>
        <FontAwesomeIcon
          fixedWidth={true}
          icon={faChartLine}
          className={"h-6 w-6 "}
        />
        <span className="">Analytics</span>
      </Link>

      <LogoutButton
        iconLeft={true}
        className={"flex gap-4 items-center "}
        iconClasses={"h-6 w-6"}
      />

      <Link
        href={"/"}
        className="flex items-center gap-2 text-xs text-gray-500 border-t pt-4"
      >
        <FontAwesomeIcon icon={faArrowLeft} className={"w-3 h-3"} />
        <span>Back to website</span>
      </Link>
    </nav>
  );
}
