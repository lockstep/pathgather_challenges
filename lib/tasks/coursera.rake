namespace :coursera do

  desc "sync course from api to Course database"
  task :sync_course => :environment do

    courses = CourseraApi.new.get_all_courses
    courses['elements'].map do |element|
      date = Time.at(element['startDate']/1000).to_date  unless element['startDate'].nil?
      slug = element['slug']
      Course.create(coursera_id: element['id'], name: element['name'],
        description: element['description'], url: "https://www.coursera.org/learn/#{slug}",
        start_date: date )
    end
  end
end
