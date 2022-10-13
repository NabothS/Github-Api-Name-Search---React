import { useEffect, useState } from "react";
import useGithubApi from "../../hooks/useGithubApi";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import "./List.css";
import ListItem from "../ListItem/ListItem";
import Card from "../Card/Card";

const List = ({ username }) => {
  const { isLoading, data, error } = useGithubApi(
    `https://api.github.com/search/users?q=${username}`
  );

  const [currentUser, setCurrentUser] = useState();

  const handleClick = (item) => {
    setCurrentUser(item);
  };

  const handleClose = () => {
    console.log("close");
    setCurrentUser();
  };

  if (isLoading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Error />
      </>
    );
  }

  return (
    <div className="bigContainer">
      <div>
        {data.items.map((item, index) => (
          <div className="itemBox">
            <ListItem
              key={item.login}
              user={item}
              onClick={() => handleClick(item)}
            ></ListItem>
          </div>
        ))}
      </div>
      <div>
        {currentUser && (
          <Card currentUser={currentUser} onClick={handleClose}></Card>
        )}
      </div>
    </div>
  );
};

export default List;
