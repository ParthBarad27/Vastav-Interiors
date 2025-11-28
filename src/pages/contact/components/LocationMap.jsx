import React from 'react';
import Icon from '../../../components/AppIcon';

const LocationMap = () => {
  const showroomDetails = {
    name: "Vastav Marketing Showroom",
    address: "Shop No. 15, Furniture Market, Andheri West, Mumbai - 400058, Maharashtra, India",
    landmark: "Near Metro Station, Opposite City Mall",
    coordinates: { lat: 19.1334, lng: 72.8291 },
    hours: [
      { days: "Monday - Saturday", time: "10:00 AM - 8:00 PM" },
      { days: "Sunday", time: "11:00 AM - 6:00 PM" }
    ],
    features: [
      { icon: "Package", label: "Material Samples", description: "View and touch quality materials" },
      { icon: "Users", label: "Expert Consultants", description: "On-site design guidance" },
      { icon: "Car", label: "Parking Available", description: "Free customer parking" },
      { icon: "Coffee", label: "Comfortable Space", description: "Relaxed consultation area" }
    ]
  };

  return (
    <section id="map-section" className="py-16 lg:py-24 bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-display text-3xl md:text-4xl text-foreground mb-4">
            Visit Our Showroom
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience our premium materials firsthand and get personalized consultation from our expert team
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-card rounded-xl shadow-brand overflow-hidden h-[500px]">
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                title={showroomDetails?.name}
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${showroomDetails?.coordinates?.lat},${showroomDetails?.coordinates?.lng}&z=15&output=embed`}
                className="border-0"
              />
            </div>

            <div className="mt-6 bg-card rounded-xl shadow-brand p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={24} color="var(--color-primary)" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground text-lg mb-2">
                    {showroomDetails?.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    {showroomDetails?.address}
                  </p>
                  <p className="text-muted-foreground text-sm mb-4">
                    <span className="font-medium">Landmark:</span> {showroomDetails?.landmark}
                  </p>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${showroomDetails?.coordinates?.lat},${showroomDetails?.coordinates?.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                  >
                    <Icon name="Navigation" size={16} />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-card rounded-xl shadow-brand p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Icon name="Clock" size={20} color="var(--color-accent)" />
                </div>
                <h3 className="font-semibold text-foreground">Showroom Hours</h3>
              </div>
              <div className="space-y-3">
                {showroomDetails?.hours?.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                    <span className="text-sm text-muted-foreground">{schedule?.days}</span>
                    <span className="text-sm font-medium text-foreground">{schedule?.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-xl shadow-brand p-6">
              <h3 className="font-semibold text-foreground mb-4">Showroom Features</h3>
              <div className="space-y-4">
                {showroomDetails?.features?.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={feature?.icon} size={16} color="var(--color-primary)" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-1">{feature?.label}</h4>
                      <p className="text-xs text-muted-foreground">{feature?.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl p-6 border border-accent/20">
              <div className="flex items-start space-x-3 mb-4">
                <Icon name="Calendar" size={20} color="var(--color-accent)" className="flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Schedule a Visit</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Book an appointment to ensure dedicated time with our consultants and avoid waiting.
                  </p>
                  <a
                    href="#consultation-booking"
                    className="inline-flex items-center space-x-2 text-sm font-medium text-accent hover:text-brand-dark-goldenrod transition-colors"
                  >
                    <span>Book Appointment</span>
                    <Icon name="ArrowRight" size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;