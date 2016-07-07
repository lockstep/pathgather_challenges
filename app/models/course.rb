require 'open-uri'

class Course < ActiveRecord::Base
  def self.get_courses
    response = open('https://api.coursera.org/api/courses.v1?start=300&limit=10').read
    response_json = JSON(response)
    courses_json = response_json['elements']
    convert_json_to_model(courses_json)
  end

  private

  def self.convert_json_to_model(courses_json)
    courses = []
    courses_json.each do |course_json|
      courses.push( new(name: course_json['name']) )
    end
    return courses
  end

end
