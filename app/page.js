import { Package } from "./Components/package";
import osFunctionsData from "./services";
import OsFunctionCard from "./Components/osFunctionCard";

export default function Home() {
  return (
    <main>
      <h1>OPERATING SYSTEM FUNCTIONS</h1>
        <div className="os-function-list">
          {
            osFunctionsData.map((osFunction)=>{
              return(
                <OsFunctionCard
                key={osFunction.id}
                title={osFunction.title}
                description={osFunction.description}
                />
              )
            })
          }
        </div>
    </main>
  )
}

