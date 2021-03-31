// @ts-check

import React from 'react';
import cn from 'classnames';
import _ from 'lodash';

// BEGIN (write your solution here)
class Carousel extends React.Component{
  constructor (props) {
    super (props);
    this.state = {
      activeIndex: 0,
      images: this.props.images.map ((img)=> {
        return {image: img, key: _.uniqueId()};
      })
    };
  }
  
  prev = (event) => {
    event.preventDefault();
    let activeIndex = this.state.activeIndex;
    activeIndex--;
    if (activeIndex <0) {
      activeIndex = this.props.images.length-1;
    }
    //console.log(`prev, activeIndex: ${activeIndex}`);
    this.setState ({activeIndex : activeIndex});  
  }
  
  next = (event) => {
    event.preventDefault();
    let activeIndex = this.state.activeIndex;
    activeIndex++;
    if (activeIndex >= this.props.images.length) {
      activeIndex = 0;
    }
    //console.log(`next, activeIndex: ${activeIndex}`);
    this.setState ({activeIndex : activeIndex});
  }
  
  renderImages () {
    return <div className="carousel-inner">
    {
      this.state.images.map ((img, index)=> {
        const cl = cn('carousel-item', {
          'active': index === this.state.activeIndex
        });

        return <div className={cl} key={img.key}>
          <img alt="" className="d-block w-100" src={img.image}/>
        </div>
      })
    }
  </div>
  }
  
  render () {
    return <div id="carousel" className="carousel slide" data-ride="carousel">
    {this.renderImages()}
  <a className="carousel-control-prev" href="#carousel" onClick={this.prev} role="button" data-slide="prev">
    <span className="carousel-control-prev-icon"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carousel" onClick={this.next} role="button" data-slide="next">
    <span className="carousel-control-next-icon"></span>
    <span className="sr-only">Next</span>
  </a>
    </div>;
  }
}

export default Carousel;
// END
