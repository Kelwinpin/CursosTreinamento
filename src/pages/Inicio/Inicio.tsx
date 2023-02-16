import Card from "../../components/Card";
import Header from "../../components/Header";
import cards from "../../json/db.json";
import "./Inicio.css";

const Inicio = () => {
  return (
    <>
      <Header />
      <section>
        <div className="fileiraCards">
          {cards.map((card) => {
            return <Card key={card.nomeFormacao} data={card} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Inicio;
