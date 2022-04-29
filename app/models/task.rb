class Task < ApplicationRecord
  belongs_to :category
  belongs_to :user
end

# registration via google
# web page on github (google about github-pages)
# rails api on heroku