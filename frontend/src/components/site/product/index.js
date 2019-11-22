import React, { useState, useEffect } from "react";
import Slider from "react-slick";

import { Row, Col, Button, Collapse, Alert } from "reactstrap";
// import StarRatings from "react-star-ratings";
import { Container, Content, Information } from "./style";

import { Products } from "../../index";
import api from "../../../services/api";

import img1 from "../../../assets/Alicat.png";
import img2 from "../../../assets/Logo.png";
import img3 from "../../../assets/Cabo.png";

export default function Responsive({ ...props }) {
  const [img, setImg] = useState(img1);
  const [collapse, setCollapse] = useState(false);
  const [message, setMessage] = useState();
  const [products, setProducts] = useState();
  const [custom, setCustom] = useState([false, false, false]);

  // const [rating, setRating] = useState(5);
  // const [voterating, setVoterating] = useState();
  // function changeRating(newRating, name) {
  //   setVoterating(newRating);
  // }
  // const handleFormSubmit = event => {
  //   event.preventDefault();
  //   alert("VOU ENVIAR AVALIACAO");
  // };

  function toggleCustom(tab) {
    const prevState = custom;
    const state = prevState.map((x, index) => (tab === index ? !x : false));

    setCustom(state);
  }
  const handleSubmit = event => {
    event.preventDefault();
    alert("VOU PARA CARRINHO");
  };
  // Carrousell
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={
          (className, "fa icons-arrow-right5 fa-lg slick-arrow arrow-right")
        }
        onClick={onClick}
      />
    );
  }
  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={
          (className, "fa icons-arrow-left5 fa-lg slick-arrow arrow-left")
        }
        onClick={onClick}
      />
    );
  }
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }
    ]
  };
  function handleMouseOver(img) {
    setImg(img);
  }
  // Fim Carrousell
  useEffect(() => {
    const produtos = async () => {
      await api
        .get("product")
        .then(res => setProducts(res.data))
        .catch(error =>
          setMessage("Ocorreu um erro inesperado, Tente novamente mais tarde!")
        );
    };
    produtos();
  }, []);
  return (
    <Container>
      <Row className="m-0 d-flex justify-content-center">
        <Col xs="12" sm="12" md="8" lg="6">
          <Content>
            <div className="rep_img"> {img && <img src={img} alt="" />} </div>
            <Slider {...settings}>
              <div
                onMouseOver={() => handleMouseOver(img1)}
                className="content_img"
              >
                <img src={img1} alt="" />
              </div>
              <div className="content_img">
                <h3>2</h3>
              </div>
              <div
                onMouseOver={() => handleMouseOver(img2)}
                className="content_img"
              >
                <img src={img2} alt="" />
              </div>
              <div className="content_img">
                <h3>4</h3>
              </div>
              <div
                onMouseOver={() => handleMouseOver(img3)}
                className="content_img"
              >
                <img src={img3} alt="" />
              </div>
              <div className="content_img">
                <h3>6</h3>
              </div>
              <div className="content_img">
                <h3>7</h3>
              </div>
            </Slider>
          </Content>
        </Col>
        <Col md="12" lg="6">
          <Information className=" mt-4">
            <div className="information_header">
              <div className="clearB"></div>
              <ul className="social_feed">
                <li>
                  <i className="fa icons-whatsapp1 fa-lg"></i>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://api.whatsapp.com/send?text=http://localhost:3000/#/product/1"
                  >
                    Compartilhar
                  </a>
                </li>
                <li>
                  <i
                    className="fa icons-heart8 fa-lg font-2xl"
                    style={{ color: "#f86c6b" }}
                  ></i>
                  <span>Favoritos</span>
                </li>
              </ul>
              <div className="clearB"></div>
              <h3>Nome do Produto grande para ver como ficar</h3>
            </div>
            <div className="information_middle">
              <ul>
                <li className="stock">
                  <span>
                    <i className="fa fa-check fa-lg"></i> Disponível:
                  </span>
                  <span>32</span>
                </li>
                {/* <li className="evaluation">
                  <StarRatings
                    rating={rating}
                    starRatedColor="#ff7c3e"
                    starDimension="16px"
                    starSpacing="1px"
                  />
                  <span> 134 avaliações</span>
                </li> */}
                <li className="calendar">
                  <i className="fa fa-calendar"></i>
                  <span> 12 meses de garantia</span>
                </li>
              </ul>
              <div className="clearB"></div>
              <div className="mt-3">
                <span className="font-weight-bold font-lg">Descrição: </span>
                <p>
                  Essa e uma breve descrição do produto que esta a venda. se por
                  acaso existir mais palvras do que 50 caracteres elee fica
                  assim dessse jeito
                </p>
              </div>
            </div>
            <div className="information_footer">
              <div className="price">
                <div className="float-left icon">
                  <i className="fa fa-credit-card"></i>
                </div>
                <div className="float-left">
                  <span className="value_parcel">R$ 3,500.00</span>
                  <div className="descont">
                    6x de <span> R$ 294,00 </span> s/juros no cartão
                  </div>
                  <Collapse isOpen={collapse}>
                    <ul className="parcel">
                      <li>
                        <span>1x</span> sem juros de R$ 3.529,00
                      </li>
                      <li>
                        <span>2x</span> sem juros de R$ 3.529,00
                      </li>
                      <li>
                        <span>3x</span> sem juros de R$ 3.529,00
                      </li>
                      <li>
                        <span>4x</span> sem juros de R$ 3.529,00
                      </li>
                      <li>
                        <span>5x</span> sem juros de R$ 3.529,00
                      </li>
                      <li>
                        <span>6x</span> sem juros de R$ 3.529,00
                      </li>
                    </ul>
                  </Collapse>
                  <div
                    className="view_parcel"
                    onClick={() => setCollapse(!collapse)}
                  >
                    {collapse ? (
                      <i className="fa fa-minus"></i>
                    ) : (
                      <i className="fa fa-plus"></i>
                    )}
                    <strong> Ver parcelamento</strong>
                  </div>
                </div>
              </div>
              <div className="clearB"></div>
              <div className="price">
                <div className="float-left icon">
                  <i className="fa fa-barcode"></i>
                </div>
                <div className="float-left">
                  <span className="value">R$ 3,500.00</span>
                  <div className="descont">
                    A vista com <span>22%</span> de desconto
                  </div>
                </div>
              </div>
              <div className="clearB"></div>
              <Button
                onClick={handleSubmit}
                className="mt-3 font-xl font-weight-bold"
                color="success"
              >
                Comprar
              </Button>
              <Button
                onClick={() => alert("Vou add no card")}
                className="mt-3 font-xl btn_cart"
              >
                <i className="fa icons-add_shopping_cart fa-lg"></i>
              </Button>
            </div>
          </Information>
        </Col>
        <Col xs="12" md="12" lg="8">
          <div
            className="mt-5 mb-5"
            id="exampleAccordion"
            data-children=".item"
          >
            <div className="item">
              <div
                className={custom[0] ? "inf2" : "inf1"}
                onClick={() => toggleCustom(0)}
                aria-expanded={custom[0]}
                aria-controls="exampleAccordion1"
              >
                {custom[0] ? (
                  <i className="fa fa-minus"></i>
                ) : (
                  <i className="fa fa-plus"></i>
                )}
                Descrição
              </div>
              <Collapse
                className="p-3"
                isOpen={custom[0]}
                data-parent="#exampleAccordion"
                id="exampleAccordion1"
              >
                Essa e a descricao passada pelo dono do site com uma brve
                compensao de todas as coais adoiu qwhiedo hqwioehd ioqwhcio
                hajioskncm oaiksncioahsn casc saspiocj paiosjc ioajsiocjiaos
                jcioçashjcoi hpaoishc ioashcopiahjoipcjasiopchjaiohjfiohiohioh
                oiho a shiodhioasdiohaioh Essa e a descricao passada pelo dono
                do site com uma brve compensao de todas as coais adoiu qwhiedo
                hqwioehd ioqwhcio hajioskncm oaiksncioahsn casc saspiocj paiosjc
                ioajsiocjiaos jcioçashjcoi hpaoishc
                ioashcopiahjoipcjasiopchjaiohjfiohiohioh oiho a
                shiodhioasdiohaioh Essa e a descricao passada pelo dono do site
                com uma brve compensao de todas as coais adoiu qwhiedo hqwioehd
                ioqwhcio hajioskncm oaiksncioahsn casc saspiocj paiosjc
                ioajsiocjiaos jcioçashjcoi hpaoishc
                ioashcopiahjoipcjasiopchjaiohjfiohiohioh oiho a
                shiodhioasdiohaioh
              </Collapse>
            </div>
            <div className="item">
              <div
                className={custom[1] ? "inf2" : "inf1"}
                onClick={() => toggleCustom(1)}
                aria-expanded={custom[1]}
                aria-controls="exampleAccordion1"
              >
                {custom[1] ? (
                  <i className="fa fa-minus"></i>
                ) : (
                  <i className="fa fa-plus"></i>
                )}
                Especificações
              </div>
              <Collapse
                className="p-3"
                isOpen={custom[1]}
                data-parent="#exampleAccordion"
                id="exampleAccordion1"
              >
                Essa e a descricao passada pelo dono do site com uma brve
                compensao de todas as coais adoiu qwhiedo hqwioehd ioqwhcio
                hajioskncm oaiksncioahsn casc saspiocj paiosjc ioajsiocjiaos
                jcioçashjcoi hpaoishc ioashcopiahjoipcjasiopchjaiohjfiohiohioh
                oiho a shiodhioasdiohaioh Essa e a descricao passada pelo dono
                do site com uma brve compensao de todas as coais adoiu qwhiedo
                hqwioehd ioqwhcio hajioskncm oaiksncioahsn casc saspiocj paiosjc
                ioajsiocjiaos jcioçashjcoi hpaoishc
                ioashcopiahjoipcjasiopchjaiohjfiohiohioh oiho a
                shiodhioasdiohaioh Essa e a descricao passada pelo dono do site
                com uma brve compensao de todas as coais adoiu qwhiedo hqwioehd
                ioqwhcio hajioskncm oaiksncioahsn casc saspiocj paiosjc
                ioajsiocjiaos jcioçashjcoi hpaoishc
                ioashcopiahjoipcjasiopchjaiohjfiohiohioh oiho a
                shiodhioasdiohaioh
              </Collapse>
            </div>
            {/* <div className="item">
              <div
                className={custom[2] ? "inf2" : "inf1 lastinf1"}
                onClick={() => toggleCustom(2)}
                aria-expanded={custom[2]}
                aria-controls="exampleAccordion1"
              >
                {custom[2] ? (
                  <i className="fa fa-minus"></i>
                ) : (
                  <i className="fa fa-plus"></i>
                )}
                Avaliações
              </div>
              <Collapse
                className="p-3"
                isOpen={custom[2]}
                data-parent="#exampleAccordion"
                id="exampleAccordion1"
              >
                <div>
                  <Form action="" method="post" onSubmit={handleFormSubmit}>
                    <FormGroup row>
                      <Col xs="12" md="9">
                        <Label
                          htmlFor="textarea-input"
                          className="d-flex justify-content-between"
                        >
                          <strong>Deixe um comentário abaixo.</strong>
                          <div className="evaluation_gen">
                            <strong>Avaliação geral: </strong>
                            <StarRatings
                              name="rating"
                              rating={voterating}
                              starRatedColor="#ff7c3e"
                              starHoverColor="#d24400"
                              changeRating={changeRating}
                              starDimension="16px"
                              numberOfStars={5}
                            />
                          </div>
                        </Label>                       
                        <Input
                          type="textarea"
                          name="textarea-input"
                          id="textarea-input"
                          rows="5"
                          placeholder="Comentário..."
                        />
                      </Col>
                    </FormGroup>
                    <Button className="mb-4" color="success">
                      Enviar
                    </Button>
                  </Form>
                  <strong>Últimas Avaliações</strong>
                </div>
                <Card>
                  <CardHeader className="d-flex justify-content-between align-content-center">
                    <div>
                      <i className="fa fa-user fa-lg mr-3"></i>
                      <strong>Cleverson Fernandes</strong>
                    </div>
                    <div>
                      <StarRatings
                        name="rating"
                        rating={rating}
                        starRatedColor="#ff7c3e"
                        starDimension="16px"
                        numberOfStars={5}
                      />
                    </div>
                  </CardHeader>
                  <CardBody>
                    Essa mensagem que o usuario deixa quando faz uma avaliação
                  </CardBody>
                </Card>
              </Collapse>
            </div> */}
          </div>
        </Col>
        <Col xs="12">
          {(message && <Alert color="danger">{message}</Alert>) || (
            <Products
              {...props}
              categoryTitle="Veja também"
              products={products}
            />
          )}
        </Col>
      </Row>
    </Container>
  );
}
