# This migration comes from legacy_ocr_search_engine (originally 20230921194026)
class CreateSearchObjects < ActiveRecord::Migration[7.0]
  def change
    create_table :search_objects do |t|
      t.string :key

      t.timestamps
    end
  end
end
