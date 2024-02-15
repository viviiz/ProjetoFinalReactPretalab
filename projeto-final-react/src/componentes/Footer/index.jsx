import styles from "./footer.module.css"

const Footer = () => {
    return ( <p className={styles.footer}> 
        <footer className={styles.footer}> 

            <ul className={styles.footer}>
                <li><i className="fa-brands fa-linkedin"></i><a href="https://www.linkedin.com/in/vitorianevess/" target="_blank">LinkedIn</a></li>
                <li><i className="fa-brands fa-square-github"></i><a href="https://github.com/viviiz" target="_blank">GitHub</a></li>
                <li><i className="fa-brands fa-square-instagram"></i><a href="https://www.instagram.com/vitooria__/" target="_blank">instagram</a></li>     
            </ul>   
            <p>Criado por Vitória Neves</p>
        </footer> </p>)
    
}

export default Footer;