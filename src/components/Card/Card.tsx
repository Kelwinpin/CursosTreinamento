import MiniCardTags from "components/MiniCardTags"
import "./Card.css"
export interface CardProps {
  data: {
    nomeFormacao: string
    observacao: string
    link: string
    imagem: string
    tag: string[]
  }
}

const Card = ({ data }: CardProps) => {
  return (
    <>
      <div className="container">
        <a href={data.link} target="_blank" rel="noreferrer">
          <section>
            <div className="container-imagem">
              <img
                src={data.imagem}
                alt={`Imagem da formação ${data.nomeFormacao}`}
              />
            </div>
            <div className="titulo">
              <p>{data.nomeFormacao}</p>
            </div>
            <div className="observacao">
              <p>{data.observacao}</p>
            </div>
            <div className="area-tags">
              <p>
                Tags:
                {data.tag.map((tag) => (
                  <MiniCardTags tag={tag} key={tag} />
                ))}
              </p>
            </div>
          </section>
        </a>
      </div>
    </>
  )
}

export default Card
