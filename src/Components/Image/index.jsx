import { Component } from "react";
import "./Image.css";

export class Image extends Component {
  static defaultProps = {
    width: "230px",
    height: "148px",
  };
  render() {
    const { width, height, url, title } = this.props;
    return (
      <div class="image-container">
        <img
          class="image"
          src={url}
          alt={title}
          width={width}
          height={height}
        />
      </div>
    );
  }
}
