# Blocks!

def fancy_output
  puts "🔥🔥🔥🔥🔥🔥🔥"
  yield(5)
  puts "🔥🔥🔥🔥🔥🔥🔥"
end

def greetings
  puts "hi there"
  puts "i hope you like"
  puts "ruby"
end

def show_the_number number
  puts number
end


fancy_output { puts "Hellooooo"}
fancy_output { greetings }
fancy_output { |number| show_the_number(number) }
fancy_output { |number| show_the_number number }

