import './FlashDeals.css';

function FlashDeals({ deals }) {
  return (
    <section className="flashDeals">
      <header>
        <h2>Lightning deals</h2>
        <button type="button">See all deals</button>
      </header>
      <div className="flashDeals__grid">
        {deals.map((deal) => (
          <article key={deal.id}>
            <img src={deal.image} alt={deal.title} loading="lazy" />
            <div className="flashDeals__info">
              <span className="flashDeals__badge">Deal</span>
              <strong>${deal.price.toFixed(2)}</strong>
              <p>{deal.title}</p>
              <small>{deal.rating.toFixed(1)} ★ rating</small>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default FlashDeals;

