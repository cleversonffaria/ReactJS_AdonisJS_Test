import React, { Component } from "react";
import {
  Card,
  Carousel,
  CarouselCaption,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
  Col,
  Row,
  Container
} from "reactstrap";
import { Body } from "./style";
const items = [
  {
    src:
      "https://images.tcdn.com.br/img/img_prod/485645/1566503961_full1-smnetseg.jpg",
    altText: "Alt da imagem",
    caption: "Titulo da imagem"
  },
  {
    src:
      "https://www.riobranco.org.br/wp-content/uploads/2017/10/banner-site-01.png",
    altText: "Slide 2",
    caption: "Alicate universal"
  },
  {
    src:
      "https://tigs.com.br/wp-content/uploads/2017/06/banner-site-TIGS-2.png",
    altText: "Slide 3",
    caption: "Modem Wireless"
  }
];

class Carousels extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }
  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;
    const slides2 = items.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img className="w-100" src={item.src} alt={item.altText} />
          <CarouselCaption
            captionText={item.caption}
            captionHeader={item.caption}
          />
        </CarouselItem>
      );
    });

    return (
      <Body className="animated fadeIn">
        <Container fluid>
          <Row>
            <Col xs="12" className="carousels">
              <Card className="slide">
                <Carousel
                  activeIndex={activeIndex}
                  next={this.next}
                  previous={this.previous}
                >
                  <CarouselIndicators
                    items={items}
                    activeIndex={activeIndex}
                    onClickHandler={this.goToIndex}
                  />
                  {slides2}
                  <CarouselControl
                    direction="prev"
                    directionText="Previous"
                    onClickHandler={this.previous}
                  />
                  <CarouselControl
                    direction="next"
                    directionText="Next"
                    onClickHandler={this.next}
                  />
                </Carousel>
              </Card>
            </Col>
          </Row>
        </Container>
      </Body>
    );
  }
}

export default Carousels;
