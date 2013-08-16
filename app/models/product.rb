class Product < ActiveRecord::Base
  searchkick  autocomplete: ['name'], conversions: "conversions"
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
