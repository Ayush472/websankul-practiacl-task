import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "./cardList.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoHomeSharp } from "react-icons/io5";
import foodLogo from "../../assets/images/food.svg";
import demo from "../../assets/images/deom image.webp";
import house from "../../assets/images/sample-house.svg";
import share from "../../assets/images/share.svg";
import emptyHeart from "../../assets/images/empty-heart.svg";
import location from "../../assets/images/location-pin.svg";
import { Col } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addCard, removeCard } from "../../Redux/savedCardSlice";
import fillHeart from "../../assets/images/filled-heart.svg";
const CardList = ({ itemData }) => {
  const dispatch = useDispatch();
  const cardData = useSelector((state) => state.cardData.cards);
  const isItemAdded = (item) => {
    return cardData.some((card) => card.id === item.id);
  };
  const handleSaveCard = (item) => {
    if (isItemAdded(item)) {
      dispatch(removeCard(itemData));
    } else {
      dispatch(addCard(itemData));
    }
  };
  return (
    <Col
      xs={24}
      sm={24}
      md={12}
      lg={8}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "15px",
      }}
    >
      <div className="main-card-container">
        <div className="image-conatiner">
          <div className="food-container">
            <img src={foodLogo} alt="food" />
            <div>Food Available</div>
          </div>
          <div className="card-image">
            <div className="card-image">
              <Swiper
                navigation={true}
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination]}
                className="mySwiper"
              >
                {itemData?.images?.map((imageData, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={import.meta.env.VITE_IMAGE_URL + imageData}
                      alt={imageData}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="genderType">
            <img src={house} alt="house" />
            <div>For {itemData?.availableFor?.join(", ")}</div>
          </div>
        </div>
        <div className="content">
          <div className="MainHeading">
            <div>{itemData?.company?.name}</div>
            <div>
              <img
                src={isItemAdded(itemData) ? fillHeart : emptyHeart}
                alt="Heart"
                width={30}
                onClick={(e) => {
                  handleSaveCard(itemData);
                }}
              />
              <img src={share} alt="share" />
            </div>
          </div>
          <div className="loaction">
            <img src={location} alt="location" />
            <div>
              {" "}
              {itemData?.address?.area}, {itemData?.address?.city?.name}
            </div>
          </div>
          <div className="price">
            ₹ {itemData?.displayPrice?.fixedPrice} Onward
          </div>
        </div>
      </div>
    </Col>
  );
};

export default CardList;
