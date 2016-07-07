require_relative './coursera_client'

module CourseraSyncer
  def self.sync!
    courses_attributes = CourseraClient.get_courses
    courses_attributes.each { |course_attrs| Course.create(course_attrs) }
  end
end
