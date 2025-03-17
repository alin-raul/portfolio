import React from "react";

type BlobProps = {
  position: {
    right?: string;
    left?: string;
    top?: string;
    bottom?: string;
  };
  width: string;
  height: string;
  blobClass: string;
};

const Blob: React.FC<BlobProps> = ({ position, width, height, blobClass }) => {
  return (
    <div
      style={{
        opacity: 0.5,
        position: "absolute",
        top: 0,
        left: 0,
        filter: "blur(8rem)",
        height: "100%",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <div
        className={blobClass}
        style={{
          position: "absolute",
          ...position,
          width,
          height,
        }}
      ></div>
    </div>
  );
};

export default Blob;
