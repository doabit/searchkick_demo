class AddConversionsToProducts < ActiveRecord::Migration
  def change
    add_column :products, :conversions, :string
  end
end
