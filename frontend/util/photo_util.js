export const scaleImg = (boxHeight, photo) => {
  const { image_width, image_height } = photo

  const newWidth = image_width / image_height * boxHeight;

  return { width: newWidth, height: boxHeight };
}
