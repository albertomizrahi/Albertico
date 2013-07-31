class PaymentNotification < ActiveRecord::Base

  belongs_to :picture
  serialize :params
  after_create :mark_picture_as_sponsored

  private

  def mark_picture_as_sponsored
    if status == "Completed"
      picture.update_attribute(:isSponsored, true)
    end
  end

end
