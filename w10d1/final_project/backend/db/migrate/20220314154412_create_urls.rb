class CreateUrls < ActiveRecord::Migration[6.1]
  def change
    create_table :urls do |t|
      t.string :short_url
      t.string :long_url
      t.string :description

      t.timestamps
    end
  end
end
