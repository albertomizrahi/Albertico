class PicturesController < ApplicationController

  def show
    @picture = Picture.find(params[:id])

    if !@picture.isSponsored?     #In case that the user wrote his name and a message, pressed the donate button but didn't donate anything, we delete what was written
      @picture.update_attribute(:sponsor_name,"")
      @picture.update_attribute(:sponsor_message,"")
    end

    respond_to do | format |
      format.js
    end


  end

  def index
    @pictures = Picture.all.order('id ASC')   #Order the pictures in ascending order so that they appear in order
  end

  def update
    @picture = Picture.find(params[:id])

    @picture.update_attributes(picture_params)   #Update the picture's sponsor name and message

    redirect_to @picture.paypal_url(pictures_url, payment_notifications_url)  #Redirect them to the Paypal donation website

  end

  private

  def picture_params
    params.require(:picture).permit(:sponsor_name, :sponsor_message)
  end
end
