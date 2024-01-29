import { Component } from "react";

class ImageComponent extends Component {
  render(propsSrc, propsAlt) {
    return <img src={propsSrc} alt={propsAlt} />;
  }
}

export default ImageComponent;
