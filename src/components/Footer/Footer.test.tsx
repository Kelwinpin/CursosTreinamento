import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "./Footer";

describe("Teste no componente Footer", () => {
  it("Renderizando corretamente", () => {
    render(<Footer />);
    expect(screen.getByText("@Kelwin Pinheiro - repo")).toBeDefined();
  });
});
