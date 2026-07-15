import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Dashboard from "../components/Dashboard";
import About from "../components/About";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0B1120]">

      <Navbar />

      <Hero />

      <Features />

      <Dashboard />

      <About />

    </div>
  );
};

export default Home;