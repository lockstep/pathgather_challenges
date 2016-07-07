require 'rest-client'

module CourseraApi
  class Course < CourseraApi::Base
    def index(start=0, limit=100)
      raw_response = RestClient.get "#{ENV['COURSERA_API_BASE']}/courses.v1?start=#{start}&limit=#{limit}&fields=description"
      json_response = JSON.parse(raw_response)
      json_response['elements'].map do |element|
        CourseResponse.new(element)
      end
    end

    def get(id)
      response = RestClient.get "#{ENV['COURSERA_API_BASE']}/courses.v1/#{id}?fields=description,startDate"
      json_response = JSON.parse(response)
      CourseResponse.new(json_response['elements'][0])
    end
  end
end
