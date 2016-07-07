module CourseraApi
  class Base
    BASE_URI = ENV['COURSERA_API_BASE']
  end

  class Error < StandardError; end
end
