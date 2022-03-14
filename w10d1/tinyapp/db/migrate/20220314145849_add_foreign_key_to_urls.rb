class AddForeignKeyToUrls < ActiveRecord::Migration[6.1]
  def change
    add_column :urls, :user_id, :integer
    add_foreign_key :urls, :users
  end
end
