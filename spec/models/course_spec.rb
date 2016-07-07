require 'rails_helper'

RSpec.describe Course, type: :model do
  describe '#connect_to_coursera_api' do
    it 'returns list of courses json from Coursera' do
      courses = Course.new.get_courses
      expect(courses).not_to be_nil
    end

    it 'returns list of courses model from Coursera' do
      # expect(courses).not_to be_nil
    end
  end

end
