import React from "react";

export default class NoQueryResultsPrompt extends React.Component {
  getExampleQueries() {
    return [
      "In courses dataset courses, find entries whose Average is greater than 96; show UUID and Average; sort in ascending order by Average.",
      'In courses dataset courses grouped by Department, find entries whose Department is "cpsc"; show Department, and avgGrade, where avgGrade is the AVG of Average.',
      'In rooms dataset rooms, find entries whose Short Name is "ESB" and Seats is greater than 100; show Short Name, Number and Seats; sort in ascending order by Seats.',
      "In courses dataset courses, find entries whose Average is greater than 97; show Department and Average; sort in ascending order by Average.",
      'In courses dataset courses, find entries whose Average is greater than 90 and Department is "adhe" or Average is equal to 95; show Department, ID and Average; sort in ascending order by Average.',
    ];
  }

  render() {
    return (
      <div className="example-queries">
        <p style={{ fontWeight: "bold" }}>
          Some example queries include the following, or review the EBNF below
          for more detail on how to form valid queries.
        </p>
        <p>
          Paste one or more of these in the "Custom query" input to see how it
          works.
        </p>
        <ul>
          {this.getExampleQueries().map((ex, i) => (
            <li key={i}>{ex}</li>
          ))}
        </ul>
      </div>
    );
  }
}
