import GridBackground from "@/components/GridBackground";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-full">

      {/* temporary note */}
      <div className="w-full h-full absolute z-10 text-zinc-900 dark:text-white flex items-center justify-center">
        <div className="content flex flex-col items-center">
          <h1 className="text-5xl font-semibold mb-4">I am Live in</h1> 
          <div className="mx-auto mt-2 text-base font-bold tracking-tight md:text-base">
            <PointerHighlight
              rectangleClassName="bg-neutral-200 dark:bg-neutral-700/60 border-neutral-300 dark:border-neutral-600 leading-loose"
              pointerClassName="text-yellow-500 h-3 w-3"
              containerClassName="inline-block mr-1"
            >
              <span className="relative text-7xl px-10 z-10">Soon As Possible</span>
            </PointerHighlight>
          </div>
          </div>
      </div>


      {/* grid background */}
      <div className="w-full h-screen relative z-0">
        <GridBackground />
      </div>
      
      
    </div>
  );
}
