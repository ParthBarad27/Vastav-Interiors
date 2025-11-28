import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectDetailModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-background rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-brand animate-scale-in">
        <div className="sticky top-0 bg-background/95 backdrop-blur-md border-b border-border p-6 flex items-center justify-between z-10">
          <h2 className="font-display text-2xl font-bold text-foreground">
            {project?.title}
          </h2>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-muted hover:bg-destructive hover:text-destructive-foreground transition-colors flex items-center justify-center"
            aria-label="Close modal"
          >
            <Icon name="X" size={20} />
          </button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="space-y-4">
              <div className="relative h-80 rounded-xl overflow-hidden">
                <Image
                  src={project?.beforeImage}
                  alt={project?.beforeImageAlt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-destructive text-destructive-foreground text-sm font-semibold rounded-full">
                  Before
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative h-80 rounded-xl overflow-hidden">
                <Image
                  src={project?.afterImage}
                  alt={project?.afterImageAlt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-success text-success-foreground text-sm font-semibold rounded-full">
                  After
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-card rounded-xl p-6 space-y-4">
              <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                Project Details
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" size={20} className="text-primary mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground font-medium">{project?.location}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Calendar" size={20} className="text-primary mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Completion Date</p>
                    <p className="text-foreground font-medium">{project?.completionDate}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Clock" size={20} className="text-primary mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Duration</p>
                    <p className="text-foreground font-medium">{project?.duration}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="IndianRupee" size={20} className="text-primary mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Budget Range</p>
                    <p className="text-foreground font-medium">{project?.budgetRange}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6">
              <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                Client Testimonial
              </h3>
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src={project?.clientAvatar}
                  alt={project?.clientAvatarAlt}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">{project?.clientName}</p>
                  <div className="flex items-center gap-1">
                    {[...Array(5)]?.map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={14}
                        fill={i < Math.floor(project?.rating) ? "currentColor" : "none"}
                        className="text-accent"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground text-sm italic">
                "{project?.testimonial}"
              </p>
            </div>
          </div>

          <div className="bg-card rounded-xl p-6 mb-6">
            <h3 className="font-display text-lg font-semibold text-foreground mb-4">
              Project Description
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {project?.fullDescription}
            </p>
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Key Challenges Overcome:</h4>
              <ul className="space-y-2">
                {project?.challenges?.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-2 text-muted-foreground">
                    <Icon name="CheckCircle2" size={18} className="text-success mt-0.5" />
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-card rounded-xl p-6 mb-6">
            <h3 className="font-display text-lg font-semibold text-foreground mb-4">
              Materials Used
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {project?.materials?.map((material, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-2 bg-muted rounded-lg"
                >
                  <Icon name="Package" size={16} className="text-primary" />
                  <span className="text-sm text-foreground">{material}</span>
                </div>
              ))}
            </div>
          </div>

          {project?.designerInfo && (
            <div className="bg-card rounded-xl p-6 mb-6">
              <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                Designer Collaboration
              </h3>
              <div className="flex items-start gap-4">
                <Image
                  src={project?.designerInfo?.avatar}
                  alt={project?.designerInfo?.avatarAlt}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <p className="font-semibold text-foreground">{project?.designerInfo?.name}</p>
                  <p className="text-sm text-muted-foreground mb-2">{project?.designerInfo?.company}</p>
                  <p className="text-muted-foreground text-sm">
                    {project?.designerInfo?.collaboration}
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="default"
              fullWidth
              iconName="MessageCircle"
              iconPosition="left"
              iconSize={18}
              className="bg-accent hover:bg-brand-dark-goldenrod"
            >
              Request Similar Project
            </Button>
            <Button
              variant="outline"
              fullWidth
              iconName="Share2"
              iconPosition="left"
              iconSize={18}
            >
              Share Project
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;