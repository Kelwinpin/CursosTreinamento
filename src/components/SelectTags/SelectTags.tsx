import cards from 'json/db.json'
import './SelectTags.css'

interface ITags {
  filtraTags: (a: string) => void,
  setItens: React.ComponentState,
  tags:string[]
}


const SelectTags = ({filtraTags, setItens, tags}: ITags) => {
  return (
    <div className={'tags'}>
      <select className={'tagsSelect'}>
        <option value=""></option>
        {tags.map(tag => (<option key={tag} onClick={() => filtraTags(tag)}>{tag}</option>))}
        <option value="todos" onClick={() => setItens(cards)}>Todos</option>
      </select>
    </div>
  )
}

export default SelectTags