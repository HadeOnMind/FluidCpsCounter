import Image from "next/image";
import GraphArea from "./components/graphArea";
import ClickArea from "./components/clickArea";

export default function Home() {
  return (
    <div className="w-full max-w-[900px] flex flex-col gap-10">
        
        
          
            <ClickArea />
          


          
            <GraphArea />
          
        

    </div>
  );
}
