function SinglePortfolioCard({ text, image }) {
  return (
    <div className="col">
      <div className="card mb-3">
        <img
          src={image}
          className="card-img-top"
          alt={image}
          width={100}
          height={100}
        />
        <div className="card-body">
          <h5 className="card-title">website Coding</h5>
          <p className="card-text">{text}</p>
          <p className="card-text">
            <small className="text-body-secondary">
              Last updated 3 mins ago
            </small>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SinglePortfolioCard;
