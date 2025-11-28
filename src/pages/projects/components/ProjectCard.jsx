import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectCard = ({ project, onViewDetails }) => {
  return (
    <div className="group bg-card rounded-xl overflow-hidden shadow-brand hover:shadow-brand-hover transition-brand hover-lift">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={project?.image}
          alt={project?.imageAlt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
            {project?.category}
          </span>
          {project?.featured && (
            <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full flex items-center gap-1">
              <Icon name="Star" size={12} />
              Featured
            </span>
          )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {project?.title}
          </h3>
          <div className="flex items-center gap-1 text-accent">
            <Icon name="Star" size={16} fill="currentColor" />
            <span className="text-sm font-semibold">{project?.rating}</span>
          </div>
        </div>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {project?.description}
        </p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Icon name="MapPin" size={16} className="text-primary" />
            <span>{project?.location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Icon name="Calendar" size={16} className="text-primary" />
            <span>{project?.completionDate}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Icon name="Clock" size={16} className="text-primary" />
            <span>{project?.duration}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {project?.materials?.slice(0, 3)?.map((material, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
            >
              {material}
            </span>
          ))}
          {project?.materials?.length > 3 && (
            <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
              +{project?.materials?.length - 3} more
            </span>
          )}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center gap-2">
            <Image
              src={project?.clientAvatar}
              alt={project?.clientAvatarAlt}
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="text-sm font-medium text-foreground">
              {project?.clientName}
            </span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            iconName="ArrowRight"
            iconPosition="right"
            iconSize={16}
            onClick={() => onViewDetails(project)}
          >
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;