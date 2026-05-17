export default function InfoBox({ icon, title, text }) {
  return (
    <div className="info-box">
      <div className="info-icon">{icon}</div>

      <div className="info-text">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}