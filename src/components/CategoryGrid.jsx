import './CategoryGrid.css';

function CategoryGrid({ categories }) {
  return (
    <section className="categoryGrid">
      {categories.map((category) => (
        <article key={category.id}>
          <h3>{category.title}</h3>
          <p>{category.tagline}</p>
          <img src={category.image} alt={category.title} loading="lazy" />
          <button type="button">Shop now</button>
        </article>
      ))}
    </section>
  );
}

export default CategoryGrid;

