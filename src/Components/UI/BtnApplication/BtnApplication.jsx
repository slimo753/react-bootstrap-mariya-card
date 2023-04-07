import Button from 'react-bootstrap/Button';

function BtnApplication(props) {

    return (
        <Button variant="danger btn-lg"><a href={props.href} style={{color: 'rgb(255, 255, 255)', textDecoration: 'none'}}>Оставить заявку</a></Button>
    )
}

export default BtnApplication;
