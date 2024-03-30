import Image from "next/image";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main >
      <section className=" pt-[10vh]  ">
        <div className="mb-8 max-w-md">
          <h1 className="text-6xl font-bold">
            Your one link <br/> for everything
          </h1>
          <h2 className="text-gray-500 mt-6">
            Share your links, social profiles, contact info and more on one page
          </h2>
        </div>

        <div>
          <form className="inline-flex items-center shadow-lg shadow-gray-700/20">
          <span className="py-4 bg-white pl-4">witl-hitl.to/</span>
          <input type="text" className="py-4" placeholder="username" />
          <button type="submit" className="bg-blue-500 py-4 px-6 text-white">
            Join for Free
          </button>
          </form>
        </div>
     
      </section>


    </main>
    
  );
}