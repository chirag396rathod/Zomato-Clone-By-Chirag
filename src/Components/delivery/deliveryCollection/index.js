import Slider from 'react-slick';
import React from 'react';
import DeliveryItem from '../deliveryItem';
import NexArrow from '../../comanComponent/carousel/nexArrow';
import PrevArrow from '../../comanComponent/carousel/prveArrow';
import './deliveryCollection.css';

const DeliveryCollection = () => {
  const deliveryCollectionss = [
    {
      id: '1',
      title: 'Pizza',
      cover:
        'https://b.zmtcdn.com/data/pictures/chains/7/20407/c8e3d85b773066868ec333d6f17782cb_o2_featured_v2.jpg',
    },
    {
      id: '2',
      title: 'Momos',
      cover:
        'https://b.zmtcdn.com/data/pictures/chains/0/21060/cc7cfcafbaa312b8e003ab60181246b0_o2_featured_v2.jpg',
    },
    {
      id: '3',
      title: 'Rolls',
      cover:
        'https://b.zmtcdn.com/data/dish_photos/876/66a4685e230697b0e3fc82901015c876.jpg',
    },
    {
      id: '4',
      title: 'Home Style',
      cover:
        'https://b.zmtcdn.com/data/dish_photos/346/d117658047af78d518f51589de3fd346.jpg',
    },
    {
      id: '5',
      title: 'Burger',
      cover:
        'https://b.zmtcdn.com/data/dish_photos/e6b/251f04208ee79ba396b192d87a7abe6b.jpg',
    },
    {
      id: '6',
      title: 'Chicken',
      cover:
        'https://b.zmtcdn.com/data/dish_photos/50c/f0fdf815cf1cfa52bfae48b3bdd4b50c.png',
    },
    {
      id: '7',
      title: 'Noodles',
      cover:
        'https://b.zmtcdn.com/data/dish_photos/85e/ea8d6f9fbabf472a514682c3d702785e.jpg',
    },
    {
      id: '8',
      title: 'Biryani',
      cover:
        'https://b.zmtcdn.com/data/dish_photos/b00/1a3b7be4decd67bbc8950c5fb7e36b00.jpg',
    },
    {
      id: '9',
      title: 'Chaat',
      cover:
        'https://b.zmtcdn.com/data/pictures/5/19470165/31ba7ba148a54ab0915d5d718ee7333b_o2_featured_v2.jpg',
    },
    {
      id: '10',
      title: 'ice cream',
      cover:
        'https://b.zmtcdn.com/data/dish_photos/a56/23a19e65335e17ace7b1c68ce4610a56.jpg',
    },
  ];

  const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NexArrow />,
    prevArrow: <PrevArrow />,
  };
 

  return ( 
    <div className="delivery-collection">
      <div className="max-width">
        <div className="collectionTitle">Inspiration for your first order</div>
        <Slider {...settings}>
           {deliveryCollectionss.map(item => {
             return (
               <DeliveryItem key={item.id} item={item} />
             )
           })}
        </Slider>
      </div>
    </div>
  );
};

export default DeliveryCollection;
