json.array!(@products) do |product|
  json.extract! product, :name, :description, :price, :sku
  json.url product_url(product, format: :json)
end
