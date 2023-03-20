import { render, screen } from "@testing-library/react";
import MiniCardTags from "./MiniCardTags";

const data = {
  tag: "teste",
};

describe("Teste no componente minicard", () => {
  it("Renderizando componete MiniCArdTags", () => {
    render(<MiniCardTags tag={data.tag} />);
    expect(screen.getByRole("tagQueue")).toBeDefined();
  });
});
