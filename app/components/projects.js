"use client";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "J1Lists",
    description:
      "A web app connecting J-1 students with hosts, jobs, and housing opportunities in the US.",
    github: "https://github.com/baransulu/j1lists",
    live: "https://j1lists.com",
    tags: ["React", "Firebase", "Tailwind"],
  },
  {
    title: "WhatsInMB",
    description:
      "A real-time local review app for tourists visiting Myrtle Beach.",
    github: "https://github.com/baransulu/whatsinmb",
    live: "https://whatsinmb.com",
    tags: ["Next.js", "Node.js", "PostgreSQL"],
  },
];

export default function Projects() {
  return (
    <section className='px-6 py-20 bg-[#0a192f] text-white'>
      <h2 className='text-3xl font-bold mb-10  text-center'>/ projects</h2>
      <div className='grid gap-8 md:grid-cols-2 max-w-5xl mx-auto items-stretch'>
        {projects.map((project, index) => (
          <div key={index} className='relative h-full'>
            {project.title === "WhatsInMB" && (
              <span className='absolute top-2 right-2 bg-yellow-600 text-xs text-white px-2 py-1 rounded-full animate-pulse'>
                🚧 in progress
              </span>
            )}

            <div className='bg-[#0d1117] border border-gray-700 h-full flex flex-col justify-between rounded-lg p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300'>
              <h3 className='text-xl font-semibold mb-2'>{project.title}</h3>
              <p className='text-gray-400 mb-4'>{project.description}</p>
              <div className='flex flex-wrap gap-2 text-xs text-cyan-300 mb-4'>
                {project.tags.map((tag, i) => (
                  <span key={i} className='bg-cyan-900 px-2 py-1 rounded'>
                    {tag}
                  </span>
                ))}
              </div>
              <div className='flex gap-4 text-xl'>
                <a
                  href={project.github}
                  target='_blank'
                  rel='noopener noreferrer'>
                  <FaGithub className='hover:text-cyan-400 transition' />
                </a>
                <a
                  href={project.live}
                  target='_blank'
                  rel='noopener noreferrer'>
                  <FaExternalLinkAlt className='hover:text-cyan-400 transition' />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
