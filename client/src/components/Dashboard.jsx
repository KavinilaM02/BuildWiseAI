import { useState } from "react";
import { Brain, Sparkles, FileText } from "lucide-react";
import ReactMarkdown from "react-markdown";
import api from "../services/api";

const Dashboard = () => {
  const [skill, setSkill] = useState("Beginner");
  const [goal, setGoal] = useState("");
  const [interest, setInterest] = useState("");
  const [project, setProject] = useState(null);

  const [readme, setReadme] = useState("");
  const [loadingReadme, setLoadingReadme] = useState(false);

  const generateProject = async () => {
    try {
      setReadme("");

      const response = await api.post("/generate", {
        skill,
        goal,
        interest,
      });

      setProject(response.data.data);

    } catch (error) {
      console.error(error);

      alert(
        error.response
          ? JSON.stringify(error.response.data, null, 2)
          : error.message
      );
    }
  };


  const generateReadme = async () => {
    if (!project) return;

    try {
      setLoadingReadme(true);

      const response = await api.post("/readme", {
        title: project.title,
        description: project.description,
      });

      setReadme(response.data.readme);

    } catch (error) {
      console.error(error);
      alert("Failed to generate README.");

    } finally {
      setLoadingReadme(false);
    }
  };


  return (
    <section
      id="roadmap"
      className="bg-[#0B1120] py-24"
    >

      <div className="mx-auto max-w-5xl px-6">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">


          {/* Header */}

          <div className="mb-8 flex items-center justify-between">

            <div className="flex items-center gap-3">

              <Brain className="text-cyan-400" />

              <h2 className="text-2xl font-bold text-white">
                AI Dashboard
              </h2>

            </div>


            <div className="flex items-center gap-2 text-green-400">

              <Sparkles size={18} />
              Online

            </div>

          </div>



          {/* Input Form */}

          <div className="space-y-5">


            <select
              value={skill}
              onChange={(e)=>setSkill(e.target.value)}
              className="w-full rounded-xl bg-[#111827] p-4 text-white"
            >

              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>

            </select>



            <input
              type="text"
              placeholder="Career Goal"
              value={goal}
              onChange={(e)=>setGoal(e.target.value)}
              className="w-full rounded-xl bg-[#111827] p-4 text-white"
            />



            <input
              type="text"
              placeholder="Interests (React, AI...)"
              value={interest}
              onChange={(e)=>setInterest(e.target.value)}
              className="w-full rounded-xl bg-[#111827] p-4 text-white"
            />



            <button
              onClick={generateProject}
              className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-4 font-bold text-white hover:scale-105 transition"
            >
              🚀 Generate Project
            </button>


          </div>





          {/* Project Result */}


          {project && (

            <div className="mt-10 space-y-6">


              <div className="rounded-2xl bg-[#111827] p-6">

                <h2 className="text-3xl font-bold text-cyan-400">
                  {project.title}
                </h2>


                <p className="mt-4 text-gray-300 whitespace-pre-line">
                  {project.description}
                </p>


              </div>





              {project.techStack && (

                <div className="rounded-2xl bg-[#111827] p-6">


                  <h3 className="text-xl font-bold text-white">
                    Tech Stack
                  </h3>


                  <div className="mt-4 flex flex-wrap gap-3">


                    {project.techStack.map((tech,index)=>(

                      <span
                        key={index}
                        className="rounded-full bg-cyan-500/20 px-4 py-2 text-cyan-300"
                      >
                        {tech}
                      </span>

                    ))}


                  </div>


                </div>

              )}






              {project.roadmap && (

                <div className="rounded-2xl bg-[#111827] p-6">


                  <h3 className="text-xl font-bold text-white">
                    Development Roadmap
                  </h3>


                  <ul className="mt-4 space-y-3">


                    {project.roadmap.map((step,index)=>(

                      <li
                        key={index}
                        className="text-gray-300"
                      >
                        ✅ {step}
                      </li>

                    ))}


                  </ul>


                </div>

              )}







              {project.recruiterFeedback && (

                <div className="rounded-2xl border border-green-500/30 bg-green-500/10 p-6">


                  <h3 className="text-xl font-bold text-green-400">
                    Recruiter Feedback
                  </h3>


                  <p className="mt-3 text-gray-200">
                    {project.recruiterFeedback}
                  </p>


                </div>

              )}






              <button
                onClick={generateReadme}
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3 font-semibold text-white hover:scale-105 transition"
              >

                <FileText size={20}/>

                {
                  loadingReadme
                  ? "Generating README..."
                  : "📄 Generate README"
                }


              </button>



            </div>

          )}







          {/* README Output */}



          {/* README Output */}

{readme && (
  <div className="mt-10 rounded-2xl border border-white/10 bg-[#111827] p-8">
    <h2 className="mb-6 text-2xl font-bold text-cyan-400">
      📄 README.md
    </h2>

    <div className="rounded-xl bg-[#0B1120] p-6 text-gray-200">
      <ReactMarkdown
        components={{
          h1: ({ children }) => (
            <h1 className="mb-5 text-4xl font-bold text-white">
              {children}
            </h1>
          ),

          h2: ({ children }) => (
            <h2 className="mt-8 mb-4 text-3xl font-bold text-cyan-300">
              {children}
            </h2>
          ),

          h3: ({ children }) => (
            <h3 className="mt-6 mb-3 text-2xl font-semibold text-white">
              {children}
            </h3>
          ),

          p: ({ children }) => (
            <p className="mb-4 leading-8 text-gray-200">
              {children}
            </p>
          ),

          ul: ({ children }) => (
            <ul className="mb-4 list-disc pl-6 text-gray-200">
              {children}
            </ul>
          ),

          ol: ({ children }) => (
            <ol className="mb-4 list-decimal pl-6 text-gray-200">
              {children}
            </ol>
          ),

          li: ({ children }) => (
            <li className="mb-2 text-gray-200">
              {children}
            </li>
          ),

          strong: ({ children }) => (
            <strong className="font-bold text-white">
              {children}
            </strong>
          ),

          code: ({ children }) => (
            <code className="rounded bg-gray-800 px-2 py-1 text-cyan-300">
              {children}
            </code>
          ),

          pre: ({ children }) => (
            <pre className="my-4 overflow-x-auto rounded-lg bg-black p-4 text-white">
              {children}
            </pre>
          ),

          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="text-cyan-400 underline"
            >
              {children}
            </a>
          ),
        }}
      >
        {readme}
      </ReactMarkdown>
    </div>
  </div>
)}



        </div>

      </div>


    </section>
  );
};


export default Dashboard;