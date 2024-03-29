import React, { useState } from "react";
import { HomeContext, useContext } from "../../context/Context";
import { Icon } from "../../Icons/Icon";
import ColorButton from "./ColorButton";
import ImageZoom from "./ImageZoom";

const images = [
  {
    id: 0,
    photo: "product1.jpg",
  },
  {
    id: 1,
    photo: "product2.jpg",
  },
  {
    id: 2,
    photo: "product3.jpg",
  },
  {
    id: 3,
    photo: "product4.jpg",
  },
];

const items = [
  {
    id: 1,
    name: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas",
  },
  {
    id: 2,
    name: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium Hay - About A Lounge Chair AAL 93",
    priceTwo: "$100",
    image: "popularItems/img2.png",
    buy: "BUY NOW",
  },
];

const ProductDetail = () => {
  const { increment, setIncrement } = useContext(HomeContext);
  const [selectedImg, setSelectedImg] = useState(images[0].photo);
  const [incrementButton, setIncrementButton] = useState(0);
  const [readMore, setReadMore] = useState(1);
  const slice = items.slice(0, readMore);

  const addToCart = () => {
    setIncrement(increment + 1);
  };

  const increase = () => {
    setIncrementButton(incrementButton + 1);
  };
  const decrease = () => {
    setIncrementButton(incrementButton - 1);
  };

  const loadMoreClick = () => {
    setReadMore(readMore + readMore);
  };

  return (
    <div className="flex md:flex-row flex-col w-full">
      <div className="basis-1/2  relative">
        <div className="absolute top-5 md:left-10 left-5">
          <ImageZoom selectedImg={selectedImg} />
        </div>
        <img
          style={{ width: "100%", height: "auto" }}
          src={selectedImg}
          alt=""
        />
      </div>
      <div className="basis-1/2 flex px-5  pt-6 md:pt-0">
        <div className="basis-1/6">
          <div className="grid grid-rows-4 grid-flow-col gap-4">
            {images.map((img) => {
              return (
                <div
                  className={`w-20 h-20 cursor-pointer ${
                    selectedImg === img.photo
                      ? "border-2 border-[#84bc22]"
                      : "border-2 border-[#a2a09e]"
                  }`}
                  key={img.id}
                >
                  <img
                    onClick={() => {
                      setSelectedImg(img.photo);
                    }}
                    src={img.photo}
                    alt=""
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="basis-auto md:pl-20 pt-3 pl-5">
          <p className="text-[#45413e] text-5xl font-bold">$299.99</p>

          <ColorButton />

          <div className="flex pt-5">
            <div className="flex rounded-full border-2 md:px-5 px-3 py-1 md:pb-2 justify-center items-center border-[#e8e2d6]">
              <span
                onClick={() => {
                  decrease();
                }}
                className="text-2xl text-[#999999] py-0 px-1 md:px-2  cursor-pointer font-semibold"
              >
                -
              </span>
              <span className="md:px-4  md:text-2xl py-0 px-1  text-[#45413e]">
                {incrementButton}
              </span>
              <span
                onClick={() => {
                  increase();
                }}
                className="md:px-2 md:text-2xl py-0 px-1 text-[#999999] cursor-pointer font-semibold"
              >
                +
              </span>
            </div>
            <div className="flex md:px-5 ml-3 md:ml-0">
              <button
                onClick={addToCart}
                className="border-2 text-sm md:text-lg border-[#84bc22] text-white hover:bg-white hover:text-[#84bc22] transition-all duration-500 ease-in-out font-normal bg-[#84bc22] px-2 md:px-4 py-1 rounded-full  "
              >
                ADD TO CART
              </button>
            </div>
          </div>
          <div className="flex md:pt-14 md:pr-20 flex-col pt-5">
            {slice.map((more) => {
              return <p className="text-[#45413e] text-base">{more.name}</p>;
            })}
            <p
              onClick={() => loadMoreClick()}
              className="text-[#84bc22] py-5 cursor-pointer"
            >
              Read more
            </p>
          </div>
          <div className="flex pt-7">
            <span className="text-[#b2b2b2] text-sm">Share</span>
            <a
              href="https://www.facebook.com/"
              className="fill-[#b2b2b2] text-sm px-7"
              target="_blank"
            >
              <Icon name="facebook" size={24} />
            </a>

            <a
              className="fill-[#b2b2b2] text-sm"
              target="_blank"
              href="https://www.google.com/intl/tr/gmail/about/"
            >
              <Icon name="googlePlus" size={24} />
            </a>
            <a
              className="fill-[#b2b2b2] text-sm px-7"
              target="_blank"
              href="https://twitter.com/"
            >
              <Icon name="twitter" size={24} />
            </a>
            <a
              className="fill-[#b2b2b2] text-sm"
              href="https://tr.pinterest.com/"
              target="_blank"
            >
              <Icon name="pinterest" size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
