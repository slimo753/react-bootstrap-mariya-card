import Button from 'react-bootstrap/Button';

function BtnPrice() {

    let scrollingPrice = () => {

        let element = document.querySelector('#price')
        element.scrollIntoView({block: "center", inline: "nearest"})
    }

    return (
        <Button variant="outline-light btn-lg" style={{border:  'solid 1px rgb(220, 53, 69)', color: 'rgb(220, 53, 69)'}} onClick={scrollingPrice}>Узнать о цене</Button>
    )
}

export default BtnPrice;