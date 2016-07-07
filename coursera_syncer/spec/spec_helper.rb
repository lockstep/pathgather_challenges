require 'active_record'
require_relative '../models/course'

ActiveRecord::Base.establish_connection(
  :adapter  => 'postgresql',
  :database => 'coursera_syncer_test',
  :host     => 'localhost'
)
