import React from 'react'
import ProyectsCards from './ProyectsCards.jsx'
import nft from "../../images/nft.png"
import doom from "../../images/tingua.png"
import badjoke from "../../images/tatto.png"
import webtributo from "../../images/web.png"
import calculator from "../../images/calculator.png"
import reactapi from "../../images/rick-and-morty-api.png"
function Proyects() {
  
    const cardsData = 
    [
      {"id": 1,
        "proyectName": "Nft Page",
        "proyectImage": nft,
        "alt": "Nft page image",
        "repolink": "https://github.com/Andreinavlqz/Pagina-Nft",
        "deployment": "https://meek-faloodeh-9d8771.netlify.app/"},
      {"id": 2,
        "proyectName": "tingua",
        "proyectImage": doom,
        "alt": "Whell Of Doom image",
        "repolink": "https://github.com/Andreinavlqz/TINGUA",
        "deployment": "https://wheel-of-doom-proyect.netlify.app/"},
      {"id": 3,
        "proyectName": "Page tatto",
        "proyectImage": badjoke,
        "alt": "Bad Joke Generator Image",
        "repolink": "https://github.com/Andreinavlqz/Tatto",
        "deployment": "https://andreinavlqz.github.io/Tatto/"},
      {"id": 4,
        "proyectName": "web tributo",
        "proyectImage": webtributo,
        "alt": "Web tributo",
        "repolink": "https://github.com/Andreinavlqz/web-tributo",
        "deployment": "https://andreinavlqz.github.io/web-tributo/"},
      {"id": 5,
        "proyectName": "Calculator JS",
        "proyectImage": calculator,
        "alt": "Calculator JS image",
        "repolink": "https://github.com/Andreinavlqz/calculadora-javascript",
        "deployment": "https://andreinavlqz.github.io/calculadora-javascript/"},
      {"id": 6,
        "proyectName": "React Api Consume",
        "proyectImage": reactapi,
        "alt": "React Api consume image",
        "repolink": "https://github.com/Andreinavlqz/rick-and-morty",
        "deployment": "https://andreinavlqz.github.io/rick-and-morty/"}
    ]
    
  return (
    //Procesado de iteracion para la generación de las cards con los datos de cada posicion del objeto cardData
    <div className="cards-generate-map" id="Proyectos">
      {
        cardsData.map(cardData=>{
          return(
            <ProyectsCards 
            key={cardData.id} 
            cardData={cardData}/>
          )
        })
      }
    </div>       
  )
}

export default Proyects