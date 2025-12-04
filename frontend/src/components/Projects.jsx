import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Skeleton } from "./ui/skeleton";
import { useLocalizedContent } from "../context/LanguageContext";

const Projects = () => {
  const [projectList, setProjectList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const { projects, projectsSection } = useLocalizedContent();

  React.useEffect(() => {
    let active = true;

    const fetchProjects = async () => {
      try {
        setIsLoading(true);
        const data = await new Promise((resolve) =>
          setTimeout(() => resolve(projects), 400)
        );
        if (active) {
          setProjectList(data);
        }
      } finally {
        if (active) {
          setIsLoading(false);
        }
      }
    };

    fetchProjects();
    return () => {
      active = false;
    };
  }, [projects]);

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-blue-500/10 text-blue-300 border border-blue-500/20 mb-4">
            {projectsSection.badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {projectsSection.heading}
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            {projectsSection.description}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {isLoading
            ? Array.from({ length: 4 }).map((_, index) => (
                <ProjectCardSkeleton
                  key={`skeleton-${index}`}
                  copy={projectsSection}
                />
              ))
            : projectList.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  copy={projectsSection}
                />
              ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, copy }) => {
  const [imageLoaded, setImageLoaded] = React.useState(false);
  const [imageError, setImageError] = React.useState(false);
  const buttonBaseClass =
    "flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-blue-500/20 hover:border-blue-500/50 text-white/70 hover:text-white transition-all duration-300";
  const disabledClass = "opacity-40 cursor-not-allowed pointer-events-none";

  return (
    <Card className="group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-blue-500/50 transition-all duration-500">
      <div className="relative h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          decoding="async"
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
          className={`w-full h-full object-cover transform group-hover:scale-110 transition-all duration-500 ${
            imageLoaded && !imageError ? "opacity-100" : "opacity-0"
          }`}
        />

        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-60 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none`}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none"></div>

        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-3 bg-black/40 backdrop-blur-md">
            <Skeleton className="w-16 h-16 rounded-full bg-white/10" />
            <span className="text-xs uppercase tracking-wide text-white/60">
              {copy.loadingPreview}
            </span>
          </div>
        )}

        {imageError && (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-1 bg-black/60">
            <span className="text-sm font-medium text-white/80">
              {copy.previewUnavailable}
            </span>
            <span className="text-xs text-white/50">
              {copy.assetAttention}
            </span>
          </div>
        )}

        <div className="absolute top-4 left-4 z-30">
          <Badge className="px-3 py-1 rounded-full text-xs font-medium uppercase bg-black/60 backdrop-blur-md text-white border border-white/20">
            {project.category}
          </Badge>
        </div>
      </div>

      <div className="p-8 space-y-4">
        <div>
          <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors mb-1">
            {project.title}
          </h3>
          <p className="text-white/50 text-sm">{project.subtitle}</p>
        </div>

        <p className="text-white/60 leading-relaxed text-sm">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.tech.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-white/70"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3 pt-4">
          <a
            href={project.liveUrl || undefined}
            target={project.liveUrl ? "_blank" : undefined}
            rel={project.liveUrl ? "noopener noreferrer" : undefined}
            className={`flex-1 ${buttonBaseClass} ${
              project.liveUrl ? "" : disabledClass
            }`}
            aria-disabled={!project.liveUrl}
            title={
              project.liveUrl
                ? `${copy.viewLiveTitlePrefix} ${project.title}`
                : copy.liveUnavailable
            }
            aria-label={
              project.liveUrl
                ? `${copy.viewLiveTitlePrefix} ${project.title}`
                : copy.liveUnavailable
            }
          >
            <ExternalLink className="w-4 h-4" />
            <span className="text-sm font-medium">{copy.viewLive}</span>
          </a>
          <a
            href={project.repoUrl || undefined}
            target={project.repoUrl ? "_blank" : undefined}
            rel={project.repoUrl ? "noopener noreferrer" : undefined}
            className={`${buttonBaseClass} ${
              project.repoUrl ? "" : disabledClass
            }`}
            aria-label={
              project.repoUrl
                ? `${copy.repoAriaPrefix} ${project.title}`
                : copy.repoUnavailable
            }
            aria-disabled={!project.repoUrl}
            title={
              project.repoUrl
                ? `${copy.repoTitlePrefix} ${project.title}`
                : copy.repoUnavailable
            }
          >
            <Github className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>
    </Card>
  );
};

const ProjectCardSkeleton = ({ copy }) => (
  <Card className="relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10">
    <div className="relative h-64 overflow-hidden">
      <Skeleton className="absolute inset-0 w-full h-full rounded-none bg-white/5" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-white/50">
        <Skeleton className="w-16 h-16 rounded-full bg-white/10" />
        <span className="text-xs uppercase tracking-wider">
          {copy.skeletonPreparing}
        </span>
      </div>
    </div>
    <div className="p-8 space-y-4">
      <Skeleton className="h-6 w-2/3 bg-white/10" />
      <Skeleton className="h-4 w-1/2 bg-white/5" />
      <Skeleton className="h-16 w-full bg-white/5" />
      <div className="flex gap-2">
        <Skeleton className="h-8 w-20 bg-white/5" />
        <Skeleton className="h-8 w-20 bg-white/5" />
        <Skeleton className="h-8 w-20 bg-white/5" />
      </div>
    </div>
  </Card>
);

export default Projects;
