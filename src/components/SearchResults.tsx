import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

interface TitleProps {
  title: string;
}

interface Music {
  id: string;
  title: string;
  link: string;
  artist: {
    id: string;
    name: string;
    [picture: string]: string;
  };
  album: {
    id: string;
    title: string;
    name: string;
    [picture: string]: string;
  };
}

const baseUrl = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";

const SearchResults = ({ title }: TitleProps) => {
  const [data, setData] = useState<Music[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch(baseUrl + title);
      if (response.ok) {
        let fetchedMusic = await response.json();
        setData(fetchedMusic.data);
      }
    };
    fetchData();
  }, []);

  return (
    <Container fluid>
      <h3>{title}</h3>
      <img src={data[0].artist.picture}></img>
      <Row>
        <Col xs={12} sm={6} lg={4}>
          <ul>
            {data.slice(0, 10).map((track) => (
              <li key={track.id}>{track.title}</li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchResults;
