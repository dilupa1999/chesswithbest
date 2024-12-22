import Footer from "./components/Fotter/Fotter";
import Herosection from "./components/Home/Herosection";
import OurCourses from "./components/Home/OurCourses";
import OurHistory from "./components/Home/OurHIstorey";
import OurPartners from "./components/Home/OurPartners";
import VipAdvertistment from "./components/Home/VipAdvertistment";
import Navbar from "./components/NavBar/Navbar";


export default function Home() {
  return (
    <div>
<Navbar/>
<Herosection/>
<OurCourses/>
<VipAdvertistment/>
<OurHistory/>
<OurPartners/>
<Footer/>

    </div>
  )
}
