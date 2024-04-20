import React from "react";
import { useSelector } from "react-redux";
import CardList from "../components/cardList/CardList";
import { Menu, Row } from "antd";
import fillHeart from "../assets/images/filled-heart.svg";
const SavedCards = () => {
  const cardData = useSelector((state) => state.cardData.cards);
  const items = [
    {
      label: "My Activity",
      key: "activity",
    },
  ];

  return (
    <>
      <Menu selectedKeys={["activity"]} mode="horizontal" items={items} />
      <div
        style={{
          border: "1px solid #f3744b",
          borderRadius: "20px",
          padding: "10px 0 ",
          width: "150px",
          marginTop: "10px",
          background: "#fdeeea",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <img src={fillHeart} alt="fillHeart" />
          <div style={{ color: "black" }}>{cardData && cardData?.length}</div>
        </div>
        <div style={{ color: "#f3744b", textAlign: "center" }}>
          Saved Property
        </div>
      </div>
      <Row style={{ marginTop: "1rem" }}>
        {cardData &&
          cardData?.map((item, index) => (
            <React.Fragment key={index}>
              <CardList key={index} itemData={item} />
            </React.Fragment>
          ))}
      </Row>
    </>
  );
};

export default SavedCards;
