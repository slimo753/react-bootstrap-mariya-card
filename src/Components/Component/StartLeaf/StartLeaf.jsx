import BtnApplication from '../../UI/BtnApplication/BtnApplication'
import BtnService from '../../UI/BtnService/BtnService'
import './StartLeaf.css'

function StartLeaf() {

    return (

        <div className="d-flex min-vh-100 text-center text-white video" id='home'>
            <div className="cover-container d-flex w-100 min-vh-100 p-3 mx-auto flex-column" style={{zIndex:'3'}}>
                <header className="mb-auto">
                    <div>
                        <h3 className="float-md-start mb-0">Мария Халилова</h3>
                        <nav className="nav nav-masthead justify-content-center float-md-end">
                            <a className="nav-link" href='#home' style={{color: 'rgb(255, 255, 255)'}}>Главная</a>
                            <a className="nav-link" href='#service' style={{color: 'rgb(255, 255, 255)'}}>Услуги</a>
                            <a className="nav-link" href='#price' style={{color: 'rgb(255, 255, 255)'}}>Стоимость</a>
                            <a className="nav-link" href='#consultation' style={{color: 'rgb(255, 255, 255)'}}>Консультация</a>
                            <a className="nav-link" href='#referal' style={{color: 'rgb(255, 255, 255)'}}>Партнерка</a>
                            <a className="nav-link" href='#reviews' style={{color: 'rgb(255, 255, 255)'}}>Отзывы</a>
                            <a className="nav-link" href='#adress' style={{color: 'rgb(255, 255, 255)'}}>Адрес</a>
                            <a className="nav-link" href='#social' style={{color: 'rgb(255, 255, 255)'}}>Контакты</a>
                        </nav>
                    </div>
                </header>

                <main className="px-3 mb-auto">
                    <h1>Мария Халилова</h1>
                    <p className="lead">Сделки с недвижимостью - это очень важный этап в жизни каждого человека,
                                                        где можно столкнуться со многими рисками и нюансами, неожиданно отражающимися на процессе. 
                                                        Поэтому если вы хотите испытать только радость и удовольствие при продаже и от приобретения недвидимости, стоит доверить дело специалисту</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <BtnApplication href='https://wa.me/79174743918'/><BtnService/>
                    </div>
                </main>
            </div>
        </div>
  

    );
}
  
export default StartLeaf;