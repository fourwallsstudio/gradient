# == Schema Information
#
# Table name: photos
#
#  id                 :integer          not null, primary key
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#  image_meta         :text
#  gradient           :string
#

class Photo < ApplicationRecord

  has_attached_file :image, styles: { thumb: ["60x60#", :png] }
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  def gradient_css
    return self.gradient if self.gradient

    gradient = make_gradient
    self.update({ gradient: gradient })
    self.gradient
  end

  private

  def make_gradient
    url = 'https:' + self.image.url
    colors = Miro::DominantColors.new(url)

    gradient_points = make_gradient_points(colors)

    gradient_map = Gradient::Map.new(*gradient_points)

    Gradient::CSSPrinter.new(gradient_map).linear
  end

  def make_gradient_points(colors)
    percentages =  colors.by_percentage
    size = 0

    gradient_points = []

    colors.to_rgb.length.times do |i|
      r, g, b = colors.to_rgb[i]
      gradient_points << Gradient::Point.new(size, Color::RGB.new(r, g, b), 1.0)
      size += percentages[i]
    end

    gradient_points
  end
end
