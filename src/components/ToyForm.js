import React, { useState } from "react";

function ToyForm({ addedToys })
{
  const [nameInput, setNameInput] = useState("")
  const [imageInput, setImageInput] = useState("")
  function handleNameChange(evt)
  {
    setNameInput(evt.target.value)
    console.log(evt.target.value)
  }
  function handleImageChange(evt)
  {
    setImageInput(evt.target.value)
  }

  function formSubmit(e)
  {
    e.preventDefault()
    const formData = {
      name: nameInput,
      image: imageInput,
      likes: 0
    }
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((newData) => addedToys(newData))
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={formSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={handleNameChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={handleImageChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
