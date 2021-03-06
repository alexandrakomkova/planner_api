class Category < ApplicationRecord
  has_many :tasks
  belongs_to :user

  validates :title, presence: true, length: { maximum: 20 }
  validates_uniqueness_of :title
end
