import React from "react";

export default class ExampleQueries extends React.Component {
  getExampleQueries() {
    return [
      "In courses dataset courses, find entries whose Average is greater than 96; show UUID, Title, Pass, Fail and Average; sort in ascending order by Average.",
      'In courses dataset courses grouped by Department, find entries whose Department is "cpsc"; show Department and avgGrade, where avgGrade is the AVG of Average.',
      'In rooms dataset rooms, find entries whose Short Name is "ESB" and Seats is greater than 100; show Short Name, Number and Seats; sort in ascending order by Seats.',
      "In courses dataset courses, find entries whose Average is greater than 97; show Department and Average; sort in ascending order by Average.",
      'In courses dataset courses, find entries whose Average is greater than 90 and Department is "adhe" or Average is equal to 95; show Department, ID and Average; sort in ascending order by Average.',
      'In courses dataset courses grouped by Department, find entries whose Department is "cpsc"; show Department and avgGrade and cntGrade, where avgGrade is the SUM of Average and cntGrade is the COUNT of Average.',
      'In courses dataset courses, find entries whose UUID is "12186" and Title includes "first nations" or UUID is "2768"; show UUID, ID and Title; sort in ascending order by Title.',
    ];
  }

  render() {
    return (
      <div className="example-queries">
        <p className="bold">
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
