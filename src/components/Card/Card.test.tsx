import Card from "./Card";
import { render, screen } from "@testing-library/react";

const data = {
  nomeFormacao: "Javascript Backend",
  link: "https://cursos.alura.com.br/formacao-js-backend",
  observacao:
    "Fundamental ver os módulos de objetos e arrays, pois mostram funções nativas no js e como ele funciona debaixo dos panos.",
  imagem: "https://i.im.ge/2023/02/16/apmyBr.nodejs.png",
  tag: ["Backend"],
};

describe("Testes no componente Card", () => {
  it("renderizando corretamente", () => {
    render(<Card key={data.nomeFormacao} data={data} />);
    expect(screen.getByText("Javascript Backend")).toBeDefined();
  });

  it("renderizando o estilo corretamente", () => {
    const { getByRole } = render(<Card key={data.nomeFormacao} data={data} />);
    expect(getByRole).toHaveClass;
  });
});
