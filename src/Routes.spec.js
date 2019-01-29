import Routes from "./Routes";
import { renderForTest } from "./setupTestComponent";

const setup = renderForTest(Routes, { activeNavKey: "custom" });

describe("<Routes />", () => {
  it("renders CustomQueryScene if the activeKey is 'custom'", () => {
    const { getByTestId } = setup();
    expect(getByTestId("custom-query-scene")).toBeInTheDocument();
  });

  it("render EBNFOverviewScene if the activeKey is 'ebnf'", () => {
    const { getByTestId } = setup({ activeNavKey: "ebnf" });
    expect(getByTestId("ebnf-scene")).toBeInTheDocument();
  });
});
