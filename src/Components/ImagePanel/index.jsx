import { Image } from "../Image";
import "./imagePanel.css";

const ImagePanel = ({ images }) => {
  return (
    <div className="imagePanel">
      {images &&
        images.data.photos.photo.map((image) => {
          const { farm, server, id, secret, title } = image;

          let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
          return <Image url={url} alt={title} />;
        })}
    </div>
  );
};

export default ImagePanel;
