import { Card } from "react-bootstrap";

function NewsCard({ newsData, i }) {
  return (
    <Card className="card-style" key={`${i}-card`}>
      <Card.Img
        variant="top"
        src={newsData.urlToImage}
        className="img-style"
        key={`${i}-card-img`}
      />
      <Card.Title className="card-title" key={`${i}-card-title`}>
        {newsData.title}
      </Card.Title>
      <Card.Body key={`${i}-card-body`}>
        <Card.Text key={`${i}-card-text`}>
          {newsData.description}
        </Card.Text>
      </Card.Body>
      {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
    </Card>
  );
}
export default NewsCard;
