# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Todo.delete_all
Step.delete_all

todo1 = Todo.create!(
    title: 'Contemplate the meaning of life',
    body: 'between homeworks and readings',
    done: false
)

todo2 = Todo.create!(
    title: 'Code everyday',
    body: 'get better at them algo\'s, data structure\'s and projects',
    done: false
)

step1 = Step.create!(
    title: 'practice algo\'s and data structures',
    todo_id: todo2.id,
    done: false
)

step2 = Step.create!(
    title: 'code out several projects using react/rails stack',
    body: "balance out work schedule",
    todo_id: todo2.id,
    done: false
)