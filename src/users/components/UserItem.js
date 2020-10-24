import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const UserItemStyled = styled.li`
  list-style: none;

  .userCard {
    width: 300px;
  }

  .userLink {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.9);
    text-decoration: none;

    &:hover {
      background: rgba(200, 165, 12, 0.9);
    }
  }

  .userAvatar {
    width: calc(50% - 10px);
    margin-right: 10px;

    &__container {
      width: 100px;
      height: 100px;
      margin: 2rem auto;
      border-radius: 50%;
      overflow: hidden;
    }

    img {
      width: 100%;
      max-width: 100%;
      height: 100%;
    }
  }

  .userData {
    width: calc(50% - 10px);
    margin-left: 10px;

    h2 {
      color: #fff;
      margin: 0;
    }

    h3 {
      color: #fff;
      margin: 0;
    }
  }
`;

const UserItem = (props) => {
  return (
    <UserItemStyled>
      <div className="userCard">
        <Link className="userLink" to={`/${props.id}/places`}>
          <div className="userAvatar">
            <div className="userAvatar__container">
              <img src={props.image} alt={props.name} />
            </div>
          </div>
          <div className="userData">
            <h2>{props.name}</h2>
            <h3>
              {props.placeCount} {props.placeCount === 1 ? "place" : "places"}
            </h3>
          </div>
        </Link>
      </div>
    </UserItemStyled>
  );
};

export default UserItem;
