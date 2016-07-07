require 'rails_helper'

RSpec.describe CoursesController, type: :request do
  describe "POST #create" do
    before do
      @content_provider = ContentProvider.create(name: 'coursera')
      @url = 'Gtv4Xb1-EeS-ViIACwYKVQ'
      post "/content_providers/#{@content_provider.id}/courses", { url: @url }
    end

    it 'creates a course' do
      expect(Course.count).to eq 1
      expect(Course.first.name).to eq "Machine Learning"
      expect(Course.first.url).to eq @url
    end
  end
end
