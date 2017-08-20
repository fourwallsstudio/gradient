class Api::PhotosController < ApplicationController

  def index
    offset = params[:page].to_i
    @photos = Photo.order(created_at: :desc).limit(27).offset(offset * 27)
  end

  def show
    @photo = Photo.order(created_at: :desc).limit(1)
  end

  def create
    @photo = Photo.new(photo_params)

    if @photo.save
      @photo.gradient_css
      render :show
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def destroy
    @photo = Photo.find(params[:id])
    @photo.delete
    render :show
  end

  private

  def photo_params
    params.require(:photo).permit(:image)
  end
end
