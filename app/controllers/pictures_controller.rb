class PicturesController < ApplicationController
  def create
  end

  def show
    @picture = Picture.find(params[:id])

    respond_to do | format |
      format.js
    end


  end

  def index
    @pictures = Picture.all.order('id ASC')
  end

  def update
    @picture = Picture.find(params[:id])

    @picture.update_attribute(:isSponsored, true)
    redirect_to root_path

  end
end
