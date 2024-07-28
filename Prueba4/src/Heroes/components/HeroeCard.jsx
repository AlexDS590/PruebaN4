import { Link } from "react-router-dom";


export const HeroeCard = ({id,nombreheroe,nombre,tipo}) => {
  const imgSrc = `/assets/heroes/${id}.jpg`;
  return (
<div className="">
  <div className="card" style={{ width: '18rem' }}>
        <img className="img-estilo" src={imgSrc} alt="" style={{height: '400px'}}/>
      <div className="card-body">
        <h5 className="card-title">{nombreheroe}</h5>
        <h6 className="card-text">{nombre}</h6>
        <p className="card-text">{tipo}</p>
        <div className="card-body text-center p-1 m-1">
        <Link className="btn" to={`/heroe/${id}`}> Ver más... </Link>
        </div> 
    </div>
  </div>
</div>
  )
}
