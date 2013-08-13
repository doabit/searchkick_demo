json.array!(@searches) do |search|
  json.extract! search, :query, :searched_at, :converted_at, :product_id
  json.url search_url(search, format: :json)
end
