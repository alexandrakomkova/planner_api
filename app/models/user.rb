class User < ApplicationRecord
  has_secure_password
  has_many :categories
  has_many :tasks

  validates_presence_of :email
  validates_uniqueness_of :email
end
