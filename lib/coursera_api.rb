require 'rest-client'

class CourseraApi

  def initialize
      @api_base = "https://api.coursera.org/api/courses.v1/"
  end

  def get_all_courses
    response = RestClient.get("#{@api_base}?fields=description,startDate")
    json_response = JSON.parse(response)
  end

end
