import 'bootstrap/dist/css/bootstrap.min.css';
import HeroesRight from './Components/Component/HeroesRight/HeroesRight'
import HeroesLeft from './Components/Component/HeroesLeft/HeroesLeft';
import BtnApplication from './Components/UI/BtnApplication/BtnApplication';
import BtnService from './Components/UI/BtnService/BtnService';
import BtnPrice from './Components/UI/BtnPrice/BtnPrice';
import mariya from './Components/Img/mariya1.png'
import prime from './Components/Img/prime.png'
import calendar from './Components/Img/calendar1.png'
import doc from './Components/Img/doc1.png'
import banks from './Components/Img/banks.png'
import Instagram from './Components/Component/Instagram/Instagram';
import ComponentSocial from './Components/Component/ComponentSocial/ComponentSocial'
import telegram from './Components/Img/telegram.png'
import telegramQr from './Components/Img/telegram-qr.png'
import whatsapp from './Components/Img/whatsapp.png'
import whatsappQr from'./Components/Img/whatsapp-qr.png'
import './index.css'
import ComponentSlider from './Components/Component/ComponentSlider/ComponentSlider';
import PriceLeaf from './Components/Component/PriceLeaf/PriceLeaf';
import ComponentFooter from './Components/Component/ComponentFooter/ComponentFooter';
import StartLeaf from './Components/Component/StartLeaf/StartLeaf'
import Referal from './Components/Component/Referal/Referal'
import Adress from './Components/Component/Adress/Adress';

function App() {
  return (
    <div>

      <StartLeaf key='0'/>
      <HeroesRight name='Мария Халилова' text='Меня зовут Мария Халилова и я являюсь Агентом по недвижимости компании "Эксперт", с опытом работы в этой сфере более 3х лет' img={mariya} boxshadow='-20px 20px rgb(220, 53, 69)' key='1'>
         {[<BtnApplication href='https://wa.me/79174743918' key='8'/>, <BtnService key='9'/>]}
      </HeroesRight>
      <HeroesLeft name='Приобретение первичной недвижимости' text='Для жизни или инвестиций. Бесплатно для Вас - нам платит застройщик!' img={prime} id='service' key='2'>
         {[<BtnApplication href='https://wa.me/79174743918/?text=Меня%20интересует%20покупка%20новой%20квартиры' key='10'/>, <BtnPrice key='11'/>]}
      </HeroesLeft>
      <div className="container col-xxl-9 px-4 py-2">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-lg-6">
                <h1 className="display-5 fw-bold lh-1 mb-3">Продажа Вашей недвижимости</h1>
                <ul>
                  <li className="lead">Все мероприятия по реализации объекта происходят на безавансовой базе</li>
                  <li className="lead">Я  выгружаю объявление на все  рекламные площадки абсолютно бесплатно</li>
                  <li className="lead">И здесь объект уже одновременно начинает рекламироваться всеми моими коллегами (более 400 риелторов)</li>
                  <li className="lead">Использую внутренние чаты спрос / предложение (включая межрегиональные ценры)</li>
                  <li className="lead">Сотрудничаю с профессиональной медиаслужбой - для качественного контента (фото+видео)</li>
                  <li className="lead">Делаю оценку обьекта и анализ конкурентов</li>
                  <li className="lead">Привожу клиентов с одобреной ипотекой или наличными, никаких просто зрителей</li>
                  <li className="lead">От Вас только получить деньги в день сделки, и только тогда произвести расчёт за выполненную работу</li>
                  <li className="lead">Активно использую социальные сети</li>
                  <li className="lead">При необходимости вешаю банер</li>
                </ul>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                  <BtnApplication href='https://wa.me/79174743918/?text=Меня%20интересует%20продажа%20моей%20недвижемости'/> <BtnPrice/>
                </div>
            </div>
            <div className="col-12 col-sm-8 col-lg-6">
                <img src={calendar} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" loading="lazy" style={{boxShadow: '-20px 20px rgb(220, 53, 69)'}}/>
            </div>
          </div>
      </div> 
      <HeroesLeft name='Юридическое сопровождение' text='Доверяя мне всю бумажную волокиту по документальному процессу Вы избавляете себя от утомительной траты времени в госучреждениях, РОНО, а так же на подготовку договоров. И, самое главное - получаете тщательную проверку документов на всех этапах сделки - от подбора объекта до перехода права собственности' img={doc} boxshadow='20px 20px rgb(220, 53, 69)' key='3'>
         {[<BtnApplication href='https://wa.me/79174743918/?text=Меня%20интересует%20юридическое%20сопровождение' key='12'/>, <BtnPrice key='13'/>]}
      </HeroesLeft>
      <div className="container col-xxl-9 px-4 py-2">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-lg-6">
                <h1 className="display-5 fw-bold lh-1 mb-3">Заявка на ипотеку</h1>
                <ul>
                  <li className="lead">Оформление ипотеки по самой выгодной программе и ставке</li>
                  <li className="lead">Возможность одобрения без ПВ(первоначального взноса)</li>
                </ul>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start" key='8'>
                  <BtnApplication href='https://wa.me/79174743918/?text=Меня%20интересует%20оформление%20ипотеки'/> <BtnPrice/>
                </div>
            </div>
            <div className="col-12 col-sm-8 col-lg-6">
                <img src={banks} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" loading="lazy" />
            </div>
          </div>
      </div> 
      <PriceLeaf/>
      <Referal/>
      <Instagram/>
      {/* <ComponentSlider id='reviews'/> */}
      <Adress/> 
      <div className="container col-xxl-9 px-4 py-1" id='social'>
            <div className="row flex-lg-row-reverse align-items-end g-5 py-5">
              <div className="col-lg-6" key='5'>
                <ComponentSocial href='https://t.me/Queen_of_Aromas' img={telegram} qr={telegramQr} name='Остались вопросы?' title='Отсканируйте QR-код и задайте их напрямую в Telegram' button='Перейти в Telegram' color='rgb(32, 151, 231)'/>
              </div>
              <div className="col-lg-6" key='6'>
                <ComponentSocial href='https://wa.me/79174743918' img={whatsapp} qr={whatsappQr} name='Остались вопросы?' title='Отсканируйте QR-код и задайте их напрямую в Whatsapp' button='Перейти в Whatsapp' color='rgb(76, 149, 71)'/>
              </div>
            </div>
      </div>
      <ComponentFooter/> 
    </div>
  );
}

export default App;
