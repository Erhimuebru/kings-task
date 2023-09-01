import React from 'react';
import Carousel from './components/Carousel/Carousel';
import FilterSlider from './components/FilterSlider/FilterSlider';
import items from "./components/Carousel/CarouselSlides"
const App = () => {
 

  return (
    <><div className="app">
      <h1>Image Carousel with Captions</h1>
      <Carousel items={items} />
    </div>
    <div>
<FilterSlider/>
      </div></>
  );
};

export default App;
