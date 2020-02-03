# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Todo.delete_all

Todo.create!(
    title: 'Contemplate the meaning of life',
    body: 'between homeworks and readings',
    done: false
)

Todo.create!(
    title: 'Code everyday',
    body: 'get better at them algo\'s, data structure\'s and projects',
    done: false
)