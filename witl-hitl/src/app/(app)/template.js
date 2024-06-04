import "../globals.css";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Image from "next/image";
import AppSidebar from "@/components/layout/AppSidebar";
import { Lato } from "next/font/google";
import { Toaster } from "react-hot-toast";

const lato = Lato({ subsets: ["latin"], weight:['400','700'] });

export const metadata = {
  title: "WITL-HITL",
  description: "Generated by create next app",
};

export default async function AppTemplate({ children }) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return redirect('/');
  }

  return (
    <html lang="en">
      <body className={lato.className}>
        <Toaster/>
        <main className="flex min-h-screen">
          <aside className="bg-white w-48 p-4 shadow">
            <div className="rounded-full overflow-hidden aspect-square w-24 mx-auto  ">
              <Image
                src={session?.user?.image}
                width={256}
                height={64}
                alt={"avatar"}
              />
            </div>

            <div className="flex justify-center">
              <AppSidebar/>
            </div>
          </aside>

          <div className="grow">
            <div className="bg-white m-8 p-4 shadow">
             {children}
            </div>
          </div>

        </main>
      </body>
    </html>
  );
}
