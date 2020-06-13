import React from "react";

export default ({
  pages,
  setPages,
  setCurrentPage,
  notDisplayedCards,
  width,
  setNotDisplayedCards,
  currentPage,
}) => {
  const loadMore = () => {
    let toDisplay = 4; // how many pages to load
    let page = [];
    const noDisplay = [...notDisplayedCards];

    if (noDisplay.length === 0) {
      // if all not displayed cards loaded just skip pages and not load more
      return setCurrentPage((prev) => ++prev);
    }

    if (width < 375) toDisplay = 1;
    else if (width >= 375 && width < 768) toDisplay = 2;
    else if (width >= 768 && width < 1440) toDisplay = 4;

    for (let i = 0; i < toDisplay; i++) {
      //loading page
      let card = noDisplay.pop();
      page.unshift(card);
      if (noDisplay.length === 0) break;
    }

    setNotDisplayedCards(noDisplay); // updating not displayed cards array
    setPages([...pages, [...page]]); // setting the new page
    setCurrentPage((prev) => ++prev); // updating the current page
  };

  return (
    <div className="prev-and-next">
      <button
        type="button"
        onClick={() => setCurrentPage((prev) => --prev)}
        disabled={currentPage === 0}
      >
        Prev
      </button>
      <button
        type="button"
        onClick={loadMore}
        disabled={
          notDisplayedCards.length === 0 && pages.length < currentPage + 2
        }
      >
        Next
      </button>
    </div>
  );
};
