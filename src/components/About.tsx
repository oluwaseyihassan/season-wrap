import { Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";
const About = () => {
  const socialLinks = [
    { name: "GitHub", url: "", icon: <Github size={16} /> },
    { name: "Twitter", url: "", icon: <Twitter size={16} /> },
    { name: "LinkedIn", url: "", icon: <Linkedin size={16} /> },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="my-8 mx-auto px-4 max-w-4xl"
    >
      <h5 className="bg-accent/20 text-[#0f775a] font-semibold px-4 rounded-full w-fit mx-auto text-center py-1">
        Meet The Developer
      </h5>
      <h2 className="font-bold md:text-3xl text-2xl text-dark my-3 text-center mb-8">
        About the Creator
      </h2>
      <div className="max-w-4xl mx-auto bg-white shadow-soft rounded-lg p-8 md:p-10 flex items-center md:flex-row flex-col gap-4">
        <div className=" mx-auto rounded-full overflow-hidden mb-6 flex-shrink-0 md:w-1/3">
          <img
            src="https://res.cloudinary.com/drxjxycnn/image/upload/v1748694563/profile-picture_zjhn2z.jpg"
            alt=""
            className=" object-cover w-40 h-40 md:w-48 md:h-48 rounded-full"
          />
        </div>
        <div className=" flex flex-col items-start md:w-2/3">
          <h3 className="font-bold text-2xl text-dark">Oluwaseyi Hassan</h3>
          <p className="text-gray-600 mt-2">
            Full-stack developer passionate about football and data. Creator of
            FootballStat, built to help fans see the game from every angle.
          </p>
          <div className="flex flex-wrap items-center mt-4 gap-2">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className=" flex items-center text-gray-600 bg-gray-100 px-4 py-2 rounded-md transition-colors duration-200 gap-2  hover:bg-gray-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{link.icon}</span>
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
