    interface CVData {
    name: string,
    lastName: string,
  }
  
    const cvData : CVData = {
    name: "Aleksander",
    lastName: "Noworolnik",

  }

export const Header = () => {
    return (
    <header className='cv-header'>
<h1> CV { cvData.name } {cvData.lastName }</h1>
</header>
    )
}