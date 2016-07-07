module CourseraApi
  class CourseResponse
    include ActiveModel::Model

    attr_accessor :id, :course_type, :slug, :name, :description
      :start_date

    def initialize(catalog)
      self.id = catalog['id']
      self.course_type = catalog['courseType']
      self.slug = catalog['slug']
      self.name = catalog['name']
      self.description = catalog['description']
    end
  end
end
