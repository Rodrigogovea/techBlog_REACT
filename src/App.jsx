import { useState } from "react";
import Article from "./components/Article";
import Footer from "./components/Footer";
import Header from "./components/Header"
import Pack from "./components/Pack";
import { db } from "./data/db";

function App() {

const [data, setData] = useState(db)
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
