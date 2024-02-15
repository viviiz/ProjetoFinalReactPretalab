import styles  from "./sobre.module.css";
import fotoPerfil from "../../assets/icone.jpeg"
const Sobre = () => {
    return (
      <>
        <div className={styles.header}>
          <h1>
            Escreva sobre você!!!

          </h1>
          <img src={fotoPerfil} alt="Foto do perfil"/>
          <div>
             
          </div>
        </div>
  
        <div className={styles.containerSobre} >
            <h1 className={styles.nomeCompleto}>Amanda Silva</h1>
            <h2 className={styles.profissao}>Desenvolvedora Front-End</h2>
            <p className={styles.sobreMim}>
                Mussum Ipsum, cacilds
                vidis litro abertis. Suco de cevadiss deixa as pessoas mais interessantis. 
              Paisis, filhis, espiritis santis. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. 
              Nam vulputate dapibus. Detraxit consequat et quo num tendi nada.
          </p>
      </div>
      </>
  )
}
export default Sobre;