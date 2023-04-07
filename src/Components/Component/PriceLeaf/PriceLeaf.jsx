import Col from 'react-bootstrap/Col'
import Price from '../Price/Price';
import BtnApplication from '../../UI/BtnApplication/BtnApplication'
import Conteiner from 'react-bootstrap/Container'


function PriceLeaf() {

    return (
        <Conteiner className="container col-xxl-9 px-4 py-1">
            <h2 className="display-6 text-center mb-2">Сделки под ключ</h2>
            <p className="text-center mb-4 lead">Все сделаю сама</p>
            <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
            <Col>
                <Price name='Покупка первичного жилья' price='0р.' text1='Сделка под ключ' text2='Только проверенные застройщики'><BtnApplication href='https://wa.me/79174743918/?text=Меня%20интересует%20покупка%20новой%20квартиры'/></Price>
            </Col>
            <Col>
                <Price name='Юридическое сопровождение' price='50тыс.р.' text1='Сделка под ключ' text2='Пятиступенчатая проверка обьекта недвижимости'><BtnApplication href='https://wa.me/79174743918/?text=Меня%20интересует%20юридическое%20сопровождение'/></Price>
            </Col>
            <Col>
                <Price name='Продажа вашей недвижимости' price='от 3%' text1='Сделка под ключ' text2='Полное юридическое сопровождение'><BtnApplication href='https://wa.me/79174743918/?text=Меня%20интересует%20продажа%20моей%20недвижемости'/></Price>
            </Col>
            </div>
            <h2 className="display-6 text-center mb-2" id='consultation'>Консультационные услуги</h2>
            <p className="text-center mb-4 lead">Для тех, кто хочет сделать все сам</p>
            <div className="table-responsive">
            <table className="table text-center">
                <thead>
                    <tr>
                        <th style={{width: '30%'}}></th>
                        <th style={{width: '30%'}}>Консультация Вашей сделки</th>
                        <th style={{width: '30%'}}>Консультация по инвестициям в недвижимость</th>
                    </tr>
                    <tr>
                        <th style={{width: '30%'}}></th>
                        <th style={{width: '30%'}}>990р.</th>
                        <th style={{width: '30%'}}>2990р.</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row" className="text-start">Стратегия действий</th>
                            <td><svg className="bi" width="30" height="30">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-check" viewBox="0 0 16 16"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/></svg>
                                    
                                    </svg>
                                </td>
                            <td><svg className="bi" width="30" height="30"><use href="#check"></use><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-check" viewBox="0 0 16 16"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/></svg></svg></td>
                    </tr>
                    <tr>
                        <th scope="row" className="text-start">Налоговая база</th>
                        <td><svg className="bi" width="30" height="30"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-check" viewBox="0 0 16 16"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/></svg><use href="#check"></use></svg></td>
                        <td><svg className="bi" width="30" height="30"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-check" viewBox="0 0 16 16"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/></svg><use href="#check"></use></svg></td>
                    </tr>
                </tbody>

                <tbody>
                    <tr>
                        <th scope="row" className="text-start">Пакет документов</th>
                        <td><svg className="bi" width="30" height="30"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-check" viewBox="0 0 16 16"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/></svg><use href="#check"></use></svg></td>
                        <td><svg className="bi" width="30" height="30"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-check" viewBox="0 0 16 16"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/></svg><use href="#check"></use></svg></td>
                    </tr>
                    <tr>
                        <th scope="row" className="text-start">Юридические аспекты</th>
                        <td><svg className="bi" width="30" height="30"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-check" viewBox="0 0 16 16"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/></svg><use href="#check"></use></svg></td>
                        <td><svg className="bi" width="30" height="30"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-check" viewBox="0 0 16 16"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/></svg><use href="#check"></use></svg></td>
                    </tr>
                    <tr>
                        <th scope="row" className="text-start">Консультация по инвестициям в недвижимость</th>
                        <td><svg className="bi" width="30" height="30"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-check" viewBox="0 0 16 16"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/></svg><use href="#check"></use></svg></td>
                        <td><svg className="bi" width="30" height="30"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-check" viewBox="0 0 16 16"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/></svg><use href="#check"></use></svg></td>
                    </tr>
                    <tr>
                        <th scope="row" className="text-start">Выявление инвестиционного ресурса</th>
                        <td></td>
                        <td><svg className="bi" width="30" height="30"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-check" viewBox="0 0 16 16"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/></svg><use href="#check"></use></svg></td>
                    </tr>
                    <tr>
                        <th scope="row" className="text-start">Анализ комплексов на инвестицинную привлекательность в моменте и перспективе</th>
                        <td></td>
                        <td><svg className="bi" width="30" height="30"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-check" viewBox="0 0 16 16"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/></svg><use href="#check"></use></svg></td>
                    </tr>
                    <tr>
                        <th scope="row" className="text-start">Просчёт необходимости/эффективности ипотечного плеча</th>
                        <td></td>
                        <td><svg className="bi" width="30" height="30"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-check" viewBox="0 0 16 16"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/></svg><use href="#check"></use></svg></td>
                    </tr>
                    <tr>
                        <th scope="row" className="text-start">Подбор налучшей ипотечной программы и процентной ставки с учётом Вашего запроса и потребности</th>
                        <td></td>
                        <td><svg className="bi" width="30" height="30"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-check" viewBox="0 0 16 16"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/></svg><use href="#check"></use></svg></td>
                    </tr>
                </tbody>
        </table>
        </div>
    </Conteiner>
    );
}
  
export default PriceLeaf;