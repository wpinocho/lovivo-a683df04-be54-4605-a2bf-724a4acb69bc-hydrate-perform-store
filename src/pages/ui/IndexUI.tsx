import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ProductCard';
import { CollectionCard } from '@/components/CollectionCard';
import { FloatingCart } from '@/components/FloatingCart';
import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import type { UseIndexLogicReturn } from '@/components/headless/HeadlessIndex';
import { Droplets, Zap, Award, TrendingUp } from 'lucide-react';

/**
 * EDITABLE UI - IndexUI
 * 
 * Interfaz completamente editable para la página principal.
 * El agente IA puede modificar colores, textos, layout, etc.
 */

interface IndexUIProps {
  logic: UseIndexLogicReturn;
}

export const IndexUI = ({ logic }: IndexUIProps) => {
  const {
    collections,
    loading,
    loadingCollections,
    selectedCollectionId,
    filteredProducts,
    handleViewCollectionProducts,
    handleShowAllProducts,
  } = logic;

  return (
    <EcommerceTemplate 
      showCart={true}
    >
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-95"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: 'url(/src/assets/hero-hydration.jpg)' }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
              Hydrate & Perform
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Premium functional beverages engineered for athletes. Elevate your performance with advanced hydration and nutrition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 font-semibold text-lg px-8 py-6"
                onClick={() => {
                  document.getElementById('products-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Start Hydration
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white/10 font-semibold text-lg px-8 py-6"
                onClick={() => {
                  document.getElementById('comparer-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Compare Products
              </Button>
            </div>
          </div>
        </div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="hsl(210 20% 98%)"/>
          </svg>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Droplets className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Advanced Hydration</h3>
              <p className="text-muted-foreground text-sm">Optimal electrolyte balance for peak performance</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-full flex items-center justify-center">
                <Zap className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Rapid Absorption</h3>
              <p className="text-muted-foreground text-sm">Fast-acting formulas for immediate results</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-bold text-lg mb-2">Premium Quality</h3>
              <p className="text-muted-foreground text-sm">Trusted by professional athletes worldwide</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Performance Boost</h3>
              <p className="text-muted-foreground text-sm">Scientifically proven to enhance endurance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Electrolyte Comparer Section */}
      <section id="comparer-section" className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Compare Electrolyte Formulas</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect hydration solution for your training needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-6 border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-lg">
              <div className="aspect-square bg-muted rounded-lg mb-4 overflow-hidden">
                <img 
                  src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/a683df04-be54-4605-a2bf-724a4acb69bc/electrolyte-blue.jpg"
                  alt="Berry Blast"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-xl mb-3">Berry Blast</h3>
              <ul className="space-y-2 mb-4 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>500mg Sodium</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>200mg Potassium</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>50mg Magnesium</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Zero Sugar</span>
                </li>
              </ul>
              <div className="text-2xl font-bold text-primary mb-3">$2.99</div>
              <Button className="w-full">Add to Cart</Button>
            </div>

            <div className="bg-card rounded-xl p-6 border-2 border-secondary hover:border-secondary transition-all duration-300 hover:shadow-lg relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-bold">
                Most Popular
              </div>
              <div className="aspect-square bg-muted rounded-lg mb-4 overflow-hidden">
                <img 
                  src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/a683df04-be54-4605-a2bf-724a4acb69bc/electrolyte-green.jpg"
                  alt="Lime Fusion"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-xl mb-3">Lime Fusion</h3>
              <ul className="space-y-2 mb-4 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full"></span>
                  <span>600mg Sodium</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full"></span>
                  <span>250mg Potassium</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full"></span>
                  <span>75mg Magnesium</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full"></span>
                  <span>Zero Calories</span>
                </li>
              </ul>
              <div className="text-2xl font-bold text-secondary mb-3">$2.99</div>
              <Button className="w-full bg-secondary hover:bg-secondary/90">Add to Cart</Button>
            </div>

            <div className="bg-card rounded-xl p-6 border-2 border-border hover:border-accent transition-all duration-300 hover:shadow-lg">
              <div className="aspect-square bg-muted rounded-lg mb-4 overflow-hidden">
                <img 
                  src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/a683df04-be54-4605-a2bf-724a4acb69bc/electrolyte-orange.jpg"
                  alt="Citrus Surge"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-xl mb-3">Citrus Surge</h3>
              <ul className="space-y-2 mb-4 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <span>550mg Sodium</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <span>225mg Potassium</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <span>60mg Magnesium</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <span>+ Vitamins B & C</span>
                </li>
              </ul>
              <div className="text-2xl font-bold text-accent mb-3">$2.99</div>
              <Button className="w-full bg-accent hover:bg-accent/90">Add to Cart</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      {!loadingCollections && collections.length > 0 && (
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Shop by Category</h2>
              <p className="text-lg text-muted-foreground">
                Find the perfect products for your fitness goals
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {collections.map((collection) => (
                <CollectionCard 
                  key={collection.id} 
                  collection={collection} 
                  onViewProducts={handleViewCollectionProducts} 
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Products Section */}
      <section id="products-section" className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-4xl font-bold mb-2">
                {selectedCollectionId 
                  ? collections.find(c => c.id === selectedCollectionId)?.name || 'Products' 
                  : 'Featured Products'
                }
              </h2>
              <p className="text-muted-foreground">
                {selectedCollectionId 
                  ? collections.find(c => c.id === selectedCollectionId)?.description || ''
                  : 'Our top-performing hydration and nutrition solutions'
                }
              </p>
            </div>
            {selectedCollectionId && (
              <Button 
                variant="outline" 
                onClick={handleShowAllProducts}
              >
                View All Products
              </Button>
            )}
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-card rounded-lg h-96 animate-pulse"></div>
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No products available in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-accent opacity-95"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Performance?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of athletes who trust our products for their training and competition needs.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 font-semibold text-lg px-8 py-6"
            onClick={() => {
              document.getElementById('products-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Start Hydration
          </Button>
        </div>
      </section>

      <FloatingCart />
    </EcommerceTemplate>
  );
};
