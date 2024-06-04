"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {signOut} from "next-auth/react";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";


const LogoutButton = ({
    className = 'flex items-center gap-2 border rounded-lg p-2 px-4 shadow ',
    iconLeft = false,
    iconClasses = '',
  }) => {
  return (
    <button className={className} onClick={() => signOut()}>
      {iconLeft && (
        <FontAwesomeIcon icon={faRightFromBracket} className={iconClasses} />
      )}
      <span>Logout</span>
      {!iconLeft && (
        <FontAwesomeIcon icon={faRightFromBracket} className={iconClasses} />
      )}
    </button>
  );
};

export default LogoutButton;
