const navBarDataObject = {
  navItems: [
    { title: "Home", type: "link", link: "#" },
    { title: "Category", type: "dropdown", link: "#" },
    { title: "About Us", type: "link", link: "#" },
    { title: "Contact Us", type: "link", link: "#" },
  ],
  icons: [
    { iconName: "SearchIcon", link: "#" },
    { iconName: "CartIcon", link: "#" },
    { iconName: "AccountIcon", link: "#" },
  ],
};

export default function getDataObject(key) {
  return navBarDataObject[key];
}
