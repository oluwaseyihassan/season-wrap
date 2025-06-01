import { Heart } from "lucide-react";

const Footer = () => {
  const footerLinks = [
    {
      title: "Product",
      links: [
        { label: "Season Recaps", url: "/features" },
        { label: "Player Stats", url: "/pricing" },
        { label: "Match Insights", url: "/integrations" },
        { label: "Team Performance", url: "/blog" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", url: "/docs" },
        { label: "API Reference", url: "/api" },
        { label: "Support", url: "/support" },
        { label: "Community", url: "/community" },
      ],
    },
    {
      title: "Connect",
      links: [
        { label: "Twitter", url: "https://twitter.com/yourprofile" },
        { label: "GitHub", url: "https://github.com/yourprofile" },
        { label: "LinkedIn", url: "https://linkedin.com/in/yourprofile" },
        { label: "Newsletter", url: "/newsletter" },
      ],
    },
  ];
  return (
    <footer className="bg-[#111827] text-white mt-10">
      <div className="py-8">
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">Season Recap</h3>
            <p className="text-gray-400">Your Season. Your Stats. Your Story</p>
          </div>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.url}
                      className="text-gray-400 hover:text-accent transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-gray-400 text-xs mt-2 flex items-center justify-center space-x-1">
          <span>Built with</span>
          <Heart className="h-4 w-4 text-red-500" />
          <span>by Oluwaseyi</span>
        </p>
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Your Company Name. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
