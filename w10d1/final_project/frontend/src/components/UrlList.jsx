import UrlListItem from "./UrlListItem";

export default function UrlList(props) {
  const { urls } = props;
  const parsedUrls = urls && urls.map((url) => <UrlListItem key={url.id} {...url} />);
  return (
    <div>
      <h1>List of urls</h1>
      <section>{parsedUrls}</section>
    </div>
  );
}
