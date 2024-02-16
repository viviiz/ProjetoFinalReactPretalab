import styles from './inicio.module.css'
import homeImg from '../../assets/homeImg.svg'
import formacao from '../../assets/formacao.svg'
const Inicio = () => {
  return (
    <>
        <div className={styles.header}>
          <h1>
              Projeto Final Pretalab 2024!
          </h1>
          <img src={homeImg} />
        </div>
        <div className={styles.subtitulo}>
          <p>
          Apresentamos o site do projeto final do módulo de React do Ciclo Formativo Básico da Pretalab.
          Este projeto foi desenvolvido em React e aborda uma ampla gama de tópicos discutidos durante as aulas, 
          incluindo componentes, props, estados, listas e keys, hooks, manipulação de eventos (onChange e onClick),
          Context API em React, React Router DOM, manipulação de imagens e modularização de CSS. Este projeto demonstra
          a aplicação prática e aprofundada dos conceitos essenciais do React, representando um marco significativo no 
          aprendizado dos participantes do ciclo formativo.

          </p>
        </div>
        <div className={styles.header}>
          <h1>
              Sobre a Formação
              
          </h1>
          <img src={formacao} />
        </div>
        <div className={styles.subtitulo}>
          <p>
          Participar do ciclo formativo em tecnologia da Pretalab é uma experiência enriquecedora
           e transformadora. Ao longo do programa, tive a oportunidade de mergulhar em um universo de aprendizado dinâmico e
            colaborativo, explorando desde os conceitos fundamentais até as mais avançadas tecnologias. Além do conhecimento
             técnico adquirido, o ciclo formativo proporcionou um ambiente acolhedor e inclusivo, repleto de mentores dedicados
              e colegas inspiradores, que me incentivaram a superar desafios e a expandir meus horizontes. Através da Pretalab,
               não apenas desenvolvi habilidades valiosas, mas também me tornei parte de uma comunidade vibrante e solidária,
           pronta para continuar crescendo e impactando positivamente o mundo da tecnologia.

          </p>
        </div>
     </>
  )
}
export default Inicio;