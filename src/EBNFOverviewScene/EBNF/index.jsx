import React from "react";
import RuleDivider from "./RuleDivider";

export default class EBNF extends React.Component {
  render() {
    return ( 
      <div>
        <p style={{ fontWeight: "bold" }}>The following EBNF defines the structure of the queries that can be input under "Custom query"</p>
        <pre className="ebnf-wrapper">
          <code className="ebnf">
            <RuleDivider>
              QUERY  ::= QUERY_NORMAL || QUERY_AGGREGATE
            </RuleDivider>

            <RuleDivider>
              FILTER ::= 'find all entries' || 'find entries whose ' + (CRITERIA || (CRITERIA + ((' and ' || ' or ') + CRITERIA)*)<br />
            </RuleDivider>

            <RuleDivider>
              QUERY_NORMAL ::= DATASET + ', ' + FILTER + '; ' + DISPLAY(+ '; ' + ORDER)? + '.'<br />
              DATASET      ::= 'In ' + KIND + ' dataset ' + INPUT<br />
              DISPLAY      ::= 'show ' + KEY (+ MORE_KEYS)?<br />
              ORDER        ::= 'sort in ' + ('ascending ' || 'descending ')? + 'order by ' + KEY (+ MORE_KEYS)?<br />
            </RuleDivider>

            <RuleDivider>
              QUERY_AGGREGATE ::= DATASET_GROUPED + ', ' + FILTER + '; ' + DISPLAY_GROUPED(+ '; ' + ORDER_GROUPED)? + '.'<br />
              DATASET_GROUPED ::= DATASET + ' grouped by ' + KEY (+ MORE_KEYS)?<br />
              DISPLAY_GROUPED ::= 'show ' + KEY_C (+ MORE_KEYS_C)? + (', ' + AGGREGATION)?<br />
              ORDER_GROUPED   ::= 'sort in ' + ('ascending ' || 'descending ')? + 'order by ' + KEY_C (+ MORE_KEYS_C)?<br />
              AGGREGATION     ::= 'where ' + AGG_DEF (+ MORE_DEFS)*<br />
            </RuleDivider>

            <RuleDivider>
              AGG_DEF    ::= INPUT + ' is the ' + AGGREGATOR + ' of ' + KEY<br />
              MORE_RULES ::= ((', ' + AGG_DEF +)* ' and ' + AGG_DEF)<br />
              AGGREGATOR ::= 'MAX' || 'MIN' || 'AVG' || 'SUM'<br />
            </RuleDivider>

            <RuleDivider>
              CRITERIA   ::= M_CRITERIA || S_CRITERIA<br />
              M_CRITERIA ::= M_KEY + M_OP + NUMBER<br />
              S_CRITERIA ::= S_KEY + S_OP + STRING<br />
            </RuleDivider>

            <RuleDivider>
              NUMBER   ::= [0-9] + (.)? + [0-9]<br />
              STRING   ::= '"' + [^*"]* + '"' // any string without * or " in it, enclosed by double quotation marks<br />
            </RuleDivider>

            <RuleDivider>
              RESERVED ::= KEYWORD || M_OP || S_OP || AGGREGATOR || KIND<br />
              KEYWORD  ::= 'in' || 'dataset' || 'find' || 'all' || 'show' || 'and' || 'or' || 'sort' || 'by' || 'entries' || 'grouped' || 'where' || 'is' || 'the' || 'of' || 'whose'<br />
              M_OP     ::= 'is ' + ('not ' +)? ('greater than ' || 'less than ' || 'equal to ') + NUMBER<br />
              S_OP     ::= (('is ' + ('not ' +)?) || (('includes ' || 'does not include ') || ('begins' || 'does not begin' || 'ends' || 'does not end' + ' with '))) + STRING<br />
              KIND     ::= 'courses' || 'rooms'<br />
            </RuleDivider>
            
            <RuleDivider>
            INPUT    ::= string of one or more characters. Cannot contain spaces, underscores or equal to RESERVED strings<br />
            </RuleDivider>

            <RuleDivider>
              KEY   ::= M_KEY || S_KEY<br />
              KEY_C ::= KEY || INPUT<br />
              MORE_KEYS   ::= ((', ' + KEY +)* ' and ' + KEY)<br />
              MORE_KEYS_C ::= ((', ' + KEY_C +)* ' and ' + KEY_C)<br />
              M_KEY ::= 'Average' || 'Pass' || 'Fail' || 'Audit' || 'Latitude' || 'Longitude' || 'Seats' || 'Year'<br />
              S_KEY ::= 'Department' || 'ID' || 'Instructor' || 'Title' || 'UUID' || 'Full Name' || 'Short Name' || 'Number' || 'Name' || 'Address' || 'Type' || 'Furniture' || 'Link'<br />
            </RuleDivider>
          </code>
        </pre>
      </div>
    );
  }
}
