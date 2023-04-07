import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import img from '../../Img/inscription.png'

function ComponentNavbar() {

  let scrollingHome = () => {

    let element = document.querySelector('#home')
    element.scrollIntoView({block: "center", inline: "nearest"})
  }

  let scrollingService = () => {

      let element = document.querySelector('#service')
      element.scrollIntoView({block: "center", inline: "nearest"})
  }

  let scrollingWork = () => {

      let element = document.querySelector('#referal')
      element.scrollIntoView({block: "center", inline: "nearest"})
  }

  let scrollingAdress = () => {

      let element = document.querySelector('#adress')
      element.scrollIntoView({block: "center", inline: "nearest"})
  }

  let scrollingPrice = () => {

      let element = document.querySelector('#price')
      element.scrollIntoView({block: "center", inline: "nearest"})
  }

  let scrollingContacts= () => {

      let element = document.querySelector('#social')
      element.scrollIntoView({block: "center", inline: "nearest"})
  }

  let scrollingReviews= () => {

    let element = document.querySelector('#reviews')
    element.scrollIntoView({block: "start", inline: "nearest"})
  }

  return (
    <>
      {['lg'].map((expand) => (
        <Navbar key={expand} bg='transparent' expand={expand} className="m-0"> 
          <Container fluid className='col-xxl-9'>
            <Navbar.Brand className='d-flex justify-content-center fs-6 align-items-center' style={{color: 'rgb(255, 255, 255)'}}><img src={img} width='30px' height='30px' className="mx-2"/>
              Мария Халилова</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} style={{backgroundColor: 'rgb(147, 89, 182)'}}/>
            <Navbar.Offcanvas 
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className='bg-dark'
            >
              <Offcanvas.Header closeButton style={{backgroundColor: 'rgb(147, 89, 182)'}}>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} style={{color: 'rgb(255, 255, 255)'}}>
                  Мария Халилова
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}/>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link onClick={scrollingHome} style={{color: 'rgb(255, 255, 255)'}}>Главная</Nav.Link>
                  <Nav.Link onClick={scrollingService} style={{color: 'rgb(255, 255, 255)'}}>Услуги</Nav.Link>
                  <Nav.Link onClick={scrollingPrice} style={{color: 'rgb(255, 255, 255)'}}>Прайс</Nav.Link>
                  <Nav.Link onClick={scrollingWork} style={{color: 'rgb(255, 255, 255)'}}>Партнерка</Nav.Link>
                  <Nav.Link onClick={scrollingReviews} style={{color: 'rgb(255, 255, 255)'}}>Отзывы</Nav.Link>
                  <Nav.Link onClick={scrollingAdress} style={{color: 'rgb(255, 255, 255)'}}>Адрес</Nav.Link>
                  <Nav.Link onClick={scrollingContacts} style={{color: 'rgb(255, 255, 255)'}}>Контакты</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default ComponentNavbar;