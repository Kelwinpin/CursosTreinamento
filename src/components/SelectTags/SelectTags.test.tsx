import { render, screen } from "@testing-library/react";
import SelectTags from "./SelectTags";

const data = {
  handler: (selectedItem: string) => {
    selectedItem;
  },
  itens: ["Teste", "Backend", "Frontend"],
};

describe("Teste no componente SelectTags", () => {
  it("Renderizando componente SelectTags corretamente", () => {
    render(<SelectTags itens={data.itens} handler={data.handler} />);
    expect(screen.getByRole("tagsSelector")).toBeDefined();
  });
});
