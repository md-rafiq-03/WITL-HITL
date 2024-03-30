"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { signIn } from "next-auth/react";
const LoginWithGithub = () => {
  return (
    <div>
      <button
        onClick={() => signIn('github')}
        className="bg-white shadow text-center w-full py-4 flex justify-center gap-2 "
      >
        <FontAwesomeIcon icon={faGithub} className="w-6 "  />
        <span>Sign In with Github</span>
      </button>
    </div>
  );
};

export default LoginWithGithub;
