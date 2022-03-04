
def some_method
  puts "Potatoes are the best 🥔🥔🥔"
end

some_method


def repeat_after_me sentence, amount
  amount.times do
    puts sentence
  end
end

repeat_after_me("wiggle wiggle", 10)


def what_does_a_method_return
  puts "Hey hey"
  puts "hoho"
  return "Andrew"
end

result = what_does_a_method_return

puts result