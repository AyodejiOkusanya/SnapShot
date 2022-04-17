import { Component, memo } from "react";
import "./header.css";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1>SnapShot</h1>
        <nav class="nav">
          <ul class="nav__list">
            <li>nav1</li>
            <li>nav2</li>
            <li>nav3</li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default memo(Header);
