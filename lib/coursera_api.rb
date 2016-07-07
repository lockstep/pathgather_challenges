require 'json'

class CourseraApi
  include HTTParty
  BASE_URI = 'https://api.coursera.org/api/courses.v1'

  def fetch_course(url)
    res = self.class.get(BASE_URI + url)
    extract_data(res)
  end

  def extract_data(course)
  end
end
