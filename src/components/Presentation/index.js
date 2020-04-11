import React from "react"
import ReactGA from "react-ga"
import { useStaticQuery, graphql } from "gatsby"

import Social from "../Social"

import * as S from "./styled"

const Presentation = () => {
  const trackClick = item => {
    ReactGA.event({
      category: "Social",
      action: "click",
      label: `Social - Presentation - ${item}`,
    })
  }
  const { logoImage, karolImage, kellyImage } = useStaticQuery(graphql`
    query {
      logoImage: file(relativePath: { eq: "pleni_vertical.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      karolImage: file(relativePath: { eq: "karol.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      kellyImage: file(relativePath: { eq: "kelly.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <S.PresentationWrapper>
      <S.Title>Olá, sejam bem vindos!</S.Title>
      <p>
        Somos uma dupla de fisioterapeutas, Karol e Kelly! Nos encontramos na
        faculdade e dividimos a nossa paixão pelos resultados que a fisioterapia
        de qualidade pode proporcionar. Por isso nos tornamos sócias e juntas
        montamos uma clínica de fisioterapia, a{" "}
        <S.Link
          title="Site Pleni Fisioterapia"
          href="http://www.plenifisioterapia.com.br"
          onClick={() => trackClick("Link Site Pleni")}
        >
          Pleni Saúde
        </S.Link>
        . Um espaço de atendimento focado na qualidade, individualidade e
        respeito com o nosso paciente.
      </p>
      <p>
        Nesse tempo, percebemos a quantidade de dúvidas e inseguranças que as
        pessoas que estão com dores, lesões ou algumas disfunções enfrentam.
        Informações desencontradas, incertezas, excesso de diagnósticos,
        impessoalidade dos profissionais de saúde, profissionais desatentos e
        desatualizados, atendimentos apressados, muitas vezes executado por
        estagiários em serviços que não se atentam as necessidades dos clientes.
      </p>
      <p>
        No dia-a-dia no consultório frequentemente nos deparamos com pacientes
        que já passaram por vários serviços e não é raro ouvirmos “ah se eu
        soubesse disso antes”, ou “não sabia que a fisioterapia poderia me
        ajudar com isso”!
      </p>
      <p>
        Infelizmente, isso é uma realidade e queremos ajudar! Temos como
        responsabilidade a promoção a saúde, por isso nesse blog vamos
        compartilhar nosso conhecimento e experiência para ajudar você a
        entender as necessidades do seu corpo e promover a fisioterapia de
        qualidade!
      </p>
      <p>Agora vamos falar um pouco sobre nós =]</p>
      <S.Title>Karollyne Borges Bomfim</S.Title>
      <S.Link
        title="Instagram Karol"
        href="http://www.instagram.com/karol.bomfim"
        onClick={() => trackClick("Instagram Imagem Karol")}
      >
        <S.ImgWrapper fluid={karolImage.childImageSharp.fluid} />
      </S.Link>
      <Social
        title="Instagram Karol"
        link="http://www.instagram.com/karol.bomfim"
        onClick={() => trackClick("Instagram Icone Karol")}
      />
      <S.DivPerfil>
        <p>
          Como fisioterapeuta com experiência em atendimento clínico de dores e
          disfunções, sou apaixonada em poder ajudar a educar meus pacientes
          sobre a importância de cuidar de si, fornecendo planos de tratamento
          personalizados para estilo de vida e atividade de cada um.
        </p>
        <p>
          Tenho especialidade em fisioterapia ortopédica, esportiva e
          acupuntura. A base do meu atendimento é a terapia manual e um programa
          de exercícios individualizado, projetados para aliviar a dor e
          aprimorar o movimento.
        </p>
        <p>
          Meu amplo arsenal de técnicas me permite abordar um espectro completo
          dos problemas que afetam meus clientes e entregar o que é mais
          importante: resultados!
        </p>
        <p>
          Cuidar, fazer amigos e compartilhar histórias são minhas paixões.
          Dedicada e atenta, estou sempre pronta para atender as dúvidas e
          orientar quem me procura, com uma abordagem positiva e sorriso no
          rosto!
        </p>
      </S.DivPerfil>
      <S.Title>Kelly Cristina</S.Title>
      <S.Link
        title="Instagram Kelly"
        href="http://www.instagram.com/drakellycris"
        onClick={() => trackClick("Instagram Imagem Kelly")}
      >
        <S.ImgWrapper fluid={kellyImage.childImageSharp.fluid} />
      </S.Link>
      <Social
        title="Instagram Kelly"
        link="http://www.instagram.com/drakellycris"
        onClick={() => trackClick("Instagram Icone Kelly")}
      />
      <S.DivPerfil>
        <p>
          Meu forte interesse no corpo humano me inspirou a ajudar as pessoas a
          viver de forma mais livre e saudável.
        </p>
        <p>
          Tenho vasta experiência clínica no tratamento de disfunções sexuais,
          urológicas e treino para aprimoramento sexual (pompoarismo). Pensando
          em democratizar os conhecimentos sobre saúde íntima, criei o método
          Academia da PPK.
        </p>
        <p>
          Meu objetivo é ajudar a compreensão de conceitos complexos sobre o seu
          corpo e, por meio de técnicas e instrumentos adequados, busco
          realinhar a saúde íntima da mulher com a qualidade de vida geral.
        </p>
        <p>
          Orientação, funcionalidade e movimento são os pilares da minha
          abordagem. Acredito ser o caminho para a promoção e recuperação da
          saúde íntima através da fisioterapia uroginecológica. Adoro me
          exercitar, cuidar do meu corpo e estou sempre pronta a ajudar as
          pessoas a encontrar confiança e determinação, através do conhecimento
          e disciplina.
        </p>
      </S.DivPerfil>
      <S.DivImgWrapper>
        <S.Link
          title="Site Pleni Saúde"
          href="http://www.plenifisioterapia.com.br"
          onClick={() => trackClick("Site Pleni")}
        >
          <S.ImgWrapper fluid={logoImage.childImageSharp.fluid} />
        </S.Link>
      </S.DivImgWrapper>
    </S.PresentationWrapper>
  )
}

export default Presentation
