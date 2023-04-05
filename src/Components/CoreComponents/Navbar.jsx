import { AppBar, Toolbar } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useTheme, makeStyles } from "@mui/styles";
import React from "react";
import getDataObject from "../../dataObjects/navbar";
import Icons from "../../assets/icons/Icons";
import SearchIconSvg from "../../assets/icons/SearchIcon";
import CartIconSvg from "../../assets/icons/CartIcon";
import AccountIconSvg from "../../assets/icons/AccountIcon";

const useStyles = makeStyles((theme) => ({
  // appBarStyling: { boxShadow: "none" },
  toolBarStyling: {
    backgroundColor: `${theme.baseColors.white}`,
  },
  navListStyling: {
    color: `${theme.baseColors.colorPrimary}`,
    marginRight: "12px",
    fontSize: `${theme.defaultFontStyling.fontSize}`,
    display: "flex",
    alignItems: "center",
  },
  containerStyling: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

const Navbar = () => {
  // const theme = useTheme();
  const classes = useStyles();

  const navsList = getDataObject("navItems");
  const iconsList = getDataObject("icons");

  return (
    <>
      <Box>
        <AppBar
          sx={{ boxShadow: "none" }}
          // className={`${classes.appBarStyling}`}
        >
          <Toolbar className={`${classes.toolBarStyling}`}>
            <Container>
              <Box className={`${classes.containerStyling}`}>
                <Box className={`${classes.navListStyling}`}>
                  {navsList.map(({ title }, idx) => {
                    return (
                      <Box
                        key={idx}
                        className={`${classes.navListStyling}`}
                        style={{ color: "#000" }}
                      >
                        {title}
                      </Box>
                    );
                  })}
                </Box>
                <Box>
                  <Icons icon={"CartIcon"} />
                  {/* {iconsList.map(({ iconName }, idx) => {
                  <Box key={idx}>
                    <Icons icon={iconName} />;
                  </Box>;
                })} */}
                </Box>
              </Box>
            </Container>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
