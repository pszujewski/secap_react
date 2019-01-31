import React from "react";
import Prompt from "../../components/Prompt";

export default class NoQueryResultsPrompt extends React.Component {
  getExampleQueries() {
    return [
      "In courses dataset courses, find entries whose Average is greater than 96; show UUID and Average; sort in ascending order by Average.",
    ];
  }

  render() {
    return (
      <Prompt
        header="No query result"
        body="Input a valid query into the field above and submit to query UBC datasets">
        <div>
          <p>
            Some example queries include the following below, or review the
            EBNF.
          </p>
          <ul>
            {this.getExampleQueries().map((ex, i) => (
              <li key={i}>{ex}</li>
            ))}
          </ul>
        </div>
      </Prompt>
    );
  }
}
