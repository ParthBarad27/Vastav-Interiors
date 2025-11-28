import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import ProjectCard from './components/ProjectCard';
import FilterSection from './components/FilterSection';
import ProjectDetailModal from './components/ProjectDetailModal';
import StatsSection from './components/StatsSection';
import CategoryTabs from './components/CategoryTabs';
import Button from '../../components/ui/Button';
import Icon from '../../components/AppIcon';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedBudget, setSelectedBudget] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const [viewMode, setViewMode] = useState('grid');

  const projectsData = [
  {
    id: 1,
    title: "Modern Kitchen Transformation",
    category: "kitchen",
    description: "Complete kitchen renovation with premium modular cabinets, granite countertops, and contemporary lighting solutions creating a perfect blend of functionality and aesthetics.",
    fullDescription: "This comprehensive kitchen transformation project involved complete demolition and reconstruction of a traditional kitchen space into a modern culinary haven. We incorporated high-quality modular cabinets with soft-close mechanisms, premium granite countertops with waterfall edges, and energy-efficient LED lighting throughout. The project also included installation of built-in appliances, custom backsplash tiling, and optimized storage solutions that maximized the available space while maintaining an open, airy feel.",
    image: "https://images.unsplash.com/photo-1628745277864-fa6f297bf88a",
    imageAlt: "Modern luxury kitchen with white cabinets, marble countertops, stainless steel appliances, pendant lighting, and large island with bar seating in bright contemporary home",
    beforeImage: "https://images.unsplash.com/photo-1605199827899-facb3a0cad6f",
    beforeImageAlt: "Old traditional kitchen with dated wooden cabinets, worn countertops, outdated appliances, and dim lighting showing need for complete renovation",
    afterImage: "https://images.unsplash.com/photo-1723470915155-621e10d20dfa",
    afterImageAlt: "Transformed modern kitchen with sleek white cabinets, premium marble countertops, contemporary appliances, bright LED lighting, and spacious island",
    location: "Mumbai, Maharashtra",
    completionDate: "15/08/2025",
    duration: "6 weeks",
    budgetRange: "₹8-10 Lakhs",
    rating: 4.9,
    clientName: "Priya Sharma",
    clientAvatar: "https://img.rocket.new/generatedImages/rocket_gen_img_111e29bbe-1763294966477.png",
    clientAvatarAlt: "Professional headshot of Indian woman with long black hair wearing blue traditional kurti smiling warmly at camera",
    testimonial: "Vastav Marketing transformed our outdated kitchen into a modern masterpiece. The attention to detail and quality of materials exceeded our expectations. The team was professional, punctual, and completed the project within the promised timeline.",
    materials: ["Modular Cabinets", "Granite Countertops", "LED Lighting", "Ceramic Tiles", "Stainless Steel Fixtures"],
    challenges: [
    "Working within limited space constraints while maximizing storage",
    "Coordinating plumbing and electrical work with minimal disruption",
    "Matching new materials with existing home aesthetics"],

    featured: true,
    designerInfo: {
      name: "Architect Rajesh Kumar",
      company: "Urban Design Studio",
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1236e79c3-1763294023133.png",
      avatarAlt: "Professional portrait of Indian male architect with short black hair wearing formal white shirt and glasses",
      collaboration: "Collaborated closely on space optimization and material selection, ensuring the design balanced functionality with modern aesthetics while staying within budget constraints."
    }
  },
  {
    id: 2,
    title: "Luxury Bedroom Suite",
    category: "bedroom",
    description: "Elegant bedroom design featuring custom wardrobes, premium bedding solutions, ambient lighting, and sophisticated color palette for ultimate comfort.",
    fullDescription: "This luxury bedroom suite project transformed a standard bedroom into a personal sanctuary. We designed and installed custom floor-to-ceiling wardrobes with mirror finishes, created a feature wall with textured wallpaper, and incorporated layered lighting solutions including ambient, task, and accent lighting. The project included premium flooring, custom headboard design, and carefully selected furniture pieces that complemented the overall aesthetic while providing maximum comfort and functionality.",
    image: "https://images.unsplash.com/photo-1587985064135-0366536eab42",
    imageAlt: "Luxurious master bedroom with king-size bed, tufted headboard, elegant bedding, modern nightstands, ambient lighting, and large windows with flowing curtains",
    beforeImage: "https://images.unsplash.com/photo-1721742119434-df8c49c5e7c3",
    beforeImageAlt: "Basic bedroom with simple bed, minimal furniture, plain walls, standard lighting, and lack of storage solutions showing need for upgrade",
    afterImage: "https://images.unsplash.com/photo-1663811397200-c2de7bbc5110",
    afterImageAlt: "Transformed luxury bedroom with custom wardrobes, elegant bed with premium bedding, sophisticated lighting, textured walls, and coordinated furniture",
    location: "Bangalore, Karnataka",
    completionDate: "22/09/2025",
    duration: "4 weeks",
    budgetRange: "₹12-15 Lakhs",
    rating: 5.0,
    clientName: "Amit Patel",
    clientAvatar: "https://img.rocket.new/generatedImages/rocket_gen_img_19d0e6f0d-1763295389190.png",
    clientAvatarAlt: "Professional headshot of Indian man with short black hair wearing navy blue suit and tie smiling confidently",
    testimonial: "The bedroom transformation exceeded all our expectations. The custom wardrobes are not only beautiful but incredibly functional. The lighting design creates the perfect ambiance, and the attention to every detail is remarkable.",
    materials: ["Custom Wardrobes", "Engineered Wood Flooring", "Textured Wallpaper", "LED Strip Lighting", "Premium Fabrics"],
    challenges: [
    "Creating adequate storage without compromising room spaciousness",
    "Integrating smart lighting controls with traditional switches",
    "Sourcing premium materials within project timeline"],

    featured: true,
    designerInfo: {
      name: "Interior Designer Meera Reddy",
      company: "Elegant Interiors",
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1540bdd40-1763296336600.png",
      avatarAlt: "Professional portrait of Indian female interior designer with shoulder-length black hair wearing elegant black blazer",
      collaboration: "Worked together on creating a cohesive design language that reflected the client's personality while incorporating practical storage solutions and contemporary design elements."
    }
  },
  {
    id: 3,
    title: "Corporate Office Renovation",
    category: "office",
    description: "Professional office space redesign with ergonomic furniture, collaborative workstations, and modern conference facilities for enhanced productivity.",
    fullDescription: "This comprehensive corporate office renovation project involved transforming a traditional office layout into a modern, collaborative workspace. We implemented an open-plan design with dedicated zones for focused work, collaboration, and relaxation. The project included installation of ergonomic workstations, soundproof meeting rooms with video conferencing capabilities, breakout areas with comfortable seating, and a reception area that reflects the company's brand identity. Special attention was given to acoustics, lighting, and air quality to create an optimal work environment.",
    image: "https://images.unsplash.com/photo-1637621982007-44aaf9f9b0c6",
    imageAlt: "Modern corporate office space with open layout, ergonomic workstations, glass meeting rooms, contemporary furniture, natural lighting, and collaborative work areas",
    beforeImage: "https://images.unsplash.com/photo-1731990027461-5f435578e513",
    beforeImageAlt: "Traditional office with cubicles, outdated furniture, poor lighting, closed-off spaces, and inefficient layout showing need for modernization",
    afterImage: "https://images.unsplash.com/photo-1624343340647-a5c0ee45e2f9",
    afterImageAlt: "Renovated modern office with open collaborative spaces, ergonomic furniture, glass partitions, bright lighting, and contemporary design elements",
    location: "Pune, Maharashtra",
    completionDate: "10/10/2025",
    duration: "8 weeks",
    budgetRange: "₹25-30 Lakhs",
    rating: 4.8,
    clientName: "TechVision Solutions",
    clientAvatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1e7bca6b4-1763295393217.png",
    clientAvatarAlt: "Professional corporate headshot of Indian business executive with short black hair wearing formal dark suit and striped tie",
    testimonial: "Vastav Marketing delivered an exceptional office transformation that has significantly improved our team's productivity and morale. The modern design, ergonomic furniture, and thoughtful space planning have created an environment where our employees love to work.",
    materials: ["Ergonomic Workstations", "Glass Partitions", "Acoustic Panels", "Vinyl Flooring", "LED Panel Lights"],
    challenges: [
    "Completing renovation while maintaining business operations",
    "Integrating technology infrastructure seamlessly",
    "Balancing open collaboration with privacy needs"],

    featured: false,
    designerInfo: {
      name: "Architect Sanjay Desai",
      company: "Workspace Innovations",
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_13f521056-1763298585980.png",
      avatarAlt: "Professional portrait of Indian male architect with glasses, short black hair wearing casual blue shirt",
      collaboration: "Partnered on creating a flexible workspace design that could adapt to changing business needs while incorporating sustainable materials and energy-efficient solutions."
    }
  },
  {
    id: 4,
    title: "Retail Showroom Design",
    category: "commercial",
    description: "Contemporary retail space with strategic product displays, ambient lighting, and customer-friendly layout maximizing sales potential.",
    fullDescription: "This retail showroom design project focused on creating an immersive shopping experience that showcases products effectively while maintaining a sophisticated brand image. We designed custom display units with integrated lighting, created distinct zones for different product categories, and implemented a circulation pattern that guides customers through the entire space. The project included installation of premium flooring, feature walls with brand elements, a welcoming reception area, and a comfortable consultation zone. Special emphasis was placed on lighting design to highlight products and create the right ambiance.",
    image: "https://images.unsplash.com/photo-1586965142106-83751d8f57a3",
    imageAlt: "Modern retail showroom with elegant product displays, strategic lighting, polished floors, glass showcases, and contemporary interior design creating premium shopping experience",
    beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1eb5d0de1-1764177360711.png",
    beforeImageAlt: "Basic retail space with simple shelving, inadequate lighting, plain walls, and uninspiring layout lacking visual appeal and organization",
    afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1935ee82e-1764177360700.png",
    afterImageAlt: "Transformed retail showroom with custom displays, premium lighting, branded elements, organized product zones, and sophisticated design",
    location: "Delhi, NCR",
    completionDate: "05/11/2025",
    duration: "10 weeks",
    budgetRange: "₹35-40 Lakhs",
    rating: 4.7,
    clientName: "Luxury Furnishings Ltd",
    clientAvatar: "https://img.rocket.new/generatedImages/rocket_gen_img_12272604c-1763300454529.png",
    clientAvatarAlt: "Professional headshot of Indian businesswoman with long black hair wearing elegant maroon blazer and pearl necklace",
    testimonial: "The showroom design has transformed our business. Customer engagement has increased significantly, and the sophisticated design perfectly represents our brand. Vastav Marketing understood our vision and delivered beyond expectations.",
    materials: ["Custom Display Units", "Marble Flooring", "Track Lighting", "Glass Partitions", "Branded Signage"],
    challenges: [
    "Creating flexible display systems for changing inventory",
    "Maintaining brand consistency throughout the space",
    "Optimizing customer flow and product visibility"],

    featured: true
  },
  {
    id: 5,
    title: "Contemporary Living Room",
    category: "living-room",
    description: "Spacious living area with modern furniture, entertainment center, and cozy seating arrangements perfect for family gatherings.",
    fullDescription: "This contemporary living room project transformed a traditional space into a modern entertainment and relaxation hub. We created a focal point with a custom-designed entertainment unit, incorporated comfortable seating arrangements with premium upholstery, and added layered lighting to create different moods. The project included installation of feature walls with textured finishes, premium flooring, custom curtains, and carefully selected decor elements. We also integrated smart home technology for lighting and entertainment control, making the space both beautiful and functional.",
    image: "https://images.unsplash.com/photo-1722247481941-22c54d3cb529",
    imageAlt: "Contemporary living room with comfortable sectional sofa, modern entertainment center, ambient lighting, decorative elements, and large windows with natural light",
    beforeImage: "https://images.unsplash.com/photo-1698335443132-16d6f6e9530f",
    beforeImageAlt: "Traditional living room with dated furniture, basic entertainment setup, plain walls, and lack of cohesive design elements",
    afterImage: "https://images.unsplash.com/photo-1717661622547-c5da556b161d",
    afterImageAlt: "Transformed contemporary living room with modern furniture, custom entertainment unit, layered lighting, textured walls, and coordinated decor",
    location: "Hyderabad, Telangana",
    completionDate: "18/09/2025",
    duration: "5 weeks",
    budgetRange: "₹10-12 Lakhs",
    rating: 4.9,
    clientName: "Kavita Menon",
    clientAvatar: "https://img.rocket.new/generatedImages/rocket_gen_img_19d9d7cd2-1763293467118.png",
    clientAvatarAlt: "Professional headshot of Indian woman with medium-length black hair wearing elegant green saree and traditional jewelry",
    testimonial: "Our living room has become the heart of our home. The design is both stylish and practical, perfect for entertaining guests and family movie nights. The quality of materials and craftsmanship is outstanding.",
    materials: ["Premium Upholstery", "Engineered Wood Panels", "Designer Lighting", "Laminate Flooring", "Custom Curtains"],
    challenges: [
    "Balancing aesthetics with family-friendly durability",
    "Integrating technology without compromising design",
    "Creating flexible seating for various occasions"],

    featured: false
  },
  {
    id: 6,
    title: "Executive Office Suite",
    category: "office",
    description: "Premium executive office with custom furniture, sophisticated decor, and integrated technology for modern business needs.",
    fullDescription: "This executive office suite project created a prestigious workspace that reflects leadership and professionalism. We designed custom executive furniture including a statement desk, credenza, and bookshelf units. The project incorporated premium materials like leather upholstery, wood veneers, and metal accents. We created a separate meeting area within the office, installed sophisticated lighting with dimming controls, and integrated technology seamlessly including video conferencing capabilities and cable management solutions. The design balances authority with approachability, creating a space that impresses clients while remaining functional for daily operations.",
    image: "https://images.unsplash.com/photo-1699621106755-4fe40ce95d64",
    imageAlt: "Luxurious executive office with large wooden desk, leather chair, built-in bookshelves, modern lighting, meeting area, and sophisticated decor",
    beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1d9e7b583-1764177360707.png",
    beforeImageAlt: "Basic office space with standard desk, simple furniture, minimal storage, and lack of executive presence or sophisticated design",
    afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_13bcc5d30-1764177360694.png",
    afterImageAlt: "Transformed executive office with custom furniture, premium materials, integrated technology, sophisticated lighting, and professional ambiance",
    location: "Chennai, Tamil Nadu",
    completionDate: "28/10/2025",
    duration: "6 weeks",
    budgetRange: "₹15-18 Lakhs",
    rating: 5.0,
    clientName: "Dr. Vikram Singh",
    clientAvatar: "https://img.rocket.new/generatedImages/rocket_gen_img_149e89bf2-1763294002281.png",
    clientAvatarAlt: "Professional portrait of Indian senior executive with gray hair wearing formal black suit, white shirt, and red tie",
    testimonial: "The executive office perfectly represents my professional standing. Every detail has been thoughtfully considered, from the custom furniture to the integrated technology. It's a space that impresses clients and inspires productivity.",
    materials: ["Custom Executive Furniture", "Leather Upholstery", "Wood Veneers", "Recessed Lighting", "Acoustic Panels"],
    challenges: [
    "Creating impressive aesthetics while maintaining functionality",
    "Integrating advanced technology discreetly",
    "Balancing privacy with accessibility"],

    featured: false,
    designerInfo: {
      name: "Interior Designer Anjali Kapoor",
      company: "Premium Office Interiors",
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1c175f8cb-1763300999109.png",
      avatarAlt: "Professional portrait of Indian female designer with short black hair wearing elegant black dress and statement necklace",
      collaboration: "Collaborated on creating a timeless design that reflects executive authority while incorporating modern functionality and technology integration."
    }
  },
  {
    id: 7,
    title: "Modular Kitchen Upgrade",
    category: "kitchen",
    description: "Efficient kitchen redesign with smart storage solutions, modern appliances, and optimized workflow for cooking enthusiasts.",
    fullDescription: "This modular kitchen upgrade project focused on maximizing efficiency and storage in a compact space. We implemented a well-planned work triangle, installed pull-out storage solutions, corner carousels, and vertical storage units to utilize every inch of available space. The project included premium modular cabinets with soft-close mechanisms, quartz countertops, ceramic tile backsplash, and energy-efficient appliances. We also incorporated task lighting under cabinets, ambient lighting for overall illumination, and accent lighting to highlight design features. The result is a kitchen that's both beautiful and highly functional.",
    image: "https://images.unsplash.com/photo-1630699144310-980c8ed310e3",
    imageAlt: "Modern modular kitchen with sleek cabinets, quartz countertops, built-in appliances, under-cabinet lighting, and efficient storage solutions",
    beforeImage: "https://images.unsplash.com/photo-1647531316322-df2a53140f3d",
    beforeImageAlt: "Old kitchen with limited storage, outdated cabinets, worn countertops, and inefficient layout lacking modern amenities",
    afterImage: "https://images.unsplash.com/photo-1630699144310-980c8ed310e3",
    afterImageAlt: "Upgraded modular kitchen with smart storage, modern appliances, premium countertops, efficient lighting, and optimized workflow",
    location: "Mumbai, Maharashtra",
    completionDate: "12/11/2025",
    duration: "5 weeks",
    budgetRange: "₹9-11 Lakhs",
    rating: 4.8,
    clientName: "Neha Gupta",
    clientAvatar: "https://img.rocket.new/generatedImages/rocket_gen_img_19be4cc4f-1763296487049.png",
    clientAvatarAlt: "Professional headshot of young Indian woman with long black hair wearing casual pink top smiling warmly",
    testimonial: "The kitchen transformation has made cooking a joy. The smart storage solutions and efficient layout have made everything so accessible. The quality of materials and attention to detail is impressive.",
    materials: ["Modular Cabinets", "Quartz Countertops", "Ceramic Tiles", "LED Under-Cabinet Lights", "Pull-Out Storage"],
    challenges: [
    "Maximizing storage in limited space",
    "Maintaining workflow efficiency during renovation",
    "Coordinating appliance installation with cabinetry"],

    featured: false
  },
  {
    id: 8,
    title: "Boutique Hotel Room",
    category: "commercial",
    description: "Luxurious hotel room design with premium furnishings, ambient lighting, and attention to guest comfort and aesthetics.",
    fullDescription: "This boutique hotel room project created a luxurious guest experience through thoughtful design and premium materials. We designed custom headboards with integrated reading lights, installed premium bedding and window treatments, and created a functional workspace area. The project included a sophisticated bathroom with premium fixtures, a mini-bar area with custom cabinetry, and carefully selected artwork and decor. We incorporated layered lighting to create different moods, used sound-absorbing materials for guest comfort, and selected durable yet elegant materials that would maintain their appearance with regular use. The design balances luxury with practicality, creating a memorable stay experience.",
    image: "https://images.unsplash.com/photo-1587985064135-0366536eab42",
    imageAlt: "Luxurious boutique hotel room with king-size bed, elegant furnishings, ambient lighting, modern amenities, and sophisticated decor creating premium guest experience",
    beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1621947d0-1764177360700.png",
    beforeImageAlt: "Basic hotel room with standard furniture, minimal decor, simple lighting, and lack of distinctive character or luxury elements",
    afterImage: "https://images.unsplash.com/photo-1615618922250-79eac1e7e8ba",
    afterImageAlt: "Transformed boutique hotel room with custom furnishings, premium bedding, sophisticated lighting, elegant decor, and luxurious ambiance",
    location: "Goa",
    completionDate: "20/10/2025",
    duration: "7 weeks",
    budgetRange: "₹18-22 Lakhs",
    rating: 4.9,
    clientName: "Coastal Retreats Hospitality",
    clientAvatar: "https://img.rocket.new/generatedImages/rocket_gen_img_17c989f9e-1763293351359.png",
    clientAvatarAlt: "Professional headshot of Indian hotel manager with short black hair wearing formal white shirt and navy blazer",
    testimonial: "The room design has elevated our boutique hotel's appeal significantly. Guests consistently praise the attention to detail and luxurious feel. The design perfectly balances aesthetics with durability for commercial use.",
    materials: ["Custom Headboards", "Premium Bedding", "Luxury Vinyl Flooring", "Designer Lighting", "Custom Cabinetry"],
    challenges: [
    "Balancing luxury aesthetics with commercial durability",
    "Creating unique character while maintaining brand consistency",
    "Optimizing space for multiple functions"],

    featured: true
  }];


  const filteredProjects = useMemo(() => {
    return projectsData?.filter((project) => {
      const matchesCategory = selectedCategory === 'all' || project?.category === selectedCategory;
      const matchesLocation = selectedLocation === 'all' || project?.location?.toLowerCase()?.includes(selectedLocation?.toLowerCase());
      const matchesBudget = selectedBudget === 'all' || true;
      const matchesSearch = searchQuery === '' ||
      project?.title?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
      project?.description?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
      project?.location?.toLowerCase()?.includes(searchQuery?.toLowerCase());

      return matchesCategory && matchesLocation && matchesBudget && matchesSearch;
    });
  }, [selectedCategory, selectedLocation, selectedBudget, searchQuery]);

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSelectedLocation('all');
    setSelectedBudget('all');
    setSearchQuery('');
  };

  const handleViewDetails = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <Helmet>
        <title>Projects - Vastav Marketing | Premium Interior Transformations</title>
        <meta name="description" content="Explore our portfolio of completed projects including kitchen renovations, bedroom designs, office spaces, and commercial interiors. See real transformations and client testimonials." />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-20">
          <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-16">
            <div className="container-custom">
              <div className="max-w-3xl mx-auto text-center animate-fade-in">
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Our Project Gallery
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Explore our portfolio of completed projects showcasing quality craftsmanship, 
                  innovative design solutions, and satisfied clients across India. Each project 
                  tells a story of transformation and excellence.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button
                    variant="default"
                    size="lg"
                    iconName="Calendar"
                    iconPosition="left"
                    iconSize={20}
                    className="bg-accent hover:bg-brand-dark-goldenrod">

                    Book Consultation
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    iconName="Download"
                    iconPosition="left"
                    iconSize={20}>

                    Download Portfolio
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="container-custom">
              <StatsSection />

              <CategoryTabs
                activeCategory={selectedCategory}
                onCategoryChange={setSelectedCategory} />


              <FilterSection
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                selectedLocation={selectedLocation}
                setSelectedLocation={setSelectedLocation}
                selectedBudget={selectedBudget}
                setSelectedBudget={setSelectedBudget}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                onReset={handleResetFilters} />


              <div className="flex items-center justify-between mb-6">
                <p className="text-muted-foreground">
                  Showing <span className="font-semibold text-foreground">{filteredProjects?.length}</span> projects
                </p>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-md transition-colors ${
                    viewMode === 'grid' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:bg-muted/80'}`
                    }
                    aria-label="Grid view">

                    <Icon name="LayoutGrid" size={20} />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-md transition-colors ${
                    viewMode === 'list' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:bg-muted/80'}`
                    }
                    aria-label="List view">

                    <Icon name="List" size={20} />
                  </button>
                </div>
              </div>

              {filteredProjects?.length > 0 ?
              <div className={`grid gap-6 ${
              viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`
              }>
                  {filteredProjects?.map((project) =>
                <ProjectCard
                  key={project?.id}
                  project={project}
                  onViewDetails={handleViewDetails} />

                )}
                </div> :

              <div className="text-center py-16">
                  <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon name="SearchX" size={48} className="text-muted-foreground" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                    No Projects Found
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Try adjusting your filters or search query to find what you're looking for.
                  </p>
                  <Button
                  variant="outline"
                  iconName="RotateCcw"
                  iconPosition="left"
                  iconSize={18}
                  onClick={handleResetFilters}>

                    Reset All Filters
                  </Button>
                </div>
              }
            </div>
          </section>

          <section className="bg-card py-16">
            <div className="container-custom">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Ready to Start Your Project?
                </h2>
                <p className="text-muted-foreground mb-8">
                  Let's transform your space into something extraordinary. Our team of experts 
                  is ready to bring your vision to life with quality materials and exceptional craftsmanship.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="default"
                    size="lg"
                    iconName="MessageCircle"
                    iconPosition="left"
                    iconSize={20}
                    className="bg-accent hover:bg-brand-dark-goldenrod">

                    Get Free Consultation
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    iconName="Phone"
                    iconPosition="left"
                    iconSize={20}>

                    Call Us Now
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />

        {selectedProject &&
        <ProjectDetailModal
          project={selectedProject}
          onClose={handleCloseModal} />

        }
      </div>
    </>);

};

export default Projects;