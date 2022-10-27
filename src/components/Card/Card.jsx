import "./card.scss";


export const Card = (props) => {
  return (
    <div className="card">
        <div className="leftSide">
            <h2 className="cardName">{props.cardName}</h2>
            <span className="cardValue">{props.cardValue}</span>
            <span className="cardLink">{props.cardLink}</span>
        </div>
        <div className="rightSide">
            <h4 className="cardChart">+{props.cardChart} %</h4>
            {props.cardIcon}
        </div>
    </div>
  )
}
