import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white border-b py-6 ">
      <div className="max-w-4xl mx-auto flex justify-between px-6 ">
        <div className="flex  flex-row  gap-6  ">
          <Link href={"/"}>WITL-HITL</Link>
          <nav className=" flex items-center gap-4 text-slate-500 text-sm">
            <Link href={"/about"}>About</Link>
            <Link href={"/pricing"}>Pricing</Link>
            <Link href={"/contact"}>Contact</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4 text-slate-500 text-sm">
          <Link href={"/login"}>Sign In</Link>
          <Link href={"/register"}> Create Account</Link>
        </div>
      </div>
    </header>
  );
}
