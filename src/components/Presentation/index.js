import React from "react"
import ReactGA from "react-ga"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styled"

const Presentation = () => {
  const trackClick = item => {
    ReactGA.event({
      category: "Social",
      action: "click",
      label: `Social - ${item}`,
    })
  }
  const { logoImage } = useStaticQuery(graphql`
    query {
      logoImage: file(relativePath: { eq: "logo_pleni.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 180) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <S.PresentationWrapper>
      <p>
        Olá, somos uma dupla de fisioterapeutas, Karol e Kelly! Nos encontramos
        na faculdade e dividimos a nossa paixão pelos resultados que a
        fisioterapia de qualidade pode proporcionar. Por isso nos tornamos
        sócias e juntas montamos uma clínica de fisioterapia, a{" "}
        <a href="http://www.plenifisioterapia.com.br" target="_blank">
          Pleni Saúde
        </a>
        . Um espaço de atendimento focado na qualidade, individualidade e
        respeito com o nosso paciente.
      </p>
      <p>
        {" "}
        Nesse tempo, percebemos a quantidade de dúvidas e inseguranças que as
        pessoas que estão com dores, lesões ou algumas disfunções enfrentam.
        Informações desencontradas, incertezas, excesso de diagnósticos,
        impessoalidade dos profissionais de saúde, profissionais desatentos e
        desatualizados, atendimentos apressados, muitas vezes executado por
        estagiários em serviços que não se atentam as necessidades dos clientes.
      </p>{" "}
      <p>
        No dia-a-dia no consultório frequentemente nos deparamos com pacientes
        que já passaram por vários serviços e não é raro ouvirmos “ah se eu
        soubesse disso antes”, ou “não sabia que a fisioterapia poderia me
        ajudar com isso”!
      </p>{" "}
      <p>
        Infelizmente, isso é uma realidade e queremos ajudar! Temos como
        responsabilidade a promoção a saúde, por isso nesse blog vamos
        compartilhar nosso conhecimento e experiência e conhecimento, para
        ajudar você a entender as necessidades do seu corpo e promover a
        fisioterapia de qualidade!
      </p>
      {/* <S.DivImgWrapper>
        <S.Link
          title="Site Pleni Saúde"
          href="http://www.plenifisioterapia.com.br"
          onClick={() => trackClick("Footer Site Pleni")}
        >
          <S.ImgWrapper fluid={logoImage.childImageSharp.fluid} />
        </S.Link>
      </S.DivImgWrapper> */}
    </S.PresentationWrapper>
  )
}

export default Presentation
