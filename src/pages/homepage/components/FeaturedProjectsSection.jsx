import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const FeaturedProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
  { id: 'all', label: 'All Projects', icon: 'LayoutGrid' },
  { id: 'residential', label: 'Residential', icon: 'Home' },
  { id: 'commercial', label: 'Commercial', icon: 'Building2' },
  { id: 'hospitality', label: 'Hospitality', icon: 'Hotel' }];


  const projects = [
  {
    id: 1,
    title: "Luxury Villa Interior",
    category: "residential",
    location: "Mumbai, Maharashtra",
    image: "https://images.unsplash.com/photo-1650013361594-5ea7f37a7378",
    imageAlt: "Spacious luxury villa living room with floor-to-ceiling windows, modern furniture, marble flooring, and elegant chandelier creating opulent atmosphere",
    beforeImage: "https://images.unsplash.com/photo-1597189365044-72ae54389be4",
    beforeImageAlt: "Empty room with bare walls, concrete flooring, and basic lighting before renovation transformation",
    materials: ["Premium Teak Wood", "Italian Marble", "Designer Lighting"],
    completionDate: "November 2025",
    testimonial: "Vastav Marketing transformed our vision into reality with exceptional materials and guidance"
  },
  {
    id: 2,
    title: "Corporate Office Renovation",
    category: "commercial",
    location: "Pune, Maharashtra",
    image: "https://images.unsplash.com/photo-1674268512499-355244d163a5",
    imageAlt: "Modern corporate office space with glass partitions, ergonomic workstations, wooden accents, and professional lighting design",
    beforeImage: "https://images.unsplash.com/photo-1585675705484-c2239e62a395",
    beforeImageAlt: "Traditional office space with outdated cubicles, fluorescent lighting, and worn carpeting before modern transformation",
    materials: ["Acoustic Panels", "Modular Furniture", "LED Systems"],
    completionDate: "October 2025",
    testimonial: "Professional service and quality materials made our office transformation seamless"
  },
  {
    id: 3,
    title: "Boutique Hotel Interiors",
    category: "hospitality",
    location: "Goa",
    image: "https://images.unsplash.com/photo-1646991761123-d83ce47c30c9",
    imageAlt: "Elegant boutique hotel lobby with plush seating, decorative wooden panels, ambient lighting, and luxurious marble reception desk",
    beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_10ca84b5d-1764177360598.png",
    beforeImageAlt: "Basic hotel lobby with minimal furniture, plain walls, and standard lighting before luxury renovation",
    materials: ["Luxury Fabrics", "Custom Woodwork", "Decorative Lighting"],
    completionDate: "September 2025",
    testimonial: "The attention to detail and material quality exceeded our expectations"
  },
  {
    id: 4,
    title: "Modern Apartment Makeover",
    category: "residential",
    location: "Bangalore, Karnataka",
    image: "https://images.unsplash.com/photo-1631048730593-ca60afc95eb7",
    imageAlt: "Contemporary apartment interior with open-plan kitchen, minimalist furniture, wooden flooring, and large windows with city views",
    beforeImage: "https://images.unsplash.com/photo-1721613883249-6242e2effbf3",
    beforeImageAlt: "Dated apartment with old-fashioned furniture, worn flooring, and poor lighting before contemporary redesign",
    materials: ["Engineered Wood", "Quartz Countertops", "Smart Lighting"],
    completionDate: "August 2025",
    testimonial: "Vastav helped us achieve a modern look within our budget"
  },
  {
    id: 5,
    title: "Restaurant Interior Design",
    category: "hospitality",
    location: "Delhi NCR",
    image: "https://images.unsplash.com/photo-1648227132800-88ffbab080cc",
    imageAlt: "Upscale restaurant dining area with custom wooden tables, designer chairs, ambient pendant lighting, and sophisticated wall treatments",
    beforeImage: "https://images.unsplash.com/photo-1568882957752-920c544bb41e",
    beforeImageAlt: "Empty restaurant space with basic seating, plain walls, and standard lighting before elegant transformation",
    materials: ["Commercial Grade Furniture", "Wall Cladding", "Ambient Lighting"],
    completionDate: "July 2025",
    testimonial: "The materials and design created the perfect ambiance for our restaurant"
  },
  {
    id: 6,
    title: "Retail Showroom Setup",
    category: "commercial",
    location: "Chennai, Tamil Nadu",
    image: "https://images.unsplash.com/photo-1721739498086-e57a3325c0e1",
    imageAlt: "Modern retail showroom with glass display cases, polished wooden shelving, track lighting, and spacious customer walkways",
    beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1703a3524-1764177360712.png",
    beforeImageAlt: "Basic retail space with simple shelving, minimal lighting, and plain flooring before professional showroom conversion",
    materials: ["Display Systems", "Laminated Panels", "Track Lighting"],
    completionDate: "June 2025",
    testimonial: "Professional execution and quality materials enhanced our brand presence"
  }];


  const filteredProjects = activeFilter === 'all' ?
  projects :
  projects?.filter((project) => project?.category === activeFilter);

  return (
    <section className="py-xl bg-card">
      <div className="container-custom">
        <div className="text-center mb-lg">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
            Our Work
          </span>
          <h2 className="heading-display text-4xl md:text-5xl text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of successful transformations across residential,\ncommercial, and hospitality spaces
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-lg">
          {filters?.map((filter) =>
          <button
            key={filter?.id}
            onClick={() => setActiveFilter(filter?.id)}
            className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
            activeFilter === filter?.id ?
            'bg-primary text-primary-foreground shadow-brand' :
            'bg-background text-foreground hover:bg-muted border border-border'}`
            }>

              <Icon name={filter?.icon} size={18} />
              <span>{filter?.label}</span>
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects?.map((project, index) =>
          <div
            key={project?.id}
            className="group bg-background rounded-xl overflow-hidden border border-border hover-lift animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}>

              <div className="relative h-64 overflow-hidden">
                <Image
                src={project?.image}
                alt={project?.imageAlt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute top-4 left-4 px-3 py-1 bg-accent/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                  {project?.category?.charAt(0)?.toUpperCase() + project?.category?.slice(1)}
                </div>
              </div>

              <div className="p-6">
                <h3 className="heading-primary text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project?.title}
                </h3>
                
                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  <span>{project?.location}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project?.materials?.slice(0, 2)?.map((material, idx) =>
                <span
                  key={idx}
                  className="px-3 py-1 bg-muted text-xs font-medium rounded-full">

                      {material}
                    </span>
                )}
                </div>

                <p className="text-sm text-muted-foreground italic mb-4 line-clamp-2">
                  "{project?.testimonial}"
                </p>

                <Link
                to="/projects"
                className="inline-flex items-center text-primary text-sm font-medium hover:text-accent transition-colors">

                  <span className="mr-2">View Details</span>
                  <Icon name="ArrowRight" size={16} />
                </Link>
              </div>
            </div>
          )}
        </div>

        <div className="text-center mt-lg">
          <Link to="/projects">
            <button className="btn-primary inline-flex items-center space-x-2">
              <span>View All Projects</span>
              <Icon name="ArrowRight" size={18} />
            </button>
          </Link>
        </div>
      </div>
    </section>);

};

export default FeaturedProjectsSection;