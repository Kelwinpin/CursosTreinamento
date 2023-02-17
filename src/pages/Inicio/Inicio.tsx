import Footer from "components/Footer";
import Card from "components/Card";
import Header from "components/Header";
import cards from "json/db.json";
import "./Inicio.css";

const Inicio = () => {
  return (
    <body>
      <Header/>
      <section>
        <div className="fileiraCards">
          {cards.map((card) => {
            return <Card key={card.nomeFormacao} data={card} />;
          })}
        </div>        
      </section>
      <Footer/>
    </body>
  );
};

export default Inicio;
