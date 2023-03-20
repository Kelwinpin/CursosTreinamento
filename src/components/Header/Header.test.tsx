import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Teste no componente Header", () => {
  it("Renderizando componente Header", () => {
    render(<Header />);
    expect(screen.getByRole("header")).toBeTruthy();
  });
});
