require 'json'

class CourseraApi
  include HTTParty
  attr_reader :name, :desc, :course_start

  BASE_URI = 'https://api.coursera.org/api/courses.v1/'

  def fetch_course(url)
    result = self.class.get(BASE_URI + url)
    course = result['elements'][0]
    assign_attr(course['name'], course['description'], course['start_date'])
    self
  end

  def assign_attr(name, desc, course_start)
    @name = name
    @desc = desc
    @course_start = course_start
  end

end
