import React, { Component } from 'react';

import styles from './Proyectos.module.css';

import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';

import marketX from '../../utils/marketX.png';
import Foods from '../../utils/Foods.png';
import rickandmorty from '../../utils/rickandmorty.png';
import portafolioo from '../../utils/portafolioTest.png'

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';


const items = [
  {
    src: marketX,
    link: 'https://marketx-doploy.vercel.app/',
    githubLink: 'https://github.com/Gabriel20Arr/marketX'
  },
  {
    src: Foods,
    link: 'https://deploy-food-sage.vercel.app/',
    githubLink: 'https://github.com/Gabriel20Arr/Deploy-Food'
  },
  {
    src: rickandmorty,
    link: 'https://d2x3xhvgiqkx42.cloudfront.net/12345678-1234-1234-1234-1234567890ab/2016/12/22/ae36c0d0-52ea-4a4a-a691-bec9b2458f5b.png',
    githubLink: 'https://github.com/Gabriel20Arr/RickAndMorty-Integrador'
  },
  {
    src: portafolioo,
    link: 'https://d2x3xhvgiqkx42.cloudfront.net/12345678-1234-1234-1234-1234567890ab/2016/12/22/ae36c0d0-52ea-4a4a-a691-bec9b2458f5b.png',
    githubLink: 'https://github.com/Gabriel20Arr/Portafolio'
  },
];

class Proyectos extends Component {
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
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  handleClick(webLink, githubLink) {
    Swal.fire({
      title: '',
      text: 'Ir a:',
      icon: 'info',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Web',
      confirmButtonColor: '#1A1E23',
      denyButtonText: 'GitHub',
      denyButtonColor: '#1A1E23',
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#db0c0c'
    }).then((result) => {
      if (result.isConfirmed) {
        window.open(webLink, '_blank');
      } else if (result.isDenied) {
        window.open(githubLink, '_blank');
      }
    });
  }

    //... (código del constructor y funciones)

  render() {
    const { activeIndex } = this.state;
    const totalItems = items.length;

    const slides = items.map((item, index) => {
      const prevIndex = (index - 1 + totalItems) % totalItems;
      const nextIndex = (index + 1) % totalItems;

      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={index}
        >
          <div className={styles.carouselSlide}>
            <div className={styles.prevImg}>
              <img src={items[prevIndex].src} alt={items[prevIndex].altText} className={styles.prevImgItem} />
            </div>

            <div onClick={() => this.handleClick(item.link, item.githubLink)}>
              <img src={item.src} alt={item.altText} className={styles.imgs} />
              <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
            </div>

            <div className={styles.nextImg}>
              <img src={items[nextIndex].src} alt={items[nextIndex].altText} className={styles.nextImgItem} />
            </div>
          </div>
        </CarouselItem>
      );
    });

    return (
      <div id='proyectos' className={styles.ContenedorProyectos}>
        <h1 className={styles.NameProyct}>
          <div className={styles.NameProyct2}> Proyectos </div>
        </h1> 
        
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText=" " onClickHandler={this.previous} className={styles.btnNYP} />
          <CarouselControl direction="next" directionText=" " onClickHandler={this.next} className={styles.btnNYP2} />
        </Carousel>

      </div>
    );
  }
}


export default Proyectos;
