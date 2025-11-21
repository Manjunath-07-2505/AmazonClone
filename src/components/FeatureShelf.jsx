import './FeatureShelf.css';

function FeatureShelf({ shelf }) {
  return (
    <article className="featureShelf">
      <div className="featureShelf__copy">
        <h3>{shelf.title}</h3>
        <ul>
          {shelf.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <button type="button">Explore more</button>
      </div>
      <img src={shelf.image} alt={shelf.title} loading="lazy" />
    </article>
  );
}

export default FeatureShelf;

