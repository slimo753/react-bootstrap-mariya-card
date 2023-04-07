import BtnApplication from '../../UI/BtnApplication/BtnApplication'
import './Referal.css'

function Referal() {

    return (

        <div className="container py-4">
            <div className="row align-items-md-stretch">
                <div className="col-md-6">
                    <div className="h-100 p-5 text-white bg-dark rounded-3 referal" id='referal'>
                    <h2>Плачу за нового клиента</h2>
                    <p>Рекомендуйте меня как риелтора и получайте от 5000р. до 10000р. по результату сделки!</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="h-100 p-5 rounded-3 bg-light">
                        <h2>Реферальная программа</h2>
                        <ul>
                            <li className="lead">Я помогла приобрести/продать недвижимость и Вам всё понравилось?</li>
                            <li className="lead">Тогда смело рекомендуйте меня как риелтора своим друзьям/знакомым!</li>
                            <li className="lead">И при доведении их до результата получайте в день  сделки вознаграждение от 5000р. до 10000р.</li>
                        </ul>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <BtnApplication href='https://wa.me/79174743918/?text=Меня%20интересует%20реферальная%20программа'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       

    )
}

export default Referal;