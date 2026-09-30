export default function Product({ name, store, url, image }) {
  return (
    <li>
      <a href={url} target="_blank" rel="noopener sponsored">
        <div className="product-info">
          {image && <img src={image} alt={name} className="product-image" />}
          <div className="product-text">
            <span className="name">{name}</span>
            <span className="meta">on {store}</span>
          </div>
        </div>
        <span className="buy">Buy</span>
      </a>
    </li>
  );
}
