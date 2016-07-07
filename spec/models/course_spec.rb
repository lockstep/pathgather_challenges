require 'rails_helper'

RSpec.describe Course, type: :model do
  describe '#connect_to_coursera_api' do
    it 'returns list of courses from Coursera' do
      courses = Course.get_courses
      expect(courses).not_to be_nil
      expect(courses.count).not_to eq 0
    end
  end

end
