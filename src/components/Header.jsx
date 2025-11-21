import { useState } from 'react';
import './Header.css';

const navItems = [
  'Today’s Deals',
  'Customer Service',
  'Registry',
  'Gift Cards',
  'Sell',
];

function Header() {
  const [query, setQuery] = useState('');

  return (
    <header className="header">
      <div className="header__top">
        <div className="header__logo">
          <span className="header__logoMain">amazon</span>
          <span className="header__logoPrime">clone</span>
        </div>
        <div className="header__location">
          <span className="header__label">Deliver to</span>
          <strong>San Francisco</strong>
        </div>
        <label className="header__search">
          <span className="header__searchScope">All</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search Amazon"
          />
          <button type="button">Search</button>
        </label>
        <div className="header__account">
          <span className="header__label">Hello, sign in</span>
          <strong>Account & Lists</strong>
        </div>
        <div className="header__orders">
          <span className="header__label">Returns</span>
          <strong>& Orders</strong>
        </div>
        <div className="header__cart">
          <span className="header__cartCount">3</span>
          <strong>Cart</strong>
        </div>
      </div>
      <nav className="header__nav">
        <span className="header__menu">☰ All</span>
        <div className="header__links">
          {navItems.map((item) => (
            <button key={item} type="button">
              {item}
            </button>
          ))}
        </div>
        <span className="header__promo">Shop early holiday deals</span>
      </nav>
    </header>
  );
}

export default Header;

