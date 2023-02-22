import Footer from "components/Footer";
import Card from "components/Card";
import Header from "components/Header";
import cards from "json/db.json";
import SelectTags from "components/SelectTags";
import "./Inicio.css";
import { useState } from "react";

const Inicio = () => {
  const [itens, setItens] = useState(cards)
  const tags = [...new Set(cards.map((card) => card.tag))]

  const filtraTags = (tag: string) => {
      const cardsFiltrados = cards.filter((card) => { return card.tag === tag });
      {cardsFiltrados.length === 0 ? setItens(cards) : setItens(cardsFiltrados)}
  } 

  return (
    <body>
      <Header />
      <SelectTags handler={filtraTags} itens={tags.sort()} />
      <div className="fileiraCards">
        {itens.map((item) => {
          return <Card key={item.nomeFormacao} data={item} />;
        })}
      </div>
      <Footer />
    </body>
  );
};

export default Inicio;
