import { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Loading } from "./loading";
import { getTopics } from "../utils/api";
import { useSearchParams } from "react-router-dom";

export const SearchContainer = () => {
  const [topics, setTopics] = useState();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    getTopics().then((data) => {
      setTopics(data);
    });
  }, []);

  const onTopicSelected = (topic) => {
    searchParams.delete("topic");

    if (topic !== "All") {
      searchParams.append("topic", topic);
    }

    setSearchParams(searchParams);
  };

  return (
    <Dropdown onSelect={onTopicSelected} style={{ marginBottom: "10px" }}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Search by topic:
        {searchParams.get("topic") ? ` ${searchParams.get("topic")}` : " All"}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {!topics && <Loading />}

        {topics && (
          <Dropdown.Item eventKey={"All"} key={"All"}>
            All
          </Dropdown.Item>
        )}

        {topics &&
          topics.map((topic) => (
            <Dropdown.Item eventKey={topic.slug} key={topic.slug}>
              {topic.slug}
            </Dropdown.Item>
          ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};
