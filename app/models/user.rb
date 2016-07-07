class User < ActiveRecord::Base
  has_many :subscribes
  has_many :courses, :through => :subscribes
end
