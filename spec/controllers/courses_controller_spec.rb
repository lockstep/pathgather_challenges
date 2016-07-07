require 'rails_helper'

describe CoursesController, type: :request do
  describe '#connect_to_coursera_api' do
    context 'list courses' do
      it 'connects successfully' do
        get "/courses"
        response_body = JSON.parse(response.body)
        expect(response_body.count).not_to eq 0
        expect(response_body[0]['name']).not_to be_nil
      end
    end
  end

end
