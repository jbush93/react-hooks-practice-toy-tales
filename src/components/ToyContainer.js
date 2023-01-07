import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, handleDeletedToy, handleUpdatedToy })
{
  console.log(toys)
  const mappedToys = toys.map(function (toy)
  {
    return <ToyCard toy={toy} handleDeletedToy={handleDeletedToy} handleUpdatedToy={handleUpdatedToy} />
  }
  )

  return (
    <div id="toy-collection">{mappedToys}</div>
  );
}

export default ToyContainer;
