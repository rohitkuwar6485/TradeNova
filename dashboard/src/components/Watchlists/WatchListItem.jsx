import React, { useState } from "react";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import WatchListActions from "./WatchListActions";

const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  return (
    <li
      className="list-group-item d-flex justify-content-between align-items-center border-0 px-3 py-2"
      onMouseEnter={() => setShowWatchlistActions(true)}
      onMouseLeave={() => setShowWatchlistActions(false)}
    >
      {/* Left side: Stock name */}
      <span className={`fw-semibold ${stock.isDown ? "text-danger" : "text-success"}`}>
        {stock.name}
      </span>

      {/* Right side: Stock info */}
      <div className="d-flex align-items-center gap-2">
        <span className="small text-muted">{stock.percent}</span>
        {stock.isDown ? (
          <KeyboardArrowDown className="text-danger" fontSize="small" />
        ) : (
          <KeyboardArrowUp className="text-success" fontSize="small" />
        )}
        <span className="fw-bold">{stock.price}</span>
      </div>
       {showWatchlistActions && <WatchListActions uid={stock.name} />}
    </li>
  );
};

export default WatchListItem;
