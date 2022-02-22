export default function Header(props) {
  const { plantAmount } = props;
  return (
    <header>
      <h1>
        <span>WATER PLANT APP 2000</span>
        {plantAmount && <span> - {plantAmount} plants!</span>}
      </h1>
    </header>
  );
}
