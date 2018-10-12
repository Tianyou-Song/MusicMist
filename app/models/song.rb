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
#

class Song < ApplicationRecord
  validates :title, :uploader_id, presence: true

  has_one_attached :song

  belongs_to :uploader,
    foreign_key: :uploader_id,
    class_name: 'User'
end
