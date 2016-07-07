class CoursesController < ApplicationController
  def index
    render json: Course.get_courses
  end
end
