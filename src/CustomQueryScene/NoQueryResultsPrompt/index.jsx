import React from "react";

export default class NoQueryResultsPrompt extends React.Component {
  rootStyle = () => ({
    padding: "2rem 0",
    textAlign: "center",
  });

  getExampleQueries() {
    return [
      "In courses dataset courses, find entries whose Average is greater than 96; show UUID and Average; sort in ascending order by Average."
    ];
  }
  
  render() {
    return (
      <div data-testid="NoQueryResultsPrompt" style={this.rootStyle()}>
        <h5>No query results</h5>
        <p>Input a valid query into the field above and submit to query UBC datasets</p>
        <p>Some example queries include the following below, or review the EBNF.</p>
        <ul>  
          {this.getExampleQueries().map(ex => <li>{ex}</li>)}
        </ul>
      </div>
    );
  }
}
