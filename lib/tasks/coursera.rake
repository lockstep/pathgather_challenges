namespace :coursera do
  desc "Update all courses"
  task fetch_all: :environment do
    courses = Coursera::Course.all(fields: [:description, :startDate, :previewLink])

    courses.each do |c|
      course = Course.find_or_create_by(course_id: c.id)

      course.tap do |cc|
        cc.slug = c.slug
        cc.name = c.name
        cc.course_type = c.courseType
        cc.course_id = c.id
        cc.preview_link = c.previewLink rescue nil
        cc.start_date = Time.at(c.startDate) rescue nil
        cc.description = c.description rescue nil
        cc.logo_url = c.photoUrl rescue nil
      end

      course.save
    end
  end
end
