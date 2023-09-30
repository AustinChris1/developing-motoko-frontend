import { useState } from "react";
import NavBar from "./components/NavBar";
import { whoami } from "./js/plugConnect";

function App() {
  console.log(global)
  console.log(global.someFn)
  return (
    <div className="bg-primary w-full overflow-hidden">
      <NavBar />
      <section>
        <button type="button" onClick={whoami} className=" text-white items-center mt-10">
          Who am I
        </button>
      </section>
    </div>
  );
}

export default App;
