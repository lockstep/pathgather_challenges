require 'open-uri'

class Course < ActiveRecord::Base
  def get_courses
    response = open('https://api.coursera.org/api/courses.v1?start=300&limit=10').read
    response_json = JSON(response)
    courses_json = response_json['elements']
    # mapping_json_to_model(courses_json)
  end

  def mapping_json_to_model(courses_json)
    courses_json.each do |course_json|
      course = Course.new(name: course_json.name)
    end
  end

end
