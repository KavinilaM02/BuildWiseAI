import { motion } from "framer-motion";
import {
  ArrowRight,
  PlayCircle,
  Sparkles,
  GitBranch,
  CheckCircle,
} from "lucide-react";

const Hero = () => {
  const scrollToDashboard = () => {
    document
      .getElementById("roadmap")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#0B1120] pt-36 pb-28"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl"></div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-20 px-6 lg:flex-row">
        {/* LEFT SIDE */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1"
        >
          <p className="inline-flex items-center rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-300">
            🚀 AI-Powered Project Mentor
          </p>

          <h1 className="mt-8 text-6xl font-black leading-tight text-white">
            Build Better
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Software Projects
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">
            Generate software project ideas, AI roadmaps,
            GitHub documentation and recruiter feedback
            in seconds.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            {/* Start Building Button */}
            <button
              onClick={scrollToDashboard}
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white transition hover:scale-105"
            >
              Start Building
              <ArrowRight size={20} />
            </button>

            {/* Demo Button */}
            {/* Demo Button */}
<a
  href="https://youtu.be/lHTFU8pTVl8"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 rounded-xl border border-white/10 px-8 py-4 text-gray-300 transition hover:border-cyan-500 hover:text-white"
>
  <PlayCircle size={20} />
  Watch Demo
</a>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">
                AI Dashboard
              </h2>

              <Sparkles className="text-cyan-400" />
            </div>

            <div className="mt-8 space-y-5">
              <div className="rounded-xl bg-[#111827] p-5">
                <p className="text-sm text-gray-400">
                  Suggested Project
                </p>

                <h3 className="mt-2 text-lg font-bold text-white">
                  AI Startup Idea Validator
                </h3>
              </div>

              <div className="rounded-xl bg-[#111827] p-5">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">
                    Roadmap Progress
                  </span>

                  <span className="text-cyan-400">
                    85%
                  </span>
                </div>

                <div className="mt-4 h-3 rounded-full bg-gray-700">
                  <div className="h-3 w-[85%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-600"></div>
                </div>
              </div>

              <div className="rounded-xl bg-[#111827] p-5">
                <div className="flex items-center gap-3">
                  <GitBranch className="text-cyan-400" />

                  <span className="font-medium text-white">
                    README Generated
                  </span>

                  <CheckCircle className="ml-auto text-green-400" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;