import { Header } from "./Header"
import { Personal } from "./Personal"
import { Details } from "./Details"
import "./CV.scss"
import { CVData } from "./types"

export const CV = () => { 

    const cvData : CVData = {
        personal: {
            photo: "https://placehold.co/400x400/EEE/31343C?font=montserrat&text=AN",
            name: "Aleksander",
            lastName: "Noworolnik",
            position: "Developer",
        },
        details:{
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
      }
    
    return <main className='cv-main'>
        < Header data={cvData.personal}/>
        < Personal data= {cvData.personal} />
        < Details data= {cvData.details} />
    </main>
    
}