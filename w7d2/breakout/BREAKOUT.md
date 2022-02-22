# Breakout!

## Existential Questions

- Props drilling
- Data flow (top -> bottom)
- Functions in functions

```jsx
const SomeComponent = (props) => {
  const [amountOfClicks, setAmountOfClicks] = useState(0);

  const incrementAmountOfClickByOne = () => setAmountOfClick(amountOfClicks + 1);

  return (
    <div>
      <Header incrementAmountOfClickByOne={incrementAmountOfClickByOne} />
      <button onClick={() => setAmountOfClick(amountOfClicks + 1)}>CLICK ME</button>
      <button onClick={incrementAmountOfClickByOne}>CLICK ME</button>
    </div>
  );
};

const Header = (props) => {
  const { incrementAmountOfClickByOne } = props;

  return <button onClick={incrementAmountOfClickByOne}>CLICK ME</button>;
};
```

```jsx
const bob = { a: 1, b: 2 };

const superBob = { a: 1, b: { wiggle: true } };
```
