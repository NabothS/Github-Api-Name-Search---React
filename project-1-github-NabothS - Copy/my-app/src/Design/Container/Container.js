import { useEffect, useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import List from "../List/List";
import "./Container.css";

const Container = () => {
  const [user, setUser] = useState("");
  const [currentUser, setCurrentUser] = useState(null);

  const handleChange = (e) => {
    setUser(e.target.value);
  };

  const handleClick = () => {
    if (user.length >= 4) {
      setCurrentUser(user);
      console.log("wow");
    }
  };

  const handleReset = () => {
    setUser("");
    setCurrentUser("");
  };

  return (
    <div className="mainContainer">
      <h2>Zoeken</h2>
      <div className="inputDiv">
        <Input type="text" value={user} onChange={handleChange}></Input>
        <Button className={"btnSearch"} color="primary" onClick={handleClick}>
          Search
        </Button>
        <Button className={"btnReset"} color="secondary" onClick={handleReset}>
          Reset
        </Button>
      </div>
      <div>
        <ul className="ulList">
          {currentUser && <List username={currentUser}></List>}
        </ul>
      </div>
    </div>
  );
};

export default Container;
