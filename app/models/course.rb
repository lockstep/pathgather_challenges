class Course < ActiveRecord::Base
  def url
    "https://www.coursera.org/learn/#{self.slug}"
  end
end
