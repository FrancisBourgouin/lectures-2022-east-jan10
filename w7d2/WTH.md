# What was hard

- X Props ?!?
- X Curly brackets
- X Controlled Components
- State (Lecture about it tomorrow!)
- Console.log is weird!
- Scope
- EVENTS !

# JSX ?

- Not JavaScript ?
- Not HTML ?
- XML -> eXtensible Markup Language

```jsx
function User(props){
  const { name, age } = props

  return(
    // ...
  )
}


function SomeComponent(props){
  const age = "secret"

  const randomThings = {
    favoriteWord:"poulet",
    funny:true
  }

  return(
    <header>
      <h1>Hello!</h1>
      <User name="Francis" age={age} favoriteWord={randomThings.favoriteWord} funny={randomThings.funny}/>
      <User name="Francis" age={age} {...randomThings}/>
      {User({name:"Francis"})}
    </header>
  )
}

```

EJS => <% %>
EJS => <%= %>

<header> -> React.createElement('header', ...)

url, method, data, dataType, cors, headers

const ajaxQuery = (url, method, data, dataType, cors, headers) => {

}

ajaxQuery("http://google.com")
ajaxQuery("http://google.com", null, null, null, null, headerObj)

const betterAjaxQuery = (opts) => {

}

betterAjaxQuery({url:"", headers:""})
