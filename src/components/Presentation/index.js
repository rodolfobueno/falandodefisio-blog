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
        Olá, somos uma dupla de fisioterapeutas, nos encontramos na faculdade e
        dividimos a nossa paixão pelos resultados que a fisioterapia de
        qualidade pode proporcionar. Por isso nos tornar sócias e juntas temos
        uma clínica de fisioterapia, a{" "}
        <a href="http://www.plenifisioterapia.com.br" target="_blank">
          Pleni Saúde
        </a>
        . Um espaço de atendimento focada na qualidade, individualidade e
        respeito com o nosso paciente.
      </p>
      <S.DivImgWrapper>
        <S.Link
          title="Site Pleni Saúde"
          href="http://www.plenifisioterapia.com.br"
          onClick={() => trackClick("Footer Site Pleni")}
        >
          <S.ImgWrapper fluid={logoImage.childImageSharp.fluid} />
        </S.Link>
      </S.DivImgWrapper>
      <p>
        {" "}
        Nesse tempo, percebemos a quantidade de dúvidas e inseguranças que as
        pessoas que estão com dores, lesões ou algumas disfunções enfrentam.
        Informações desencontradas, incertezas, excesso de diagnósticos,
        impessoalidade dos profissionais de saúde, profissionais desatentos e
        desatualizados, atendimentos apressados, as vezes executado por
        estagiários em serviços que não se atentam as necessidades dos clientes.
      </p>{" "}
      <p>
        No dia-a-dia no consultório frequentemente nos deparamos com pacientes
        que têm dores e disfunções persistentes, que já passaram por vários
        serviços e que chegam até nós e ficam surpresos com a eficiência do
        serviço. Não é raro ouvirmos “ah se eu soubesse disso antes”, ou “não
        sabia que a fisioterapia poderia me ajudar com isso”. pois muitas vezes,
        as pessoas não tem muitas informações sobre seus problemas e nem a que
        serviço procurar.
      </p>{" "}
      <p>
        Infelizmente, isso é uma realidade! Muita gente, até mesmo outros
        profissionais da saúde, ainda não sabem os benefícios e abrangência que
        um serviço de fisioterapia especializado pode te proporcionar.
      </p>
      <p>
        {" "}
        Queremos ajudar! Nesse blog vamos compartilhar nosso conhecimento e
        experiência, para dar a você informações de qualidade e o conhecimento!
        Nosso objetivo é informar e promover a fisioterapia de resultados! Vamos
        lá?!
      </p>
    </S.PresentationWrapper>
  )
}

export default Presentation
