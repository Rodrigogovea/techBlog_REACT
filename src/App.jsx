import { useState } from "react";
import Article from "./components/Article";
import Footer from "./components/Footer";
import Header from "./components/Header"
import Pack from "./components/Pack";
import { db } from "./data/db";
import { db2 } from "./data/db2";
 
function App() {

const [data, setData] = useState(db)
const [data2, setData2] = useState(db2)
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
                  {data2.map((pack)=>(
                      <Pack
                      key={pack.id}
                      pack={pack}
                      />
                  )
                  )}
                </ul>
        </aside>
    </div>
    <Footer/>
</>
  );
}
export default App;
