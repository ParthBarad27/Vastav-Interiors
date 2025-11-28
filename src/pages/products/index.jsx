import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import Select from '../../components/ui/Select';
import ProductCard from './components/ProductCard';
import FilterSidebar from './components/FilterSidebar';
import QuickViewModal from './components/QuickViewModal';
import BrandShowcase from './components/BrandShowcase';

const Products = () => {
  const [filters, setFilters] = useState({
    categories: [],
    brands: [],
    materials: [],
    priceRange: { min: 0, max: 100000 },
    inStockOnly: false
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const products = [
  {
    id: 1,
    name: "Premium Teak Wood Veneer",
    category: "Furniture",
    brand: "Century Plyboards",
    image: "https://images.unsplash.com/photo-1523530849750-c7920ebe60de",
    imageAlt: "Premium teak wood veneer sheet showing natural grain patterns and rich brown color in well-lit studio setting",
    price: 2850,
    unit: "per sq ft",
    rating: 4.8,
    reviews: 124,
    inStock: true,
    badge: "Best Seller",
    specifications: {
      material: "Natural Teak Wood",
      dimensions: "8ft x 4ft",
      finish: "Natural Polish",
      warranty: "2 Years",
      origin: "India",
      installation: "Professional Required"
    }
  },
  {
    id: 2,
    name: "Modular Kitchen Hardware Set",
    category: "Hardware",
    brand: "Häfele",
    image: "https://images.unsplash.com/photo-1721614661425-97792b3c9f7e",
    imageAlt: "Complete modular kitchen hardware set including stainless steel hinges, drawer slides and handles arranged on white surface",
    price: 15600,
    unit: "per set",
    rating: 4.9,
    reviews: 89,
    inStock: true,
    badge: "Premium",
    specifications: {
      material: "Stainless Steel",
      dimensions: "Complete Set",
      finish: "Chrome Plated",
      warranty: "5 Years",
      origin: "Germany",
      installation: "Easy DIY"
    }
  },
  {
    id: 3,
    name: "Italian Marble Flooring",
    category: "Flooring",
    brand: "Asian Paints",
    image: "https://images.unsplash.com/photo-1704530953106-9cdd4342dd36",
    imageAlt: "Luxurious Italian marble flooring tiles with white base and grey veining pattern in elegant interior space",
    price: 4200,
    unit: "per sq ft",
    rating: 4.7,
    reviews: 156,
    inStock: true,
    badge: "New Arrival",
    specifications: {
      material: "Italian Marble",
      dimensions: "24x24 inches",
      finish: "High Gloss",
      warranty: "10 Years",
      origin: "Italy",
      installation: "Professional Required"
    }
  },
  {
    id: 4,
    name: "Designer Wall Panel System",
    category: "Wall Panels",
    brand: "Godrej Interio",
    image: "https://images.unsplash.com/photo-1661305761959-d9dc3813b9fd",
    imageAlt: "Modern designer wall panel system with geometric 3D patterns in neutral grey color installed in contemporary living room",
    price: 3800,
    unit: "per panel",
    rating: 4.6,
    reviews: 67,
    inStock: true,
    specifications: {
      material: "MDF with Laminate",
      dimensions: "8ft x 4ft",
      finish: "Textured",
      warranty: "3 Years",
      origin: "India",
      installation: "Professional Required"
    }
  },
  {
    id: 5,
    name: "Soft Close Door Hinges",
    category: "Hardware",
    brand: "Hettich",
    image: "https://images.unsplash.com/photo-1662909950437-4388ca81c6d1",
    imageAlt: "Premium soft close door hinges in silver finish with hydraulic damping mechanism displayed on wooden surface",
    price: 850,
    unit: "per piece",
    rating: 4.9,
    reviews: 234,
    inStock: true,
    badge: "Top Rated",
    specifications: {
      material: "Steel Alloy",
      dimensions: "Standard Size",
      finish: "Nickel Plated",
      warranty: "5 Years",
      origin: "Germany",
      installation: "Easy DIY"
    }
  },
  {
    id: 6,
    name: "Solid Wood Main Door",
    category: "Doors",
    brand: "Century Plyboards",
    image: "https://images.unsplash.com/photo-1688633246691-488f5d909fe4",
    imageAlt: "Elegant solid wood main door with carved panels and brass hardware in rich mahogany finish against white wall",
    price: 28500,
    unit: "per door",
    rating: 4.8,
    reviews: 45,
    inStock: true,
    specifications: {
      material: "Solid Teak Wood",
      dimensions: "7ft x 3.5ft",
      finish: "Natural Polish",
      warranty: "5 Years",
      origin: "India",
      installation: "Professional Required"
    }
  },
  {
    id: 7,
    name: "LED Panel Lighting System",
    category: "Lighting",
    brand: "Asian Paints",
    image: "https://images.unsplash.com/photo-1682943809801-051d0557dfd0",
    imageAlt: "Modern LED panel lighting system with slim profile and warm white light installed in office ceiling",
    price: 1850,
    unit: "per panel",
    rating: 4.7,
    reviews: 123,
    inStock: true,
    badge: "Energy Efficient",
    specifications: {
      material: "Aluminum Frame",
      dimensions: "2ft x 2ft",
      finish: "White",
      warranty: "2 Years",
      origin: "India",
      installation: "Professional Required"
    }
  },
  {
    id: 8,
    name: "Laminate Flooring Premium",
    category: "Flooring",
    brand: "Century Plyboards",
    image: "https://images.unsplash.com/photo-1544228200-7d6beeb2a611",
    imageAlt: "Premium laminate flooring planks with realistic wood grain texture in light oak color laid in modern room",
    price: 1650,
    unit: "per sq ft",
    rating: 4.6,
    reviews: 89,
    inStock: false,
    specifications: {
      material: "High Pressure Laminate",
      dimensions: "48x6 inches",
      finish: "Matte",
      warranty: "15 Years",
      origin: "India",
      installation: "Easy DIY"
    }
  },
  {
    id: 9,
    name: "Drawer Slide System",
    category: "Hardware",
    brand: "EBCO",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1effdc755-1764177361106.png",
    imageAlt: "Heavy duty drawer slide system with ball bearing mechanism in silver finish showing smooth extension capability",
    price: 680,
    unit: "per pair",
    rating: 4.8,
    reviews: 178,
    inStock: true,
    specifications: {
      material: "Cold Rolled Steel",
      dimensions: "18 inches",
      finish: "Zinc Plated",
      warranty: "3 Years",
      origin: "India",
      installation: "Easy DIY"
    }
  },
  {
    id: 10,
    name: "Acoustic Wall Panels",
    category: "Wall Panels",
    brand: "Godrej Interio",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d7ed4949-1764177359439.png",
    imageAlt: "Sound absorbing acoustic wall panels with fabric covering in charcoal grey color installed in home theater",
    price: 4500,
    unit: "per panel",
    rating: 4.7,
    reviews: 56,
    inStock: true,
    badge: "Soundproof",
    specifications: {
      material: "Acoustic Foam",
      dimensions: "4ft x 2ft",
      finish: "Fabric Covered",
      warranty: "2 Years",
      origin: "India",
      installation: "Professional Required"
    }
  },
  {
    id: 11,
    name: "Glass Partition System",
    category: "Doors",
    brand: "Häfele",
    image: "https://images.unsplash.com/photo-1624343340647-a5c0ee45e2f9",
    imageAlt: "Modern frameless glass partition system with aluminum tracks creating transparent office space division",
    price: 8900,
    unit: "per sq ft",
    rating: 4.9,
    reviews: 34,
    inStock: true,
    badge: "Modern",
    specifications: {
      material: "Tempered Glass",
      dimensions: "Custom Size",
      finish: "Clear/Frosted",
      warranty: "5 Years",
      origin: "Germany",
      installation: "Professional Required"
    }
  },
  {
    id: 12,
    name: "Chandelier Lighting Fixture",
    category: "Lighting",
    brand: "Asian Paints",
    image: "https://images.unsplash.com/photo-1704987509780-ab94ad5ce1b1",
    imageAlt: "Elegant crystal chandelier lighting fixture with multiple tiers and warm LED lights hanging in luxury dining room",
    price: 24500,
    unit: "per piece",
    rating: 4.8,
    reviews: 67,
    inStock: true,
    badge: "Luxury",
    specifications: {
      material: "Crystal & Metal",
      dimensions: "36 inches diameter",
      finish: "Chrome",
      warranty: "3 Years",
      origin: "India",
      installation: "Professional Required"
    }
  }];


  const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'newest', label: 'Newest First' }];


  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setCurrentPage(1);
  };

  const handleClearFilters = () => {
    setFilters({
      categories: [],
      brands: [],
      materials: [],
      priceRange: { min: 0, max: 100000 },
      inStockOnly: false
    });
    setSearchQuery('');
    setCurrentPage(1);
  };

  const handleAddToWishlist = (productId) => {
    setWishlist((prev) =>
    prev?.includes(productId) ?
    prev?.filter((id) => id !== productId) :
    [...prev, productId]
    );
  };

  const handleQuickView = (product) => {
    setSelectedProduct(product);
  };

  const handleRequestSample = (product) => {
    alert(`Sample request submitted for ${product?.name}. Our team will contact you within 24 hours.`);
    setSelectedProduct(null);
  };

  const handleGetQuote = (product) => {
    alert(`Quote request submitted for ${product?.name}. You will receive a detailed quotation via email shortly.`);
    setSelectedProduct(null);
  };

  const filteredProducts = products?.filter((product) => {
    const matchesSearch = product?.name?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
    product?.category?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
    product?.brand?.toLowerCase()?.includes(searchQuery?.toLowerCase());

    const matchesCategory = filters?.categories?.length === 0 ||
    filters?.categories?.includes(product?.category?.toLowerCase()?.replace(/\s+/g, '-'));

    const matchesBrand = filters?.brands?.length === 0 ||
    filters?.brands?.includes(product?.brand?.toLowerCase()?.replace(/\s+/g, '-'));

    const matchesPrice = product?.price >= filters?.priceRange?.min &&
    product?.price <= (filters?.priceRange?.max || 100000);

    const matchesStock = !filters?.inStockOnly || product?.inStock;

    return matchesSearch && matchesCategory && matchesBrand && matchesPrice && matchesStock;
  });

  const sortedProducts = [...filteredProducts]?.sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a?.price - b?.price;
      case 'price-high':
        return b?.price - a?.price;
      case 'rating':
        return b?.rating - a?.rating;
      case 'newest':
        return b?.id - a?.id;
      default:
        return 0;
    }
  });

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts?.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(sortedProducts?.length / productsPerPage);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <div className="bg-primary/5 border-b border-border">
          <div className="container-custom py-lg">
            <div className="max-w-3xl">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                Premium Materials Catalog
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Discover our extensive collection of quality furniture and interior materials from trusted brands
              </p>
              
              <div className="relative">
                <Icon
                  name="Search"
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />

                <input
                  type="text"
                  placeholder="Search products, categories, or brands..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e?.target?.value)}
                  className="w-full pl-12 pr-4 py-4 border border-input rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-ring bg-background" />

              </div>
            </div>
          </div>
        </div>

        <div className="container-custom py-lg">
          <div className="flex flex-col lg:flex-row gap-8">
            <aside className="lg:w-80 flex-shrink-0">
              <FilterSidebar
                filters={filters}
                onFilterChange={handleFilterChange}
                onClearFilters={handleClearFilters}
                isMobileOpen={isMobileFilterOpen}
                onMobileClose={() => setIsMobileFilterOpen(false)} />

            </aside>

            <main className="flex-1">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                <div className="flex items-center space-x-4">
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="SlidersHorizontal"
                    iconPosition="left"
                    iconSize={18}
                    onClick={() => setIsMobileFilterOpen(true)}
                    className="lg:hidden">

                    Filters
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    Showing {indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, sortedProducts?.length)} of {sortedProducts?.length} products
                  </p>
                </div>

                <div className="flex items-center space-x-3">
                  <Select
                    options={sortOptions}
                    value={sortBy}
                    onChange={setSortBy}
                    className="w-48" />


                  <div className="hidden sm:flex items-center border border-border rounded-md">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 ${viewMode === 'grid' ? 'bg-muted' : ''} transition-colors`}
                      aria-label="Grid view">

                      <Icon name="Grid3x3" size={18} />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 ${viewMode === 'list' ? 'bg-muted' : ''} transition-colors`}
                      aria-label="List view">

                      <Icon name="List" size={18} />
                    </button>
                  </div>
                </div>
              </div>

              {currentProducts?.length > 0 ?
              <>
                  <div className={`grid gap-6 ${
                viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`
                }>
                    {currentProducts?.map((product) =>
                  <ProductCard
                    key={product?.id}
                    product={product}
                    onQuickView={handleQuickView}
                    onAddToWishlist={handleAddToWishlist}
                    isWishlisted={wishlist?.includes(product?.id)} />

                  )}
                  </div>

                  {totalPages > 1 &&
                <div className="flex items-center justify-center space-x-2 mt-lg">
                      <Button
                    variant="outline"
                    size="sm"
                    iconName="ChevronLeft"
                    iconPosition="left"
                    iconSize={16}
                    onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}>

                        Previous
                      </Button>

                      <div className="flex items-center space-x-1">
                        {[...Array(totalPages)]?.map((_, index) =>
                    <button
                      key={index}
                      onClick={() => setCurrentPage(index + 1)}
                      className={`w-10 h-10 rounded-md text-sm font-medium transition-colors ${
                      currentPage === index + 1 ?
                      'bg-primary text-primary-foreground' :
                      'bg-muted text-foreground hover:bg-muted-foreground/10'}`
                      }>

                            {index + 1}
                          </button>
                    )}
                      </div>

                      <Button
                    variant="outline"
                    size="sm"
                    iconName="ChevronRight"
                    iconPosition="right"
                    iconSize={16}
                    onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                    disabled={currentPage === totalPages}>

                        Next
                      </Button>
                    </div>
                }
                </> :

              <div className="text-center py-xl">
                  <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon name="Package" size={48} className="text-muted-foreground" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                    No Products Found
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Try adjusting your filters or search query
                  </p>
                  <Button
                  variant="outline"
                  iconName="RotateCcw"
                  iconPosition="left"
                  iconSize={18}
                  onClick={handleClearFilters}>

                    Clear All Filters
                  </Button>
                </div>
              }
            </main>
          </div>
        </div>

        <BrandShowcase />

        <section className="py-xl bg-primary/5">
          <div className="container-custom">
            <div className="bg-card border border-border rounded-lg p-8 md:p-12 text-center">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                Need Help Choosing the Right Materials?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Our expert team is ready to guide you through material selection, provide samples, and create custom solutions for your project
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                <Button
                  variant="default"
                  size="lg"
                  iconName="Phone"
                  iconPosition="left"
                  iconSize={20}
                  className="bg-primary hover:bg-primary/90">

                  Call +91 98765 43210
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Calendar"
                  iconPosition="left"
                  iconSize={20}>

                  Book Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
      {selectedProduct &&
      <QuickViewModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onRequestSample={handleRequestSample}
        onGetQuote={handleGetQuote} />

      }
      <Footer />
    </div>);

};

export default Products;