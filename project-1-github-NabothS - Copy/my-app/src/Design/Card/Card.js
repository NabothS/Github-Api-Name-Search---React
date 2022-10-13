import { useEffect, useState } from "react";
import useGithubApi from "../../hooks/useGithubApi";
import Button from "../Button/Button";
import LoaderAlt from "../Loader/Loader2";

import "./Card.css";

const Card = ({ currentUser , onClick}) => {

    const { isLoading, data, error } = useGithubApi(`https://api.github.com/users/${currentUser.login}/followers`);

    if (isLoading) {
        return (
            <>
            <LoaderAlt />
            </>
       )
    }

  return (
        <div className="Card">
            <div className="CardUser">
                <p><img src={currentUser.avatar_url}></img> {currentUser.login}</p> 
                <Button className={'btnClose'} color="close" onClick={onClick}>X</Button>
            </div>
            {!isLoading && (
                <div className="container">
                    <div>
                        <p className="count">{data.length} Followers</p>
                    </div>
                
                    <div className="followersContainer">
                        {data.map((follower) => (
                            <div className="followerBox">
                                <img src={follower.avatar_url}></img>
                                <p>{follower.login}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
  )
};

export default Card;