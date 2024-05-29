import Header from "./Pages/Header/header";
import Hero from "./Pages/Hero/hero";
import SectionOne from "./Pages/SectionOne/SectionOne";
import SectionThree from "./Pages/SectionThree/SectionThree";
import SectionTwo from "./Pages/SectionTwo/SectionTwo";
import SectionFour from "./Pages/SectionFour/SectionFour";
import SectionFive from "./Pages/SectionFive/SectionFive";

const App =()=>{
  return(
    <div>
      <Header/>
      <Hero/>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <SectionFive/>
    </div>
  )
}


export default App;