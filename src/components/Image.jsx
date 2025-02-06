import { IKImage } from "imagekitio-react";
import React from "react";
const urlEndpoint = import.meta.env.VITE_IK_URL_ENDPOINT;

const Image = ({ src, className = "", w, h, alt = "Image" }) => {
  return (
    <IKImage
      urlEndpoint={urlEndpoint}
      path={src}
      className={className}
      width={w}
      height={h}
      loading="lazy"
      lqip={{ active: true, quality: 20 }}
      alt={alt}
    />
  );
};

export default Image;
