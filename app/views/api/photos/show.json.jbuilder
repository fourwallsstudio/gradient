json.extract! @photo, :id
json.image_url asset_path(@photo.image.url(:original))
json.thumb asset_path(@photo.image.url(:thumb))
json.image_width @photo.image.width
json.image_height @photo.image.height
json.gradient @photo.gradient_css
