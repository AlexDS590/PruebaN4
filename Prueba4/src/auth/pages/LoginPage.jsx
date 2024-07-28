import { NavLink } from "react-router-dom"

export const LoginPage = () => {
  return (
<>
  <section className="vh-100">
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-6 text-black">
          <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
            <form style={{ width: '23rem' }}>
              <div className="row">
              <h3 className="fw-normal mb-3 pb-3 col-md-2" style={{ letterSpacing: '1px' }}>Login</h3>
              </div>
              <div data-mdb-input-init className="form-outline mb-4">
                <input type="email" id="form2Example18" className="form-control form-control-lg" />
                <label className="form-label" htmlFor="form2Example18">Email</label>
              </div>

              <div data-mdb-input-init className="form-outline mb-4">
                <input type="password" id="form2Example28" className="form-control form-control-lg" />
                <label className="form-label" htmlFor="form2Example28">Contraseña</label>
              </div>

              <div className="pt-1 mb-4">
                <NavLink className="btn btn-logeo" to="/home">Logearse</NavLink>
              </div>

              <p className="small mb-5 pb-lg-2"><a className="link-inf" href="#!">Olvidaste la contraseña</a></p>
              <p>No tienes cuenta? <a href="#!" className="link-inf">Registrate Aquí</a></p>
            </form>
          </div>
        </div>

        <div className="col-sm-6 px-0 d-none d-sm-block">
          <img src="/assets/logeo/heroeslogeo.jpg"
               alt="Login image" className="w-100 vh-100" style={{ objectFit: 'cover', objectPosition: 'left' }} />
        </div>
      </div>
    </div>
  </section>
</>

  )
}
