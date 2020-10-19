class RemovePostFromComments < ActiveRecord::Migration[6.0]
  def change
    remove_column :comments, :post, :string
  end
end
