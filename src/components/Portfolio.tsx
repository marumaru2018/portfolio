import { useState } from "react";
import { PROJECTS } from "../constants/index";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(PROJECTS[0]);

  const handleClick = (item: number) => {
    setSelectedProject(PROJECTS[item]);
  };

  return (
    <section id="portfolio" className="py-24 bg-stone-50">
      <div className="container mx-auto max-w-4xl space-y-8">
        <h2 className="text-5xl font-bold text-stone-800">Portfolio</h2>
        <p className="text-stone-500 leading-relaxed text-xl">
          学習を通じて、実際に開発した成果物のリストです🤖
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* プロジェクトリスト */}
          <div className="flex flex-col space-y-4">
            {PROJECTS.map((project, index) => (
              <button
                type="button"
                onClick={() => {
                  handleClick(index);
                }}
                key={project.name}
                className={`${
                  project.name === selectedProject.name &&
                  "border-stone-400 bg-stone-100"
                } " py-6 px-2 border border-stone-200 rounded-xl shadow-sm flex items-center space-x-2 "`}
              >
                {project.name}
              </button>
            ))}
          </div>
          {/* プロジェクト詳細 */}
          <div className="w-full col-span-2">
            <img src={selectedProject.img} alt={selectedProject.name} />
            {selectedProject && (
              <div>
                <h3 className="text-2xl font-bold text-stone-800">
                  {selectedProject.name}
                </h3>
                <p className="text-stone-500 leading-relaxed">
                  {selectedProject.description}
                </p>
                <a
                  className="text-emerald-600"
                  href={selectedProject.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  👀 View on GitHub
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
