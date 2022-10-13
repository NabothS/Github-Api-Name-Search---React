import { useEffect, useState } from "react";

import "./ListItem.css";

const ListItem = ({ user , onClick}) => {

  return (
        <div className="itemBar" onClick={onClick}>
        <img src={user.avatar_url}></img>
        <p>{user.login}</p>
    </div>

  )
};

export default ListItem;