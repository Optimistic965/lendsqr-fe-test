type CardProps = {
  key: number
  color: string,
  imge: string,
  text: string,
  count: string
}

export const Lcard = ({color, imge, text, count}: CardProps) => {
  return (
    <div className="card">
        <div className="img_cont" style={{backgroundColor: color}}>
            <img src={imge} alt="icon"/>
        </div>
        <h2>{text}</h2>
        <h3>{count}</h3>
    </div>
  )
}
