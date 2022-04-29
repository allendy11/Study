import { Header } from "semantic-ui-react";
import Gnb from "./Gnb";
import Menu from "./Menu";
export default function Top() {
  return (
    <div className="top">
      <div className="top_menu">
        <img src="/images/LEN_logo.png" alt="logo" />
        <Menu />
      </div>
      <Gnb />
    </div>
  );
}
