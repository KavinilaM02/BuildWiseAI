import {
  Brain,
  FileText,
  GitBranch,
  Rocket,
  Layers,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: <Brain size={30} />,
    title: "AI Project Generator",
    description:
      "Generate professional software project ideas based on your skills, career goals and interests.",
  },
  {
    icon: <GitBranch size={30} />,
    title: "Development Roadmap",
    description:
      "Receive a step-by-step roadmap to build your project from scratch.",
  },
  {
    icon: <FileText size={30} />,
    title: "GitHub README",
    description:
      "Generate a complete README.md ready to upload to GitHub.",
  },
  {
    icon: <Layers size={30} />,
    title: "Tech Stack Suggestions",
    description:
      "Get the best technologies recommended for your project automatically.",
  },
  {
    icon: <Rocket size={30} />,
    title: "Recruiter Insights",
    description:
      "Understand how recruiters might evaluate your project and portfolio.",
  },
  {
    icon: <Sparkles size={30} />,
    title: "AI Powered",
    description:
      "Uses modern AI models through OpenRouter to generate unique project ideas.",
  },
];

const Features = () => {
  return (
    <section id="features" className="bg-[#0B1120] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <h2 className="text-4xl font-bold text-white">
            Powerful Features
          </h2>

          <p className="mt-4 text-gray-400">
            Everything you need to build an impressive software project.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:scale-105 hover:border-cyan-500"
            >
              <div className="mb-5 text-cyan-400">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold text-white">
                {feature.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Features;