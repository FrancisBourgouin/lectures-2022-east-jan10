# if

some_value = 5
some_other_value = "5"
some_other_other_value = 5

if some_value == some_other_value
  puts "Ah yiss"
end

# elsif

if some_value == some_other_value
  puts "Ah yiss"
elsif some_value == some_other_other_value
  puts "Yeah"
end

# unless

sad = false

puts "I am happy" unless sad

if !sad
  puts "I am happy"
end

# ternary

puts sad ?  "sadness" : "happiness"

# > , < , <= , >=, <=>

val = 1
other_val = 2

puts val <=> other_val
puts other_val <=> val
puts val <=> val


case val <=> other_val
  when -1
    puts "val is smaller!"
  when 1
    puts "val is bigger!"
  when 0
    puts "they're the same"
end