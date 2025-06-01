import MainLayout from "../layouts/MainLayout";
import About from "../components/About";
import Features from "../components/Features";
import Hero from "../components/Hero";

const HomePage = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4">
        <Hero />
        <Features />
        <About />
      </div>
    </MainLayout>
  );
};

export default HomePage;
