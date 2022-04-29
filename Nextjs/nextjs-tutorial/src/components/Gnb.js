import { Menu } from "semantic-ui-react";

export default function Gnb() {
  const activeItem = "home";
  return (
    <Menu inverted>
      <Menu.Item
        name="home"
        active={activeItem === "home"}
        // onClick={this.handleItemClick}
      />
      <Menu.Item
        name="about"
        active={activeItem === "about"}
        // onClick={this.handleItemClick}
      />
      <Menu.Item
        name="mypage"
        active={activeItem === "mypage"}
        // onClick={this.handleItemClick}
      />
    </Menu>
  );
}
