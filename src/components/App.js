import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App()
{
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  function handleClick()
  {
    setShowForm((showForm) => !showForm);
  }

  useEffect(function ()
  {
    fetch("http://localhost:3001/toys")
      .then(function (resp)
      {
        return resp.json()
      })
      .then(function (data)
      {
        return setToys(data)
      })
  }, [])

  function addedToys(newToy)
  {
    setToys([...toys, newToy])
  }

  function handleDeletedToy(deletedToy)
  {
    const updatedToys = toys.filter((toy) => toy.id !== deletedToy.id)

    setToys(updatedToys)
  }

  function handleUpdatedToy(updatedToy)
  {
    const updatedToys = toys.map((toy) =>
    {
      if (toy.id === updatedToy.id) {
        return updatedToy
      }
      else {
        return toy
      }
    })
    setToys(updatedToys)
  }
  return (
    <>
      <Header />
      {showForm ? <ToyForm addedToys={addedToys} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} handleDeletedToy={handleDeletedToy} handleUpdatedToy={handleUpdatedToy} />
    </>
  );
}

export default App;
