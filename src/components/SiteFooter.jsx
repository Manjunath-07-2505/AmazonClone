import './SiteFooter.css';

function SiteFooter() {
  return (
    <footer className="siteFooter">
      <button
        type="button"
        className="siteFooter__backTop"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        Back to top
      </button>
      <div className="siteFooter__grid">
        <div>
          <h5>Get to Know Us</h5>
          <ul>
            <li>Careers</li>
            <li>Press Releases</li>
            <li>Amazon Science</li>
          </ul>
        </div>
        <div>
          <h5>Make Money with Us</h5>
          <ul>
            <li>Sell products on Amazon</li>
            <li>Advertise Your Products</li>
            <li>Self-Publish with Us</li>
          </ul>
        </div>
        <div>
          <h5>Amazon Payment Products</h5>
          <ul>
            <li>Amazon Business Card</li>
            <li>Shop with Points</li>
            <li>Reload Your Balance</li>
          </ul>
        </div>
        <div>
          <h5>Let Us Help You</h5>
          <ul>
            <li>Your Account</li>
            <li>Shipping Rates & Policies</li>
            <li>Returns & Replacements</li>
          </ul>
        </div>
      </div>
      <p className="siteFooter__copy">© {new Date().getFullYear()} Amazon Clone demo</p>
    </footer>
  );
}

export default SiteFooter;

