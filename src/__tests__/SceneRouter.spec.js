import SceneRouter from "../SceneRouter";
import { renderWithReduxDefault } from "../setupTestComponent";

const setup = renderWithReduxDefault(SceneRouter, { activeNavKey: "custom" });

describe("<SceneRouter />", () => {
  it("renders CustomQueryScene if the activeKey is 'custom'", () => {
    const { getByTestId } = setup();
    expect(getByTestId("custom-query-scene")).toBeInTheDocument();
  });

  it("render EBNFOverviewScene if the activeKey is 'ebnf'", () => {
    const { getByTestId } = setup({ activeNavKey: "ebnf" });
    expect(getByTestId("ebnf-scene")).toBeInTheDocument();
  });
});
