json.extract! url, :id, :short_url, :long_url, :description, :created_at, :updated_at
json.url url_url(url, format: :json)
