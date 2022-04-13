import { Component, memo } from "react";
import "./header.css";

class Header extends Component {
  render() {
    return <header className="header">SnapShot</header>;
  }
}

export default memo(Header);
