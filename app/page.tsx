import Image from "next/image";
import GraphArea from "./components/graphArea";
import ClickArea from "./components/clickArea";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
        
        <div className="flex-col bg-amber-50">
          <div>
            <ClickArea />
          </div>


          <div>
            <GraphArea />
          </div>
        </div>

    </div>
  );
}
