import { renderForTest } from "../../setupTestComponent";
import EBNFOverviewScene from "../index";

const exampleQuery =
  "In courses dataset courses, find entries whose Average is greater than 96; show UUID, Title, Pass, Fail and Average; sort in ascending order by Average.";

describe("<EBNFOverviewScene />", () => {
  it("Should mount without crashing", () => {
    const { getByText } = renderForTest(EBNFOverviewScene)();
    expect(getByText(exampleQuery)).toBeInTheDocument();
  });
});
