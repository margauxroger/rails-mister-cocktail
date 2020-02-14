class CreateDoses < ActiveRecord::Migration[5.2]
  def change
    create_table :doses do |t|
      t.belongs_to :cocktail, foreign_key: true
      t.belongs_to :ingredient, foreign_key: true
      t.string :description

      t.timestamps
    end
  end
end
