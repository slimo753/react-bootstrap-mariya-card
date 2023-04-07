import Button from 'react-bootstrap/Button';

function BtnService() {

    let scrollingService = () => {

        let element = document.querySelector('#service')
        element.scrollIntoView({block: "center", inline: "nearest"})
    }

    return (
        <Button onClick={scrollingService} style={{border:  'solid 1px rgb(220, 53, 69)', color: 'rgb(220, 53, 69)'}} variant="outline-light btn-lg">Узнать об услугах</Button>
    )
}

export default BtnService;

// style={{border:  'solid 1px rgba(149, 11, 20, 0.8)', color: 'rgb(149, 1, 20)'}}