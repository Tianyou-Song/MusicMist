# == Schema Information
#
# Table name: songs
#
#  id           :bigint(8)        not null, primary key
#  title        :string           not null
#  release_date :date
#  uploader_id  :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  artist       :string
#  description  :text
#

require 'test_helper'

class SongTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
