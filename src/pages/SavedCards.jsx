import React from "react";
import { useSelector } from "react-redux";
import CardList from "../components/cardList/CardList";
import { Row } from "antd";

const SavedCards = () => {
  const cardData = useSelector((state) => state.cardData.cards);
  console.log(cardData, "sfksalkdfjklsadfj");
  return (
    <>
      <Row>
        {cardData &&
          cardData.map((item, index) => (
            <React.Fragment key={index}>
              <CardList key={index} itemData={item} />
            </React.Fragment>
          ))}
      </Row>
    </>
  );
};

export default SavedCards;
