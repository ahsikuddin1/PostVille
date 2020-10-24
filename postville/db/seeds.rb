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
@user2 = User.create!(username: 'Moe', email: 'moe@gmail.com', password:'123456')
@user3 = User.create!(username: 'Sandra', email: 'sandra@gmail.com', password:'123456')

puts "#{User.count} users created"

@content = 
Post.create!(content:'Im on a journey to become a full stack dev.', user: @user)

@content2 =
Post.create!(content:'Hmm.. What to order on uber eats tonight?', user: @user2)
@content3 =
Post.create!(content:'Every time I shoot a basketball, I yell Kobe!!!!', user: @user2)

puts "#{Post.count} Posts created"

@comment = 
Comment.create!(content:'You have to put in a lot of hardwork but you got this!', post:@content, user:@user2)
Comment.create!(content:'Get Ihop?', post:@content2, user:@user)
puts "#{Comment.count} Comments created"