class Pizza
  def initialize size, toppings, crust
    @size = size < 10 ? "small" : "large"
    @toppings = toppings
    @crust = crust
  end

  attr_reader :toppings
  attr_accessor :size

  # def size
  #   @size
  # end

  def describe_pizza
    puts "A wonderful pizza with #{@toppings.join(', ')} in a marvelous size of #{@size}"
  end
end


personal_pan_boolean = Pizza.new(9, ["potatoes","pineapple","poutine sauce"], true)

puts personal_pan_boolean
p personal_pan_boolean


p personal_pan_boolean.size
personal_pan_boolean.size = "mega large"
p personal_pan_boolean.size
p personal_pan_boolean.toppings


personal_pan_boolean.describe_pizza