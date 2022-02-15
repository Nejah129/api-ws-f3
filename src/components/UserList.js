import React from "react";
import { Button, Spinner } from "react-bootstrap";
import UserCard from "./UserCard";

const UserList = ({ users, loading }) => {
  return (
    <div>
      {loading ? (
        <div>
          <>
            <Button variant="primary" disabled>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              <span className="visually-hidden">Loading...</span>
            </Button>{" "}
            <Button variant="primary" disabled>
              <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              Loading...
            </Button>
          </>
        </div>
      ) : (
        React.Children.toArray(users.map((el) => <UserCard user={el} />))
      )}
    </div>
  );
};

export default UserList;
