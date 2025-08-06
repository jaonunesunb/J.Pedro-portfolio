import { Text } from "@/styles/Text"; // Se você estiver usando o componente Text personalizado
import Slider from "react-slick";
// Importando os estilos do slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div style={{ maxWidth: "100%", minHeight: "300px" }}>
      {" "}
      {/* Garantindo altura para o carrossel */}
      <Slider {...settings}>
        <div>
          <Text as="h2" type="heading2" color="grey1">
            Formação Acadêmica
          </Text>
          <p>
            Mestrado em Ciência da Computação - Universidade Federal de
            Uberlândia (UFU)
          </p>
          <p>Bacharelado em Biblioteconomia - Universidade de Brasília (UnB)</p>
          <p>Certificação em Data Science - Coursera</p>
        </div>
        <div>
          <Text as="h2" type="heading2" color="grey1">
            Experiência Profissional
          </Text>
          <p>
            Pesquisador no Instituto Brasileiro de Ciência e Tecnologia (IBICT)
          </p>
          <p>Desenvolvedor Full-stack (Flask, React, OWL Ontologies)</p>
          <p>
            Palestrante no ONTOBRAS 2024 sobre Ontologias e Interfaces
            Adaptativas
          </p>
        </div>
        <div>
          <Text as="h2" type="heading2" color="grey1">
            Projetos Relevantes
          </Text>
          <p>
            Smart Library Assistant - Sistema de Recomendação de Livros baseado
            em Ontologias
          </p>
          <p>
            Forms Sesai - Sistema de cadastro de eventos acadêmicos baseado em
            ontologia OWL
          </p>
          <p>
            Repositório GitHub -{" "}
            <a href="https://github.com/seu_usuario">GitHub</a>
          </p>
        </div>
        <div>
          <Text as="h2" type="heading2" color="grey1">
            Habilidades e Ferramentas
          </Text>
          <p>Flask, React, Node.js</p>
          <p>Python, R, SQL, NoSQL</p>
          <p>Ontologias OWL, Semantic Web</p>
          <p>Machine Learning, Deep Learning</p>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
