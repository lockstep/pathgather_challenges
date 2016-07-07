require 'rails_helper'

describe CoursesController, type: :request do
  describe '#connect_to_coursera_api' do
    context 'list courses' do
      it 'connects successfully' do
        get "/courses"
        # expect(response_body['courses']).not_to be_nil
      end
    end
  end

end
