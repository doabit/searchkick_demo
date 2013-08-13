class Product < ActiveRecord::Base
  searchkick conversions: "conversions", autocomplete: ['name']
  has_many :searches
  def search_data
    # as_json.merge conversions: conversions
    {
      name: name,
      conversions: searches.group("query").count
      # {"ice cream" => 234, "chocolate" => 67, "cream" => 2}
    }
  end
end
