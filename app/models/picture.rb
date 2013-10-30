class Picture < ActiveRecord::Base
  has_one :payment_notification


  def paypal_url(return_url, notify_url)
    values = {
        :business => 'seller_albertico@gmail.com',
        :cmd => '_donations',
        :invoice => self.id,
        :amount => '500',
        :return => return_url,
        :notify_url => notify_url
    }

    "https://www.sandbox.paypal.com/cgi-bin/webscr?" + values.to_query

  end


end
