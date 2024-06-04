import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import LogoutButton from "./buttons/LogoutButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'

export default async function Header() {
  const session = await getServerSession(authOptions);

  return (
    <header className="bg-white border-b py-6 ">
      <div className="max-w-4xl mx-auto flex justify-between px-6 ">
        <div className="flex  flex-row  gap-6 items-center  ">

          <Link href={"/"}
            className="flex items-center gap-2 text-blue-500 "
          >
            <FontAwesomeIcon icon={faLink} />
            <span className="font-bold text-sm  ">WITL-HITL</span>
          </Link>
          <nav className=" flex   items-center gap-4 text-slate-500 text-sm">
            <Link href={"/about"}>About</Link>
            <Link href={"/pricing"}>Pricing</Link>
            <Link href={"/contact"}>Contact</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4 text-slate-500 text-sm"> 
        {
            !!session && (<>
            <Link href={'/account'}>
            <div> Hello!  {session?.user?.name}</div>
            </Link>
            <LogoutButton />
            
            </>)
          }
          
          
          {!session && (
            <>
              <Link href={"/login"}>Sign In</Link>
              <Link href={"/register"}> Create Account</Link>
            </>
          )}
          
        </div>
      </div>
    </header>
  );
}
