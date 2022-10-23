import React from "react";

export const Eventos = () =>{
    const callback = () =>{
        console.log("click");
    };

    return(
        <>
        <button onClick={callback}> Click </button>
        </>

    );
};