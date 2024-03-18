interface Experience {
    year: number,
    description: string,
  }
  
  interface CVData {
    experience: Experience [],
    education: string[],
  }
  
  const cvData : CVData = {
    experience: [
      {year: 2020, description: "Lorem"},
      {year: 2023, description: "Ipsum"},
    ],
    education: [
      "Szkola",
      "Jezykowa",
      "Technikum"
    ]
  }

export const Details = () => {
    return (
<section className='cv-details'>
<h2> Experience </h2>
<ul>
{ cvData.experience.map(experience => (
  <li key= {experience.year}>
    <strong> { experience.year }</strong> - { experience.description }
  </li>
))}
</ul>
<h2> Education </h2>
<ul>
{ cvData.education.map((education, index) =>  <li key= { index }> { education }</li>)}
</ul>
</section>
    )
}