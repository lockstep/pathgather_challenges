json.array!(@courses) do |course|
  json.extract! course, :id, :name, :description, :url, :start_date
  json.url course_url(course, format: :json)
end
