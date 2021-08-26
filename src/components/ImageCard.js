import { Component, createRef } from 'react';

class ImageCard extends Component {
  constructor(props) {
    super(props);

    this.imageRef = createRef();
  }

  componentDidMount() {
    console.log(this.imageRef.current.clientHeight);
  }

  render() {
    const { urls, alt_description } = this.props.data;
    return (
      <div>
        <img ref={this.imageRef} src={urls.regular} alt={alt_description} />
      </div>
    );
  }
}

export default ImageCard;
