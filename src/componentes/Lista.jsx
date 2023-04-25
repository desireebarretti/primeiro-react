export default function Lista() {
    const linguagensDeDesirée = [
        { titulo: 'HTML', id: '1' },
        { titulo: 'CSS', id: '2' },
        { titulo: 'JavaScript', id: '3' },
        { titulo: 'React', id: '4' }
    ]

    const linguagens = linguagensDeDesirée.map(linguagem =>
        <li key={linguagem.id}>
            {linguagem.titulo}
        </li>
    )

    return (
        <div> 
            {linguagens}
        </div>
    )
}