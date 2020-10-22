# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Post.destroy_all
Comment.destroy_all


@user = User.create!(username: 'Ashik', email: 'admin@gmail.com', password:'123456')
puts "#{User.count} users created"

@content = 
Post.create!(content:'Im on a journey to become a full stack dev.', user: @user)
Post.create!(content:'Hmm.. What to order on uber eats tonight?', user: @user)
Post.create!(content:'Every time I shoot a basketball, I yell Kobe!!!!', user: @user)
# Post.create!(user:'Ashik', content:'Hmm, what to order on UberEats today?')
# Post.create!(user:'Moe', content:'Great day at the bank. Opened ten business accounts!!!')
# Post.create!(user:'Sasha', content:'Sephora has some great deals!')
puts "#{Post.count} Posts created"

@comment = 
Comment.create!(content:'I have to put in a lot of hardwork!', post_id:1, user_id:1)
puts "#{Comment.count} Comments created"