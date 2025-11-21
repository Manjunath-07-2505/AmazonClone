import Header from './components/Header';
import Hero from './components/Hero';
import CategoryGrid from './components/CategoryGrid';
import FlashDeals from './components/FlashDeals';
import FeatureShelf from './components/FeatureShelf';
import EssentialStrip from './components/EssentialStrip';
import SiteFooter from './components/SiteFooter';
import {
  heroContent,
  categories,
  flashDeals,
  featuredShelves,
  essentialsStrip,
} from './data/storefront';

import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="app__content">
        <Hero content={heroContent} />
        <CategoryGrid categories={categories} />
        <FlashDeals deals={flashDeals} />
        <div className="app__shelves">
          {featuredShelves.map((shelf) => (
            <FeatureShelf key={shelf.id} shelf={shelf} />
          ))}
        </div>
        <EssentialStrip items={essentialsStrip} />
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
