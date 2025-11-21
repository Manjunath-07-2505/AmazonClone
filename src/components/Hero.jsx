import './Hero.css';

function Hero({ content }) {
  return (
    <section className="hero">
      <div className="hero__copy">
        <p className="hero__eyebrow">Prime Big Deal Days</p>
        <h1>{content.headline}</h1>
        <p className="hero__subcopy">{content.subcopy}</p>
        <div className="hero__actions">
          <button type="button" className="hero__primary">
            {content.ctaPrimary}
          </button>
          <button type="button" className="hero__secondary">
            {content.ctaSecondary}
          </button>
        </div>
      </div>
      <div className="hero__art">
        <img src={content.background} alt="Amazon devices collage" />
      </div>
    </section>
  );
}

export default Hero;

