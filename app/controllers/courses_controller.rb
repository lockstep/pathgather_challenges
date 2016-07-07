class CoursesController < ApplicationController
  def create
    coursera = CourseraApi.new.fetch_course(params[:url])
    course = Course.new(
      content_provider: params[:provider_id],
      # coursera attr
    )

    if course.save
      render json: course
    else
      render json: { meta: { errors: course.errors }}, status: status_code
    end
  end
end
