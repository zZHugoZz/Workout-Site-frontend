import React from "react";

const ExploreResults = ({ results }) => {
  return (
    <>
      <ul>
        {results.map((result) => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    </>
  );
};

export default ExploreResults;
