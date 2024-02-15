import styles  from "./sobre.module.css";
import fotoPerfil from "../../assets/vitoooria.jpeg"
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
            <h1 className={styles.nomeCompleto}>Vitória Neves</h1>
            <h2 className={styles.profissao}>Estudante em transição de carreira e futura deva</h2>
            <p className={styles.sobreMim}>
               Oiê, tudo bem com você? Eu me chamo Vitória e tenho 29 anos de idade, estou em transição e construção de carreira para a TI. Desejo me tornar uma especialista na área e poder ajudar as pessoas que queiram aprender e entrar na TI assim como a Pretalab e minhas colegas me ajudaram. 
          </p>
      </div>
      </>
  )
}
export default Sobre;