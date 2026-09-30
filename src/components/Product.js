export default function Product({ id, name, store, url, image }) {
  if (!name) return null; // Don't render empty templates

  return (
    <li>
      <a href={url} target="_blank" rel="noreferrer noopener sponsored">
        <div className="product-info">
          {image && <img src={image} alt={name} className="product-image" />}
          <div className="product-text">
            <span className="name">{id}. {name}</span>
            <span className="meta">on {store}</span>
          </div>
        </div>
        <span className="buy">Buy</span>
      </a>
    </li>
  );
}
