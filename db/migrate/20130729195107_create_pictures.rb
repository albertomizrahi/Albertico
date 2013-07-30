class CreatePictures < ActiveRecord::Migration
  def change
    create_table :pictures do |t|
      t.string :filename
      t.string :sponsor
      t.boolean :isSponsored, :default => false
      t.string :message

      t.timestamps
    end
  end
end
