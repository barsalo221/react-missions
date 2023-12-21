import "../Test/HomeTest.css";
import { useNavigate } from "react-router-dom";

export const Card = ({ frontImage, frontText, backText, url }) => {
  let navigate = useNavigate();

  const DivStyle = {
    backgroundImage: "url(" + frontImage + ")",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const click = () => {
    navigate(url);
  };
  return (
    <div
      className="col"
      onClick={() => click()}
      onTouchStart={() => this.classList.toggle("hover")}
    >
      <div className="container">
        <div className="front">
          <img src={frontImage} className="img-container" />
          <div className="inner">
            <p>{frontText}</p>
            <span>Card Subtitle</span>
          </div>
        </div>
        <div className="back">
          <div className="inner">
            <p>{backText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
