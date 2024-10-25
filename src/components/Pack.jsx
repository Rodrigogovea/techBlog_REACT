function Pack({pack}) {
    const {price, photos} = pack;
    return(
        <>
           <li className="paquetes__titulo">
             <h4 className="no-margin">Paquete básico fotografía digital</h4>
                    <p className="paquetes--titulo__etiqueta">Precio: <span className="paquetes--titulo__info">${price}</span></p>

                    <p className="paquetes--titulo__etiqueta">Fotos: <span className="paquetes--titulo__info">{photos} pz.</span></p>
                    <a href="paquete1.html" className="boton boton--secundario">Ver paquete</a>
            </li>
        </>
    );
}
export default Pack;