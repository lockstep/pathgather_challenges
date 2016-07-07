class CoursesController < ApplicationController
  def create
    course_api = CourseraApi.new.fetch_course(params[:url])
    course = Course.new(
      content_provider_id: params[:provider_id],
      name: course_api.name,
      desc: course_api.desc,
      url: params[:url],
      course_start: course_api.course_start
    )

    if course.save
      render json: course
    else
      render json: { meta: { errors: course.errors }}, status: 403
    end
  end
end
