# each

[1,2,3,4].each do | number |
  puts "Hello #{number}"
end

# each_with

[1,2,3,4].each_with_index do | number, index |
  puts "Hello #{number} at index #{index}"
end

# while
i = 0
while i < 5 
  puts i
  i += 1
end

# for
potatoes = ["Yukon gold", "Russet", "Grelot"]

for potato in potatoes
  puts potato.downcase
end

# (1...100).each do |val|
#   puts val
# end

5.times do
  puts "High five!"
end

bob_the_snake = (40..20)
puts bob_the_snake
# select, step, .times

