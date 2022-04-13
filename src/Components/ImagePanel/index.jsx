import { useEffect, useState } from "react";
import { getImages } from "../../api";
import { Image } from "../Image";

const ImagePanel = () => {
  const [images, setImages] = useState(null);
  const getAll = async () => {
    const test = await getImages("dog");
    console.log(test, "sfskjfklsdj");

    setImages(test);
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <div className="imagePanel">
      {images.data.photos.photo.map((image) => {
        const { farm, server, id, secret, title } = image;

        let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
        return <Image url={url} alt={title} />;
      })}
    </div>
  );
};

export default ImagePanel;
