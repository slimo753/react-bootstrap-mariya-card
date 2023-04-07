import { Carousel } from 'react-bootstrap'
import ComponentSlide from '../ComponentSlide/ComponentSlider'
import 'bootstrap/dist/css/bootstrap.min.css'
import img1 from '../../Img/face1.png'
import img2 from '../../Img/face2.png'
import img3 from '../../Img/face3.png'

function ComponentSlider(props) {

    return(

        <Carousel variant="dark" id={props.id}>
            <Carousel.Item>
                <ComponentSlide name='Алена Водеева' href='https://vk.com/id705163557' text='Красивый отзыва где написано много много чего хорошего Очень красивый отзыв где много много текста и хорошего прихорошего описания' img={img1}></ComponentSlide>
            </Carousel.Item>
            <Carousel.Item>
                <ComponentSlide name='Сергей Яценко' href='https://vk.com/id705163557' text='Красивый отзыва где написано много много чего хорошего Очень красивый отзыв где много много текста и хорошего прихорошего описания' img={img2}></ComponentSlide>          
            </Carousel.Item>
            <Carousel.Item>
                <ComponentSlide name='Виктор Ярохин' href='https://vk.com/id705163557' text='Красивый отзыва где написано много много чего хорошего Очень красивый отзыв где много много текста и хорошего прихорошего описания' img={img3}></ComponentSlide> 
            </Carousel.Item>
        </Carousel>
    )
}

export default ComponentSlider