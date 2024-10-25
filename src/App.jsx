import { useState } from "react";
import Article from "./components/Article";
import Footer from "./components/Footer";
import Header from "./components/Header"
import Pack from "./components/Pack";
import { db } from "./data/db";

function App() {

const [data, setData] = useState(db)

const person = [
  {
    name: "Rodrigo",
    lName: "Govea",
    Edad: 37
  },
  {
    name: "Juan",
    lName: "Galvez",
    Edad: 37
  },
  {
    name: "Pedro",
    lName: "Ramirez",
    Edad: 37
  },
  {
    name: "Salma",
    lName: "Del toro",
    Edad: 37
  }
]
for(var i = 0; i<person.length; i++){
console.log(person[i]);
}

person.map ((people) => console.log(people));

  return (
    <>

    <Header/>

    <div className="contenedor contenido-principal">
        <main className="blog">
            <h3 className="centrar-texto">Blog</h3>



            {data.map((article)=>(
              <Article
                key={article.id}
                article={article}
              />
            )
            )}
            

        </main>

        <aside className="sidebar">
            <h3>Paquetes fotográficos</h3>
                <ul className="paquetes no-padding">
                  <Pack/>
                  <Pack/>
                </ul>
        </aside>
    </div>

    <Footer/>
</>
  );
}
export default App;
