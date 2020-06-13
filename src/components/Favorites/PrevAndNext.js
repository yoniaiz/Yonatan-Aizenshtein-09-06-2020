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
    let toDisplay = 4;
    let page = [];
    const noDisplay = [...notDisplayedCards];

    if (width < 375) toDisplay = 1;
    else if (width >= 375 && width < 768) toDisplay = 2;
    else if (width >= 768 && width < 1440) toDisplay = 3;

    for (let i = 0; i < toDisplay; i++) {
      let card = noDisplay.pop();
      page.unshift(card);
      if (noDisplay.length === 0) break;
    }

    setNotDisplayedCards(noDisplay);
    setPages([...pages, [...page]]);
    setCurrentPage((prev) => ++prev);
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
