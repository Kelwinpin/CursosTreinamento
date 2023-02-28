import "./SelectTags.css"

interface ITags {
    handler: (selectedItem: string) => void
    itens: string[]
}

const SelectTags = ({ handler, itens }: ITags) => {
    return (
        <div className={"tags"}>
            <select
                className={"tagsSelect"}
                onChange={(evento) => handler(evento.target.value)}
            >
                <option value="">Todos</option>
                {itens.map((tag) => (
                    <option value={tag} key={tag}>{tag}</option>
                ))}
            </select>
        </div>
    )
}

export default SelectTags
