require_relative '../spec_helper'
require_relative '../../models/course'

describe Course do
  before { Course.destroy_all }
  it 'can be persisted with attributes' do
    Course.create(name: 'other name')
    expect(Course.count).to eq 1
    expect(Course.first.name).to eq 'other name'
  end
end
