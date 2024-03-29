import Link from "next/link";

export default function Header() {
  return (
    <header class="bg-white border-b py-6 ">
      <div class="max-w-4xl mx-auto flex justify-between px-6 ">
        <div class="flex  flex-row  gap-6  ">
          <Link href={"/"}>WITL-HITL</Link>
          <nav class=" flex items-center gap-4 text-slate-500 text-sm">
            <Link href={"/about"}>About</Link>
            <Link href={"/pricing"}>Pricing</Link>
            <Link href={"/contact"}>Contact</Link>
          </nav>
        </div>
        <div class="flex items-center gap-4 text-slate-500 text-sm">
          <Link href={"/login"}>Sign In</Link>
          <Link href={"/register"}> Create Account</Link>
        </div>
      </div>
    </header>
  );
}
