import React, { useState } from "react";

function ToyCard({ toy, handleDeletedToy, handleUpdatedToy })
{
  const [likeInput, setLikeInput] = useState(toy.likes)

  function handleDeleteClick()
  {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then((res) => res.json())
      .then(() => handleDeletedToy(toy))
  }

  function handleUpdateClick()
  {
    setLikeInput(likeInput + 1)
    const formData = {
      likes: likeInput + 1
    }

    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((updatedToy) => handleUpdatedToy(updatedToy))
  }


  const { name, image, likes } = toy
  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleUpdateClick}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDeleteClick}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
