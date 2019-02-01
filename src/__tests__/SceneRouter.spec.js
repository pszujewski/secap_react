import SceneRouter from "../SceneRouter";
import { renderWithReduxStore } from "../setupTestComponent";

const setup = renderWithReduxStore(SceneRouter, null, {
  activeNavKey: "custom",
});

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
