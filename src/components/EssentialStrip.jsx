import './EssentialStrip.css';

function EssentialStrip({ items }) {
  return (
    <section className="essentialStrip">
      {items.map((item) => (
        <article key={item.id}>
          <h4>{item.label}</h4>
          <p>{item.description}</p>
        </article>
      ))}
    </section>
  );
}

export default EssentialStrip;

