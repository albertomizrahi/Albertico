class CreatePictures < ActiveRecord::Migration
  def change
    create_table :pictures do |t|
      t.string :filename
      t.string :sponsor_name
      t.boolean :isSponsored, :default => false
      t.string :sponsor_message

      t.timestamps
    end
  end
end
