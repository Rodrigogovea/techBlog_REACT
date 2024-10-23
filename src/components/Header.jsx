function Header (){
    return (
        <>
        <header className="header">
        <div className="sombra">
            <div className="contenedor">
                <div className="barra">
                    <a className="logo" href="index.html">
                        <h1 className="logo__nombre no-margin centrar-texto">My<span className="logo__negrita">PhotoBlog</span></h1>
                        </a>
                        <nav className="navegacion">
                            <a href="eventos.html" className="navegacion__enlace">Eventos</a>
                            <a href="paquetes.html" className="navegacion__enlace">Paquetes</a>
                            <a href="trabajos.html" className="navegacion__enlace">Trabajos</a>
                        </nav>
                    </div> 
                </div>
        
                <div className="header__texto">
                    <h2 className="no-margin">Blog de fotografía</h2>
                    <p className="no-margin">Información relevante del mundo de la fotografía digital</p>
                </div>
            </div>
        </header>
        </>
    );
}
export default Header;