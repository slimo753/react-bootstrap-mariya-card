import BtnInstagram from "../../UI/BtnInstagram/BtnInstagram";
import styles from './Instagram.module.css'
import Container from 'react-bootstrap/Container';

function Instagram(props) {

    return (
        
        <Container style={{color: 'rgb(240, 240, 240)',}} className={styles.jump} fluid >
            <h1 className="display-5 fw-bold">Следи за Instagram</h1>
            <p className="col-md-8 fs-4 lead">Только самые актуальные и вкусные предложения на рынке недвижимости. Объекты, которые ещё только выгружаются на рекламные площадки, здесь вы можете увидеть первыми</p>
            <p>*Meta признана экстремистcкой организацией в России</p>
            <BtnInstagram/>
        </Container>

    );
}
  
export default Instagram