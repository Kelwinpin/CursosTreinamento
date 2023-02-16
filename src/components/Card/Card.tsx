import './Card.css'
import ICard from '../../shared/ICard'

const Card = (card: ICard) => {
    console.log(card.imagem)
    return (
        <div className='container'>
            <a href={card.link}>
            <div className='container-imagem'>
              <img src={card.imagem} alt={`Imagem da formação ${card.nomeFormacao}`} />  
            </div>
            </a> 
            <div className='area-texto'>
                <p className='titulo'>{card.nomeFormacao}</p>
                <p className='observacao'>{card.observacao}</p>
            </div>
        </div>
    )
}

export default Card;