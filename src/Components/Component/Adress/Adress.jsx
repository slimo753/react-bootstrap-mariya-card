import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'
import BtnApplication from '../../UI/BtnApplication/BtnApplication'
import './Adress.css'


function Adress() {


    return (
        <div className="container col-xxl-9 px-4 py-2" id='adress'>
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold lh-1 mb-3">Адрес</h1>
                    <p className="lead">Я нахожусь в «Эксперт Сити»</p>
                    <a href='https://yandex.ru/maps/172/ufa/house/ulitsa_stepana_kuvykina_31/YUwYfw5oS0wPQFtufXtxdnRnbA==/?ll=55.998298%2C54.707848&z=17.14'><p className="lead">г.Уфа, ул. Степана Кувыкина, 31</p></a>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start" key='8'>
                        <BtnApplication href='https://wa.me/79174743918' key='14'/>
                    </div>
                </div>
                <div className="col-12 col-sm-8 col-lg-6">
                    <YMaps>
                    <div>
                        <Map defaultState={{ center: [54.707848, 55.998298], zoom: 17 }} className='conteinerMap'>
                        <Placemark
                            modules={["geoObject.addon.balloon"]}
                            defaultGeometry={[54.707848, 55.998298]}
                            properties={{
                                balloonContentBody:
                                "This is balloon loaded by the Yandex.Maps API module system",
                            }}/>
                        </Map>
                    </div>
                    </YMaps>
                </div>
            </div>
        </div>
    )
}

export default Adress;