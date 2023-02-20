import "./Card.css";

export interface CardProps {
  data: {
    nomeFormacao: string;
    observacao: string;
    link: string;
    imagem: string;
    tag:string;
  };
}

const Card = ({ data }: CardProps) => {
  return (
    <div className="container">
      <a href={data.link} target="_blank" rel="noreferrer" >
        <div className="container-imagem">
          <img
            src={data.imagem}
            alt={`Imagem da formação ${data.nomeFormacao}`}
          />
        </div>
      <div className="area-texto">
        <p className="titulo">{data.nomeFormacao}</p>
        <p className="observacao">{data.observacao}</p>
      </div>
      </a>
    </div>
  );
};

export default Card;
