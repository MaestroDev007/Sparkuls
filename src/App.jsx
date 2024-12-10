import { useState } from "react";
import Hero from "./Component/Main/Hero";
import SideBar from "./Component/SideBar/SideBar";
import WashFold from "./Component/Main/WashFold";
import DryClean from "./Component/Main/DryClean";
import Laundromat from "./Component/Main/Laundromat";
import Footer from "./Component/Footer/Footer";
import Janitorial from "./Component/Main/Janitorial"
import WhyUs from "./Component/Main/WhyUs";

function App() {
  return (
    <>
      <main>
        <Hero />
       
        <WashFold />
        <DryClean />
        <Laundromat />
        {/* <Janitorial /> */}
        {/* <WhyUs /> */}
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
