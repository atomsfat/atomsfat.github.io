# Ruby

[https://devhints.io/rbenv](https://devhints.io/rbenv)

```jsx
rbenv install 2.7.0
gem env home
```

[Ruby convection](Ruby%200e6f33a22c024dc6a352b0e8fb9a653c/Ruby%20convection%2051494b9a04024df8b7a5a4630768bae3.csv)


| Type     | Ruvy convection |
| -------- | --------------- |
| local    | first_name      |
| Instance | @first_name     |
| Instance | @@first_name    |
| Global   | @FIRST_NAME     |

```ruby
class Ticket
	attr_reader :venue, :date, :price
  attr_writer :price
  attr_accessor :some
end
```

Singleton methods

```ruby
def Ticket.most_expensive(*tickets) 
	tickets.max_by(&:price)
end
```

**Using the &: shorthand syntax**

The syntax &: is an abbreviated way of iterating over each of the elements in the
tickets array and selecting the largest number. &: is often used with the map
method, iterating over each element in an array, hash, or range and applying a
method:

```bash
>> ["havoc", "prodigy"].map(&:capitalize) 
=> ["Havoc", "Prodigy"]
```

Method notation

- **Ticket#price** refers to the instance method price in the class Ticket.
- **Ticket.most_expensive** refers to the class method most_expensive in the class Ticket. This notation is used when calling the most_expensive
method.
- **Ticket::most_expensive** also refers to the class method most_expensive in
the class Ticket.

```ruby
VENUES = ["Convention Center", "Fairgrounds", "Town Hall"]
ENUES.include?(venue)

Ticket::VENUES << "High School Gym"

mag = Magazine.new
mag.is_a?(Magazine
```

- use  → [Method from Rack::Builder](https://stackoverflow.com/questions/11982310/use-keyword-word-in-ruby-rails-rack-code)
- mount
- require
- include

# Tips and tricks

Array

```ruby
array = ["milk", "eggs", "bread"]
array << "carrots" # Add the string "carrots" to the end of the array:
array.push("potatoes") # Add the string "potatoes" to the end of the array:
array..("celery") # add to beginning
array += ["ice cream", "pie"] # Add the strings "ice cream" and "pie" to the end of the array:
array << 1 #Add the number 1 to the end of the array:
```

# Style guides

[rubocop-hq/ruby-style-guide](https://github.com/rubocop-hq/ruby-style-guide#unless-for-negatives)

[uohzxela/clean-code-ruby](https://github.com/uohzxela/clean-code-ruby#method-arguments-2-or-fewer-ideally)

[airbnb/ruby](https://github.com/airbnb/ruby)

[https://dry-rb.org/gems/dry-auto_inject/0.6/injection-strategies/](https://dry-rb.org/gems/dry-auto_inject/0.6/injection-strategies/)