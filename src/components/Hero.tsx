import { ArrowRight, Github } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <motion.section
      className="my-8 mx-auto px-4 max-w-4xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h5 className="bg-accent/20 text-[#0f775a] font-semibold px-4 rounded-full w-fit mx-auto text-center py-1">
        Every Stat Tells a Story
      </h5>
      <h1 className="text-4xl md:text-5xl font-bold text-center mt-8 leading-tight gradient-text">
        Elevate Your Football Insights With Our Season
        Recaps
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mt-4 text-center max-w-2xl mx-auto">
        From opening day to final whistle, get the complete breakdown of your team’s campaign. Who rose? Who surprised? Who fell short? Let the numbers and narratives show you.
      </p>
      <div className="flex justify-center items-center mt-8 flex-wrap">
        <Link
          to="/select-team"
          className="bg-accent/90 hover:bg-accent text-white font-semibold px-6 py-3 rounded-lg inline-flex items-center mt-6 transition-all duration-200 hover:scale-105"
        >
          Explore App <ArrowRight size={16} className="ml-2" />
        </Link>
        <a
          href="/github"
          className="
        text-accent font-semibold px-6 py-3 rounded-lg inline-flex items-center mt-6 ml-4 transition-all duration-200 hover:scale-105 outline-2 outline-accent hover:bg-accent/10
        "
        >
          {" "}
          <Github size={20} className="mr-2" /> View source code
        </a>
      </div>
    </motion.section>
  );
};

export default Hero;
