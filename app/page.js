import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import Amenities from "@/components/Amenities";
import Clubhouse from "@/components/Clubhouse";
import Gallery from "@/components/Gallery";
import Videos from "@/components/Videos";
import FloorPlan from "@/components/FloorPlan";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Configuration from "@/components/Configuration";
import GalleryImages from "@/components/GalleryImages";
import ReviewSection from "@/components/ReviewSection";
import PricingConfiguration from "@/components/PricingConfiguration";
import VirtualTour360 from "@/components/VirtualTour360";
import MobileForm from "@/components/MobileForm";
import OfferPriceSection from "@/components/OfferPriceSection";
import FloorPlanSection from "@/components/FloorPlanSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <Navbar />
        <Hero />
        <OfferPriceSection/>
        <MobileForm />
                {/* <ReviewSection /> */}

        <Overview />


                <Clubhouse />


        <Gallery />
        <GalleryImages/>
                {/* <VirtualTour360/> */}

        {/* <FloorPlan /> */}
        <Amenities />

        
        {/* <Configuration /> */}
                {/* <PricingConfiguration/> */}
<FloorPlanSection/>
        <Videos />
        <Location />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
