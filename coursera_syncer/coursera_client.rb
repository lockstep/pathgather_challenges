module CourseraClient
  def self.get_courses
    courses_response_body = get_raw_courses
    raw_courses = courses_response_body['elements']
    raw_courses.map do |raw_course|
      {
        coursera_id: raw_course['id'],
        name: raw_course['name'],
        description: raw_course['description'],
        coursera_url: raw_course['previewLink']
        # : raw_course['coursera_url'],
      }
    end
  end

  def self.get_raw_courses
    # Assume we can send GET request to coursera and return raw course list
    # JSON response body.
  end
end
