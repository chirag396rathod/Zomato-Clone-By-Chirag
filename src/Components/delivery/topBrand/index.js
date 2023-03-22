import React from 'react'
import NexArrow from '../../comanComponent/carousel/nexArrow';
import PrevArrow from '../../comanComponent/carousel/prveArrow';
import Slider from 'react-slick';
import TopBrandsItem from '../topBrandsItem';
import './TopBrands.css'

const TopBrands = () => {
  const TopBrandsList = [
    {
      id: "1",
      time: "24 min",
      title: "Domino's Pizza",
      cover: "https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252746.png?output-format=webp",
    },
    {
      id: "2",
      time: "21 min",
      title: "WOW! Momo",
      cover: "https://b.zmtcdn.com/data/brand_creatives/logos/cc214b60b95cba868170d1a8d66bcab3_1629438962.png?output-format=webp",
    },
    {
      id: "3",
      time: "45 min",
      title: "Chowman",
      cover: "https://b.zmtcdn.com/data/brand_creatives/logos/6799a847a4bfaee73f5e14aaba8cef83_1638193272.png?output-format=webp",
    },
    {
      id: "4",
      time: "31 min",
      title: "NIC-Natural Ice Creams",
      cover: "https://b.zmtcdn.com/data/brand_creatives/logos/c014b23f65d4d62dae37d9849f423d77_1629439377.png?output-format=webp",
    },
    {
      id: "5",
      time: "30 min",
      title: "KFC",
      cover: "https://b.zmtcdn.com/data/brand_creatives/logos/560b209a689eefa9feb367b5d5604097_1611382952.png?output-format=webp",
    },
    {
      id: "6",
      time: "27 min",
      title: "Arsalam",
      cover: "https://b.zmtcdn.com/data/brand_creatives/logos/fe5db95ae85292933996d4043f600d3b_1611320738.png?output-format=webp",
    },
    {
      id: "7",
      time: "37 min",
      title: "Aminia",
      cover: "https://b.zmtcdn.com/data/brand_creatives/logos/954418964eb9404a93e4f6a3073e9cb0_1629438610.png?output-format=webp",
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
    <div className="TopBrands max-width">
      <div className='collectionTitle'>Top brands for you</div>
      <div className="topBrandsCover">
        <Slider {...settings}>
            {
              TopBrandsList.map((item) => {
                 return <TopBrandsItem key={item.id} item={item} />
              })
            }
        </Slider>
      </div>
    </div>
  )
}

export default TopBrands