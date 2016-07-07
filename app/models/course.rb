class Course < ActiveRecord::Base
  belongs_to :course
  has_many :subscribes
  has_many :users, :through => :subscribes
end
