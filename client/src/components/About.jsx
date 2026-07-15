import {
  Brain,
  Rocket,
  Target,
  Code,
} from "lucide-react";

const About = () => {
  return (
    <section id="about" className="bg-[#0B1120] py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <h2 className="text-4xl font-bold text-white">
            About BuildWise AI
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">

            BuildWise AI is an AI-powered software project mentor that
            helps students and developers generate professional project
            ideas, technology stacks, development roadmaps, GitHub
            documentation, and recruiter feedback in seconds.

          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">

            <Brain className="mb-5 text-cyan-400" size={36} />

            <h3 className="text-2xl font-bold text-white">
              AI Assistance
            </h3>

            <p className="mt-4 text-gray-400 leading-7">
              Uses powerful AI models to generate unique software
              project ideas tailored to your interests and career goals.
            </p>

          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">

            <Rocket className="mb-5 text-cyan-400" size={36} />

            <h3 className="text-2xl font-bold text-white">
              Faster Development
            </h3>

            <p className="mt-4 text-gray-400 leading-7">
              Save hours of planning by instantly receiving project
              roadmaps, tech stack suggestions, and documentation.
            </p>

          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">

            <Target className="mb-5 text-cyan-400" size={36} />

            <h3 className="text-2xl font-bold text-white">
              Career Focused
            </h3>

            <p className="mt-4 text-gray-400 leading-7">
              Every generated project is designed to strengthen your
              resume and portfolio for internships and placements.
            </p>

          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">

            <Code className="mb-5 text-cyan-400" size={36} />

            <h3 className="text-2xl font-bold text-white">
              Modern Technologies
            </h3>

            <p className="mt-4 text-gray-400 leading-7">
              Get recommendations for React, Node.js, Python, AI,
              Flutter, Java, databases, cloud services, and more.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;