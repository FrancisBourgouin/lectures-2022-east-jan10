// {
//   "id": 1,
//   "short_url": "bok22o",
//   "long_url": "http:google.com",
//   "description": "It's google",
//   "created_at": "2022-03-14T15:55:58.193Z",
//   "updated_at": "2022-03-14T15:55:58.193Z"
// }

export default function UrlListItem(props) {
  const { short_url, long_url, description } = props;
  return (
    <div>
      <h1>{description}</h1>
      <p>{short_url}</p>
      <p>{long_url}</p>
    </div>
  );
}
