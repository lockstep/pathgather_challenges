require 'rails_helper'

describe CourseraApi::Course do
  describe '#index' do
    it 'should retrieve list of courses' do
      courses = CourseraApi::Course.new().index
      expect(courses.size).to eq 100
      expect(courses[0].id).to eq 'v1-228'
      expect(courses[0].name).to eq 'Creative Programming for Digital Media & Mobile Apps'
      expect(courses[0].description).to include 'For anyone'
    end

    it 'can specify start and limit' do
      courses = CourseraApi::Course.new().index(2, 10)
      expect(courses.size).to eq 10
      expect(courses[0].id).to eq '0HiU7Oe4EeWTAQ4yevf_oQ'
    end
  end

  describe '#get' do
    it 'should be able to get course information' do
      course = CourseraApi::Course.new().get('Gtv4Xb1-EeS-ViIACwYKVQ')
      expect(course.id).to eq 'Gtv4Xb1-EeS-ViIACwYKVQ'
      expect(course.course_type).to eq 'v2.ondemand'
      expect(course.description).to include 'Machine learning'
    end
  end
end
