require 'rest-client'

class CourseraApi

  def initialize
      @api_base = "https://api.coursera.org/api/courses.v1"
  end

  def get_all_courses
    res = RestClient.get(@api_base)
  end

end
