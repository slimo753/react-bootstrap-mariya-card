import styles from './ComponentSocial.module.css'

function ComponentSocial(props) {

    let styleButton  = {

        backgroundColor: props.color

    }

    return(
        <div>
            <div className={styles.conteiner}> 
                <a href={props.href}><img src={props.img} alt=" " className={styles.img}/></a>
                <div className={styles.name}>{props.name}</div>
                <div className={styles.title}>{props.title}</div>
                <a href={props.href}><img src={props.qr} alt=" " className={styles.qr}/></a>
                <a href={props.href}><button className={styles.button} style={styleButton}>{props.button}</button></a>
            </div>
        </div>
    )
}

export default ComponentSocial