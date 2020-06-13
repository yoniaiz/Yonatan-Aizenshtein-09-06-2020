import React from "react";
//styled components
import { ThemeContext } from "styled-components";
//components
import Card from "./Card";
import PrevAndNext from "./PrevAndNext";

export default ({ favorites }) => {
  const [notDisplayedCards, setNotDisplayedCards] = React.useState([]);
  const [pages, setPages] = React.useState([]); // setting paging to display all cards
  const [currentPage, setCurrentPage] = React.useState(0); // current card display

  const { width } = React.useContext(ThemeContext);

  React.useEffect(() => {
    setNotDisplayedCards([]);

    let cards = Object.keys(favorites).map((address, index) => {
      if (
        (width < 375 && index > 0) || //display on small mobile
        (width >= 375 && width < 768 && index > 1) || //display on large mobile
        (width >= 768 && width < 1440 && index > 3) || //display on tablet
        (width >= 1440 && index > 7) // //display on computer
      ) {
        notDisplayedCards.push(<Card address={favorites[address]} />);
        setNotDisplayedCards([...notDisplayedCards]);

        return null;
      }

      return <Card address={favorites[address]} />;
    });

    // remove all null items from array
    cards = cards.filter(Boolean);
    
    // create paging
    setPages([cards]);
  }, [width, favorites]);

  return (
    <>
      <div className="weather-card-container">{pages[currentPage]}</div>
      {(notDisplayedCards.length || pages.length > 1) && (
        <PrevAndNext
          notDisplayedCards={notDisplayedCards}
          setNotDisplayedCards={setNotDisplayedCards}
          pages={pages}
          setPages={setPages}
          setCurrentPage={setCurrentPage}
          width={width}
          currentPage={currentPage}
        />
      )}
    </>
  );
};
