import React, { useState } from "react";
import { Dimensions, Image } from "react-native";

function FitImage({ src }) {
  const [height, setHeight] = useState(0);
  const screenwidth = Dimensions.get("window").width;
  Image.getSize(src, (width, height) => {
    const ratio = width / screenwidth;
    setHeight(height / ratio);
  });
  return <Image style={{ width: screenwidth, height }} source={{ uri: src }} />;
}
export default FitImage;
