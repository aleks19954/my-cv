import { CVPersonal } from "../types"

type Props = {
    data: CVPersonal
}

export const Header = ({data:{name,lastName}} : Props) => {
    return (
    <header className='cv-header'>
<h1> CV { name } {lastName }</h1>
</header>
    )
}