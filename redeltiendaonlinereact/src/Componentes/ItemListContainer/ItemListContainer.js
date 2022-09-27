import React from "react";
import './ItemListContainer.css';
import imagen1 from './Imagenes/QuesoAzul y SauvignonBlanc.jpeg';


const ItemListContainer = (props) => {
    return (
        <main>
            <div>
                <h1> {props.mensaje} </h1>
            </div>
            <div className="contenido">
                <p>
                    Te dejamos algunos consejos y recomendaciones para ayudarte a elegir la mejor combinación de vinos y quesos. 
                </p>
                <p>
                    La regla principal es que deben complementarse, y no competir entre si!
                </p>
                <p>
                    Primero que nada, hay que tener en cuenta que no todo vino se combina con cualquier queso, 
                </p>
                <p>
                    Tampoco todos los quesos quedan bien con cualquier vino,
                </p>
                <p>
                    Hay que considerar que los sabores deberían complementarse y equilibrarse
                </p>
                <h3> Queso Azul </h3>
                <p>
                    Este tipo de quesos se combinan muy bien con vinos blancos o tintos, robustos y de sabor fuerte 
                </p>
                <p> <span className="negrita"> Te recomendamos un Saugvinon Blanc para combinar con el queso azul </span></p>
                <p>
                <img className="imagenes" src={imagen1} alt="Queso Azul y Sauvignon Blanc"/>
                </p>
            </div>
        </main>
    )
}

export default ItemListContainer