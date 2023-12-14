import Dropdown from "react-bootstrap/Dropdown";
import { useSearchParams } from "react-router-dom";

export const SortByContainer = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const onSortSelected = (eventKey) => {
    searchParams.delete("sort_by");
    searchParams.delete("order");
    console.log(eventKey);

    if (eventKey === "votes-asc") {
      searchParams.append("sort_by", "votes");
      searchParams.append("order", "ASC");
    } else if (eventKey === "votes-desc") {
      searchParams.append("sort_by", "votes");
      searchParams.append("order", "DESC");
    } else if (eventKey === "comment_count-asc") {
      searchParams.append("sort_by", "comment_count");
      searchParams.append("order", "ASC");
    } else if (eventKey === "comment_count-desc") {
      searchParams.append("sort_by", "comment_count");
      searchParams.append("order", "DESC");
    } else if (eventKey === "created_at-asc") {
      searchParams.append("sort_by", "created_at");
      searchParams.append("order", "ASC");
    } else if (eventKey === "created_at-desc") {
      searchParams.append("sort_by", "created_at");
      searchParams.append("order", "DESC");
    }
    setSearchParams(searchParams);
  };

  return (
    <Dropdown onSelect={onSortSelected} style={{ marginBottom: "10px" }}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Sort By
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item eventKey={"None"} key={"None"}>
          None
        </Dropdown.Item>
        <Dropdown.Item eventKey={"votes-asc"} key={"votes-asc"}>
          Vote Ascending
        </Dropdown.Item>
        <Dropdown.Item eventKey={"votes-desc"} key={"votes-desc"}>
          Vote Descending
        </Dropdown.Item>

        <Dropdown.Item eventKey={"comment_count-asc"} key={"comment_count-asc"}>
          Comment count Ascending
        </Dropdown.Item>
        <Dropdown.Item
          eventKey={"comment_count-desc"}
          key={"comment_count-desc"}
        >
          Comment count Descending
        </Dropdown.Item>

        <Dropdown.Item eventKey={"created_at_count-asc"} key={"created_at-asc"}>
          Created_at Ascending
        </Dropdown.Item>
        <Dropdown.Item eventKey={"created_at-desc"} key={"created_at-desc"}>
          Created_at Descending
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
