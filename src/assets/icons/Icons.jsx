import React from "react";
import SearchIcon from "./SearchIcon";
import CartIcon from "./CartIcon";
import AccountIcon from "./AccountIcon";

const Icons = ({ icon }) => {
  switch (icon) {
    case "SearchIcon":
      return <SearchIcon />;
    case "CartIcon":
      return <CartIcon />;
    case "AccountIcon":
      return <AccountIcon />;
  }
};

export default Icons;
