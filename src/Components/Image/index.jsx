import { Component } from "react";

export class Image extends Component {
  static defaultProps = {
    width: "10px",
    height: "10px",
  };
  render() {
    const { width, height, url, title } = this.props;
    return <img src={url} alt={title} width={width} height={height} />;
  }
}
