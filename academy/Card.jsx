export default function Card({ link, img, alt }) {
    return (
      <a href={link} className="card">
        <img src={img} alt={alt} />
        <div className="overlay"></div>
      </a>
    );
  }