import Card from '../../components/Card'
import Header from '../../components/Header'
import infos from '../../json/db.json'
import imagem from '../../images/frontend.png'
import './Inicio.css'

const Inicio = () => {
    return (
        <>
            <Header/>
            <section>
                <div className='fileiraCards'>
                    {infos.map(info => {
                        return (<Card nomeFormacao={info.nomeFormacao} imagem={imagem} link={info.link} observacao={info.observacao} key={info.nomeFormacao} />)
                    })}
                </div>
            </section>
        </>
    )
}

export default Inicio