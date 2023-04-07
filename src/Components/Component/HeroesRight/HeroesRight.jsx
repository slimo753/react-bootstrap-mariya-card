function HeroesRight(props) {

    let styleImg = {

        boxShadow: props.boxshadow
    }

    return (
        <div className="container col-xxl-9 px-4 py-2" id={props.id}>
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-lg-6">
                <h1 className="display-5 fw-bold lh-1 mb-3">{props.name}</h1>
                <p className="lead">{props.text}</p>
                <a href={props.href}><p className="lead">{props.link}</p></a>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                    {props.children[0]}{props.children[1]}
                </div>
            </div>
            <div className="col-12 col-sm-8 col-lg-6">
                <img src={props.img} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" loading="lazy" style={styleImg}/>
            </div>
            </div>
        </div> 
    );
  }
  
  export default HeroesRight;