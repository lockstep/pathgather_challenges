require_relative './spec_helper'
require_relative '../coursera_syncer'
require_relative '../models/course'

describe CourseraSyncer do
  before do
    Course.destroy_all
    file =
      File.open(File.dirname(__FILE__) + '/fixtures/courses.json', 'rb').read
    course_data = JSON.parse(file)
    allow(CourseraClient).to receive(:get_raw_courses).and_return(course_data)
  end
  describe '::sync!' do
    it 'syncs sources from coursera api course list' do
      CourseraSyncer.sync!
      expect(Course.count).not_to eq 0
      expect(Course.find_by(coursera_id: 'v1-228')).not_to be_nil
    end
  end
end
