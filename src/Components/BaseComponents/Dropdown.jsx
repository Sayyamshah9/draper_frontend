import * as React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import {
  Button,
  FormControl,
  InputLabel,
  Menu,
  MenuItem,
  Select,
} from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";

const useStyles = makeStyles({
  button: {
    color: "#000",
    textTransform: "none",
  },
  menuItemStyles: {
    color: "red",
    backgroundColor: "red",
    width: "7.5rem",
    maxWidth: "7.5rem",
  },
});

const Dropdown = (props) => {
  const { items, title } = props;

  const classes = useStyles();

  const [showMenu, setShowMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setShowMenu(true);
  };
  const handleClose = (e) => {
    // if (e?.target?.innerText) {
    //   console.log(e.target.innerText);
    // }
    setShowMenu(false);
  };

  return (
    <>
      <Box>
        <Button
          sx={{
            color: "#000",
            textTransform: "none",
            width: "7.5rem",
            maxWidth: "7.5rem",
          }}
          className={classes.button}
          endIcon={<KeyboardArrowDown />}
          onClick={handleClick}
        >
          {title}
        </Button>
        <Menu
          open={showMenu}
          onClose={handleClose}
          anchorEl={anchorEl}
          fullWidth
        >
          {items.map((item, index) => {
            return (
              <MenuItem
                // sx={{
                //   width: "7.5rem",
                //   maxWidth: "7.5rem",
                // }}
                className={classes.menuItemStyles}
                defaultValue={"item"}
                key={index}
                onClick={handleClose}
              >
                {item}
              </MenuItem>
            );
          })}
        </Menu>
      </Box>
    </>
  );
};

export default Dropdown;

Dropdown.propTypes = {
  items: PropTypes.array,
  title: PropTypes.string,
};
