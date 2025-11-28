import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ServiceCard from './components/ServiceCard';
import ProcessStep from './components/ProcessStep';
import ExpertCard from './components/ExpertCard';
import ServicePackageCard from './components/ServicePackageCard';
import TestimonialCard from './components/TestimonialCard';
import ConsultationForm from './components/ConsultationForm';
import FAQItem from './components/FAQItem';

const ServicesPage = () => {
  const [showConsultationForm, setShowConsultationForm] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
  {
    id: 1,
    icon: "Palette",
    title: "Custom Furniture Design",
    description: "Transform your vision into reality with personalized furniture design solutions tailored to your space, style, and functional requirements.",
    features: [
    "Personalized design consultation sessions",
    "Custom material recommendations",
    "3D design visualization tools",
    "Timeline and budget optimization",
    "Expert craftsmanship guidance"]

  },
  {
    id: 2,
    icon: "Layers",
    title: "Material Selection Guidance",
    description: "Navigate the world of interior materials with expert guidance ensuring you choose the perfect materials for durability, aesthetics, and value.",
    features: [
    "Expert material recommendations",
    "Application suitability analysis",
    "Quality and durability comparisons",
    "Maintenance requirement assessment",
    "Cost-benefit analysis"]

  },
  {
    id: 3,
    icon: "ClipboardList",
    title: "Project Planning Tools",
    description: "Comprehensive project planning services that ensure your interior project stays on track, on budget, and exceeds expectations.",
    features: [
    "Detailed project timeline development",
    "Material quantity calculations",
    "Delivery scheduling coordination",
    "Installation timeline planning",
    "Progress tracking systems"]

  },
  {
    id: 4,
    icon: "Wrench",
    title: "Installation Coordination",
    description: "Professional installation services connecting you with skilled installers who ensure quality workmanship and timely project completion.",
    features: [
    "Professional installer network access",
    "Quality installation standards",
    "Timeline coordination management",
    "Post-installation inspection",
    "Comprehensive warranty coverage"]

  },
  {
    id: 5,
    icon: "BookOpen",
    title: "Maintenance & Care Guides",
    description: "Protect your investment with comprehensive maintenance guidance ensuring your furniture and materials maintain their beauty for years.",
    features: [
    "Material-specific care instructions",
    "Professional cleaning recommendations",
    "Preventive maintenance schedules",
    "Troubleshooting guides",
    "Long-term preservation tips"]

  },
  {
    id: 6,
    icon: "Calculator",
    title: "Cost Estimation Tools",
    description: "Transparent pricing and detailed cost estimation tools helping you plan your budget with confidence and clarity.",
    features: [
    "Preliminary project budgets",
    "Material cost breakdowns",
    "Labor cost estimates",
    "Timeline-based pricing",
    "Bulk order discounts"]

  }];


  const processSteps = [
  {
    icon: "MessageSquare",
    title: "Initial Consultation",
    description: "We begin with an in-depth consultation to understand your vision, requirements, space constraints, and budget parameters. This foundation ensures we deliver solutions perfectly aligned with your needs.",
    highlights: ["Free consultation", "Space assessment", "Requirement analysis"]
  },
  {
    icon: "Lightbulb",
    title: "Design & Planning",
    description: "Our experts develop customized design concepts with material recommendations, 3D visualizations, and detailed project plans. You'll see exactly how your space will transform before any work begins.",
    highlights: ["3D visualization", "Material selection", "Timeline planning"]
  },
  {
    icon: "FileText",
    title: "Proposal & Approval",
    description: "Receive a comprehensive proposal including detailed specifications, transparent pricing, timeline commitments, and warranty information. We ensure complete clarity before proceeding.",
    highlights: ["Detailed quotation", "Material specifications", "Timeline commitment"]
  },
  {
    icon: "Package",
    title: "Material Procurement",
    description: "We source premium materials from trusted suppliers, ensuring quality standards are met. Our procurement team handles logistics, quality checks, and timely delivery coordination.",
    highlights: ["Quality assurance", "Timely delivery", "Inventory management"]
  },
  {
    icon: "Hammer",
    title: "Installation & Execution",
    description: "Professional installation by skilled craftsmen following strict quality standards. We coordinate all aspects ensuring minimal disruption and maximum quality in execution.",
    highlights: ["Expert installation", "Quality control", "Progress updates"]
  },
  {
    icon: "CheckCircle",
    title: "Final Inspection & Handover",
    description: "Thorough quality inspection, client walkthrough, and comprehensive handover with maintenance guides and warranty documentation. Your satisfaction is our priority.",
    highlights: ["Quality inspection", "Client approval", "Warranty activation"]
  }];


  const experts = [
  {
    name: "Rajesh Kumar",
    role: "Senior Design Consultant",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_124f9248d-1763299078489.png",
    imageAlt: "Professional Indian male designer in formal attire standing in modern office with design materials and samples displayed on desk",
    bio: "With over 15 years of experience in custom furniture design and interior materials, Rajesh specializes in creating functional yet aesthetically stunning spaces.",
    experience: "15+ Years Experience",
    projects: "200+ Projects Completed",
    specializations: ["Custom Furniture", "Space Planning", "Material Innovation"]
  },
  {
    name: "Priya Sharma",
    role: "Material Specialist",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1cc09f589-1764177359190.png",
    imageAlt: "Professional Indian female material specialist in business casual attire examining fabric samples in bright showroom with material displays",
    bio: "Priya's expertise in material science and sustainable design helps clients make informed choices that balance aesthetics, durability, and environmental responsibility.",
    experience: "12+ Years Experience",
    projects: "150+ Material Consultations",
    specializations: ["Sustainable Materials", "Quality Analysis", "Cost Optimization"]
  },
  {
    name: "Amit Patel",
    role: "Project Coordinator",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a9a92e77-1763293545964.png",
    imageAlt: "Professional Indian male project manager in business suit reviewing architectural plans and blueprints in construction site office",
    bio: "Amit ensures seamless project execution from planning to completion, coordinating between design teams, suppliers, and installation crews for flawless delivery.",
    experience: "10+ Years Experience",
    projects: "180+ Projects Managed",
    specializations: ["Project Management", "Timeline Optimization", "Quality Control"]
  }];


  const servicePackages = [
  {
    name: "Essential",
    description: "Perfect for small projects and single-room renovations",
    price: 15000,
    priceUnit: "starting from",
    features: [
    "Initial consultation (1 hour)",
    "Basic material recommendations",
    "Project timeline planning",
    "Email support for 30 days",
    "Basic maintenance guide"]

  },
  {
    name: "Professional",
    description: "Comprehensive solution for complete home interiors",
    price: 45000,
    priceUnit: "starting from",
    features: [
    "Extended consultation (3 hours)",
    "Detailed material selection guidance",
    "3D design visualization",
    "Installation coordination",
    "Priority support for 90 days",
    "Detailed maintenance guides",
    "Quarterly follow-up visits"],

    isPopular: true
  },
  {
    name: "Premium",
    description: "End-to-end luxury interior solutions",
    price: 100000,
    priceUnit: "starting from",
    features: [
    "Unlimited consultation sessions",
    "Premium material sourcing",
    "Advanced 3D rendering & walkthroughs",
    "Full project management",
    "Dedicated project coordinator",
    "24/7 priority support",
    "Annual maintenance program",
    "Lifetime consultation access"]

  }];


  const testimonials = [
  {
    name: "Vikram Mehta",
    role: "Homeowner, Mumbai",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_19f0fd5cb-1763295525028.png",
    avatarAlt: "Professional Indian male homeowner in casual shirt smiling warmly in modern living room with contemporary furniture and natural lighting",
    rating: 5,
    content: "The custom furniture design service exceeded our expectations. The team understood our vision perfectly and delivered a stunning modular kitchen that's both beautiful and highly functional. The material quality is exceptional!",
    project: "Modular Kitchen Design"
  },
  {
    name: "Sneha Reddy",
    role: "Interior Designer, Bangalore",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1f8a5c045-1763295813856.png",
    avatarAlt: "Professional Indian female interior designer in elegant business attire reviewing design samples in bright modern office with design boards",
    rating: 5,
    content: "As a professional designer, I rely on Vastav Marketing for material selection guidance. Their expertise in quality assessment and cost optimization has been invaluable for my projects. Highly recommended!",
    project: "Commercial Office Interiors"
  },
  {
    name: "Arjun Singh",
    role: "Contractor, Delhi",
    avatar: "https://images.unsplash.com/photo-1669996969206-25ab2695af8a",
    avatarAlt: "Professional Indian male contractor in work shirt and safety vest standing confidently at construction site with building materials visible",
    rating: 5,
    content: "The project planning and installation coordination services are top-notch. Everything was delivered on time, and the quality control throughout the process was impressive. Great partner for contractors!",
    project: "Residential Complex Interiors"
  }];


  const faqs = [
  {
    question: "What is included in the initial consultation?",
    answer: "Our initial consultation includes a comprehensive discussion of your project requirements, space assessment, budget planning, material recommendations, and timeline estimation. For in-person consultations, we visit your site to better understand the space and provide more accurate recommendations."
  },
  {
    question: "How long does a typical project take from consultation to completion?",
    answer: "Project timelines vary based on scope and complexity. Small projects like single-room furniture typically take 4-6 weeks, while complete home interiors may take 3-4 months. We provide detailed timelines during the planning phase and keep you updated throughout the process."
  },
  {
    question: "Do you provide material samples before finalizing selections?",
    answer: "Yes, we provide physical samples of all recommended materials including wood finishes, laminates, fabrics, and hardware. This allows you to see and feel the materials in your actual space before making final decisions."
  },
  {
    question: "What warranty do you offer on materials and installation?",
    answer: "We offer comprehensive warranties covering both materials and installation. Material warranties range from 1-10 years depending on the product, while our installation work comes with a 2-year warranty. Detailed warranty terms are provided in your project proposal."
  },
  {
    question: "Can you work within a specific budget?",
    answer: "Absolutely! We specialize in creating solutions that maximize value within your budget. During consultation, we discuss your budget parameters and provide options at different price points, ensuring you get the best quality and design within your financial comfort zone."
  },
  {
    question: "Do you handle both residential and commercial projects?",
    answer: "Yes, we serve both residential and commercial clients. Our expertise spans home interiors, office spaces, retail establishments, hospitality projects, and more. Each project receives customized attention regardless of scale or type."
  }];


  const handleLearnMore = (service) => {
    setSelectedService(service?.title);
    setShowConsultationForm(true);
    window.scrollTo({ top: document.getElementById('consultation-section')?.offsetTop - 100, behavior: 'smooth' });
  };

  const handlePackageSelect = (packageData) => {
    setSelectedService(packageData?.name);
    setShowConsultationForm(true);
    window.scrollTo({ top: document.getElementById('consultation-section')?.offsetTop - 100, behavior: 'smooth' });
  };

  const handleConsultationSubmit = (formData) => {
    console.log('Consultation request submitted:', formData);
    alert('Thank you for your consultation request! Our team will contact you within 24 hours to schedule your appointment.');
    setShowConsultationForm(false);
  };

  return (
    <>
      <Helmet>
        <title>Services - Expert Interior Design & Furniture Solutions | Vastav Marketing</title>
        <meta name="description" content="Professional interior design services including custom furniture design, material selection guidance, project planning, installation coordination, and maintenance support. Transform your space with expert guidance." />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />

        <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 rounded-full text-accent text-sm font-medium mb-6">
                <Icon name="Sparkles" size={16} />
                <span>Comprehensive Interior Solutions</span>
              </div>
              
              <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
                Expert Services for Your
                <span className="text-primary"> Dream Space</span>
              </h1>
              
              <p className="body-text text-lg text-muted-foreground mb-8 leading-relaxed">
                From initial consultation to final installation, we provide end-to-end interior design and furniture solutions. Our expert team guides you through every step, ensuring quality, efficiency, and complete satisfaction.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  variant="default"
                  iconName="Calendar"
                  iconPosition="left"
                  iconSize={18}
                  className="bg-accent hover:bg-brand-dark-goldenrod"
                  onClick={() => {
                    setShowConsultationForm(true);
                    window.scrollTo({ top: document.getElementById('consultation-section')?.offsetTop - 100, behavior: 'smooth' });
                  }}>

                  Book Free Consultation
                </Button>
                <Link to="/projects">
                  <Button
                    variant="outline"
                    iconName="Eye"
                    iconPosition="left"
                    iconSize={18}>

                    View Our Projects
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container-custom">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="heading-display text-3xl md:text-4xl text-foreground mb-4">
                Our Service Offerings
              </h2>
              <p className="body-text text-muted-foreground max-w-2xl mx-auto">
                Comprehensive solutions covering every aspect of your interior design journey
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up">
              {services?.map((service) =>
              <ServiceCard
                key={service?.id}
                service={service}
                onLearnMore={handleLearnMore} />

              )}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container-custom">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="heading-display text-3xl md:text-4xl text-foreground mb-4">
                Our Process
              </h2>
              <p className="body-text text-muted-foreground max-w-2xl mx-auto">
                A systematic approach ensuring quality, transparency, and timely delivery at every stage
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto animate-slide-up">
              {processSteps?.map((step, index) =>
              <ProcessStep
                key={index}
                step={step}
                index={index}
                isLast={index === processSteps?.length - 1} />

              )}
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container-custom">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="heading-display text-3xl md:text-4xl text-foreground mb-4">
                Meet Our Experts
              </h2>
              <p className="body-text text-muted-foreground max-w-2xl mx-auto">
                Experienced professionals dedicated to bringing your vision to life
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up">
              {experts?.map((expert, index) =>
              <ExpertCard key={index} expert={expert} />
              )}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-b from-background to-muted/30">
          <div className="container-custom">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="heading-display text-3xl md:text-4xl text-foreground mb-4">
                Service Packages
              </h2>
              <p className="body-text text-muted-foreground max-w-2xl mx-auto">
                Choose the package that best fits your project needs and budget
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto animate-slide-up">
              {servicePackages?.map((pkg, index) =>
              <ServicePackageCard
                key={index}
                packageData={pkg}
                onSelect={handlePackageSelect}
                isPopular={pkg?.isPopular} />

              )}
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container-custom">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="heading-display text-3xl md:text-4xl text-foreground mb-4">
                Client Success Stories
              </h2>
              <p className="body-text text-muted-foreground max-w-2xl mx-auto">
                Hear from clients who transformed their spaces with our expert guidance
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up">
              {testimonials?.map((testimonial, index) =>
              <TestimonialCard key={index} testimonial={testimonial} />
              )}
            </div>
          </div>
        </section>

        <section id="consultation-section" className="py-16 bg-muted/30">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12 animate-fade-in">
                <h2 className="heading-display text-3xl md:text-4xl text-foreground mb-4">
                  {showConsultationForm ? 'Book Your Consultation' : 'Ready to Get Started?'}
                </h2>
                <p className="body-text text-muted-foreground max-w-2xl mx-auto">
                  {showConsultationForm ?
                  'Fill out the form below and our team will contact you within 24 hours to schedule your free consultation' :
                  'Schedule a free consultation with our experts and take the first step toward your dream space'
                  }
                </p>
              </div>
              
              {showConsultationForm ?
              <div className="bg-card rounded-xl p-8 border border-border shadow-brand animate-scale-in">
                  <ConsultationForm
                  onSubmit={handleConsultationSubmit}
                  selectedService={selectedService} />

                </div> :

              <div className="text-center animate-fade-in">
                  <Button
                  variant="default"
                  iconName="Calendar"
                  iconPosition="left"
                  iconSize={20}
                  className="bg-accent hover:bg-brand-dark-goldenrod text-lg px-8 py-6"
                  onClick={() => setShowConsultationForm(true)}>

                    Book Free Consultation Now
                  </Button>
                </div>
              }
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container-custom">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="heading-display text-3xl md:text-4xl text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="body-text text-muted-foreground max-w-2xl mx-auto">
                Find answers to common questions about our services and process
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-4 animate-slide-up">
              {faqs?.map((faq, index) =>
              <FAQItem key={index} faq={faq} />
              )}
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <Icon name="Phone" size={48} className="mx-auto mb-6" />
              <h2 className="heading-display text-3xl md:text-4xl mb-4">
                Have Questions? We're Here to Help
              </h2>
              <p className="body-text text-lg mb-8 opacity-90">
                Our team is available to answer your questions and provide expert guidance for your project
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact">
                  <Button
                    variant="secondary"
                    iconName="MessageSquare"
                    iconPosition="left"
                    iconSize={18}>

                    Contact Us
                  </Button>
                </Link>
                <a href="tel:+919876543210">
                  <Button
                    variant="outline"
                    iconName="Phone"
                    iconPosition="left"
                    iconSize={18}
                    className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">

                    Call +91 98765 43210
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>);

};

export default ServicesPage;