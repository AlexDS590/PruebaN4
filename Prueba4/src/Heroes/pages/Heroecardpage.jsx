import { useNavigate, useParams } from "react-router-dom";
import { HeroePorId } from "../helpers/HeroePorId";
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content';

export const Heroecardpage = () => {
    const { id } = useParams();
    const hero = HeroePorId(id);
    const navigate = useNavigate();
    const MySwal = withReactContent(Swal);

    if (!hero) {
        MySwal.fire({
            icon: 'error',
            title: 'Heroe no encontrado',
            text: `El heroe con el ID: ${id} no existe.`,
            showCancelButton: true,
            confirmButtonText: 'Ir a DC',
            cancelButtonText: 'Ir a Marvel',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33'
        }).then((result) => {
            if (result.isConfirmed) {
                navigate('/DC');
            } else {
                navigate('/Marvel');
            }
        });

        return null;
    }

    return (
        <div className="container d-flex justify-content-center">
            <div className="card" style={{ width: '18rem' }}>
                <img src={`/assets/heroes/${hero.id}.jpg`} className="card-img-top img-estilo" alt="..." style={{ height: '400px' }} />
                <div className="card-body info-card">
                    <h4 className="card-title">{hero.nombreheroe}</h4>
                    <h5 className="card-title">{hero.nombre}</h5>
                    <p className="card-text">{hero.tipo}</p>
                    <h6>Origen:<p className="card-text">{hero.origen}</p></h6>
                    <h6>Poderes:<p className="card-text">{hero.poderes}</p></h6>
                    <h6>Descripcion:<p className="card-text">{hero.descripcion}</p></h6>
                </div>
                <div className="card-body text-center p-1 m-2">
                    <button type="button" onClick={() => navigate(-1)} className="btn">Volver</button>
                </div>
            </div>
        </div>
    );
}
