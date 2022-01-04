import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import NewsCard from "../newsCard/newsCard.componants";
import CustomPagination from "../pagination/pagination.componant";
// import { Button, DatePicker, Input, Select } from "antd";
// import { SearchOutlined } from "@ant-design/icons";
import { getData } from "../redux/state";

function Home() {
  const newsData = useSelector((state) => state.News);
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState(1);
  const [data, setData] = useState({
    q: "apple",
    from: "2021-12-16",
    to: "2021-12-16",
    sortBy: "popularity",
    page: activeTab,
    pageSize: 5,
  });

  useEffect(() => {
    console.log(newsData.data.articles);
  }, [newsData]);

  useEffect(() => {
    setData((pre) => {
    const newData = {
      ...pre,
      page: activeTab,
    }
    dispatch(getData(newData));
    return newData;
  });
  }, [activeTab]);

  const handleChange = (e) => {
    setData((pre) => {
      const clone = { ...pre };
      clone.page = 1;
      clone[e.target.name] = e.target.value;
      return clone;
    });
  };

  function result() {
    dispatch(getData(data));
  }

  return (
    <Container className="home">
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} sm={4}>
            <Form.Label>Search</Form.Label>
            <Form.Control
              placeholder="Search"
              name="q"
              onChange={(e) => handleChange(e)}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>From</Form.Label>
            <Form.Control
              name="from"
              type="date"
              defaultValue={data.from}
              onChange={(e) => handleChange(e)}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>To</Form.Label>
            <Form.Control
              name="to"
              type="date"
              defaultValue={data.to}
              onChange={(e) => handleChange(e)}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Sort By</Form.Label>
            <Form.Select
              name="sortBy"
              defaultValue={data.sortBy}
              onChange={(e) => handleChange(e)}
            >
              <option>relevancy</option>
              <option>popularity</option>
              <option>publishedAt</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Page Size</Form.Label>
            <Form.Control
              defaultValue={data.pageSize}
              placeholder="Page Size"
              type="number"
              name="pageSize"
              onChange={(e) => handleChange(e)}
            />
          </Form.Group>
        </Row>
        {newsData.status === "Loading" ? (
          <Button variant="primary" disabled>
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            {"  "} Loading...
          </Button>
        ) : (
          <Button
            variant="primary"
            onClick={result}
            disabled={data.q ? false : true}
          >
            Search
          </Button>
        )}
      </Form>
      {newsData.data.articles
        ? newsData.data.articles.map(
            (dataNews, i) =>
              dataNews && (
                <NewsCard i={i} newsData={dataNews} key={`${i}-key`} />
              )
          )
        : ""}
      {newsData.data.articles ? (
        <div className="news-pagination">
          <CustomPagination
            pageSize={data.pageSize}
            change={(val) => {
              return setActiveTab(val);
            }}
            newsData={newsData.data.totalResults}
            activeTab={activeTab}
          />
        </div>
      ) : (
        ""
      )}
    </Container>
  );
}

export default Home;
    