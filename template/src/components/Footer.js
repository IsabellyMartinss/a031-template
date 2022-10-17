import React from "react";
import { RedesSociais } from "./RedesSociais";
import { Copywrite } from "./Copywrite";


export function Footer(){
    return (
        <footer>
            <h1 className="Footer">Componente Footer</h1>
            <RedesSociais />
            <Copywrite />
        </footer>
    )
}