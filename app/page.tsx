import About from "./components/About";
import Food from "./components/Food";
import Form from "./components/Form";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Review from "./components/Review";
import Us from "./components/Us";

export default function Home() {
  return (
    <>
       <Navbar/>
       <Hero/>
       <About/>
       <Food/>
       <Form/>
       <Review/>
       <Us/>
    </>
 
  );
}
