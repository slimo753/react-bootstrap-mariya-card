import 'bootstrap/dist/css/bootstrap.min.css'


function ComponentSlide(props) {

    return(
        <div className="px-4 py-5 my-5 text-center" style={{height: '450px'}}>
            <img className="d-block mx-auto mb-4 rounded-circle" src={props.img} alt=" " width="80" height="80"/>
            <h6 className="fw-bold">{props.name}</h6>
            <a href={props.href}>{props.href}</a>
            <div className="col-lg-5 mx-auto">
                <p className="lead mb-4">{props.text}</p>
            </div>
        </div>
    )
}

export default ComponentSlide