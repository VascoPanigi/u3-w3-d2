import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaHeartCirclePlus, FaHeartCircleMinus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES } from "../redux/actions";

const Job = ({ data }) => {
  const dispatch = useDispatch();

  const favourite = useSelector((state) => state.favouriteCompany.content);
  return (
    <Row className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={6}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Col xs={3}>
        {favourite && !favourite.includes(data.company_name) ? (
          <Button onClick={() => dispatch({ type: ADD_TO_FAVOURITES, payload: data.company_name })}>
            <FaHeartCirclePlus />
          </Button>
        ) : (
          <Button onClick={() => dispatch({ type: REMOVE_FROM_FAVOURITES, payload: data.company_name })}>
            <FaHeartCircleMinus />
          </Button>
        )}
      </Col>
    </Row>
  );
};

export default Job;
