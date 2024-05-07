import { Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaTrashCan } from "react-icons/fa6";

import { useDispatch, useSelector } from "react-redux";

const Favourites = () => {
  const dispatch = useDispatch();
  const favouriteCompany = useSelector((state) => state.favouriteCompany.content);
  return (
    <ListGroup>
      {favouriteCompany.length > 0 ? (
        favouriteCompany.map((company) => {
          return (
            <ListGroup.Item key={company.id} className="d-flex justify-content-between">
              <Link to={`/${company}`}>{company}</Link>
              <Button
                onClick={() => {
                  dispatch({ type: "REMOVE_FROM_FAVOURITES", payload: company });
                }}
              >
                <FaTrashCan />
              </Button>
            </ListGroup.Item>
          );
        })
      ) : (
        <ListGroupItem>
          <h3>No favourite companies bro...</h3>
        </ListGroupItem>
      )}
    </ListGroup>
  );
};

export default Favourites;
