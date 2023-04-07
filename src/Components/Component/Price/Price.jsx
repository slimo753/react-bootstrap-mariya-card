function Price(props) {

    return (
        <div className="card mb-4 rounded-3 shadow-sm" id='price'>
            <div className="card-header py-3" style={{height: '100px'}}>
                <h4 className="my-0 fw-normal d-flex justify-content-center">{props.name}</h4>
            </div>
            <div className="card-body d-flex justify-content-center flex-column">
                <h1 className="card-title pricing-card-title">{props.price}</h1>
                <h3>{props.title}</h3>
                <ul className="list-unstyled mt-3 mb-4" style={{height: '100px'}}> 
                    <li>{props.text1}</li>
                    <li>{props.text2}</li>
                    <li>{props.text3}</li>
                    <li>{props.text4}</li>
                    <li>{props.text5}</li>
                </ul>
                {props.children}
            </div>
        </div>
    );
}
  
export default Price;