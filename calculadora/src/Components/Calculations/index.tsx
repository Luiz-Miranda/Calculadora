import { PersianaM25, initialMeasures } from "types/measures";
import { useState } from "react";


type Props = {
    medidas: initialMeasures;
    perfis:PersianaM25;
}

export default function Calculations({ medidas,perfis }: Props) {

    const[largura,setLargura]= useState<initialMeasures>()
    const[altura,setAltura]=useState<initialMeasures>({width:0})
    
    function somaAltura() {


        perfis.mg32108 = (perfis.mg32108 *  );
        mg88514 = (mg88514 * inputAltura.value);
        mg32058 = ((mg32058 * 2) * inputAltura.value);
        mg88202 = ((mg88202 * 4) * inputAltura.value);
        mg88039 = ((mg88039 * 3) * inputAltura.value);
        mg88040 = (mg88040 * inputAltura.value);
        mg88041 = ((mg88041 * 2) * inputAltura.value);
        cl050Al = ((cl050 * 2) * inputAltura.value);
        mp347Al = ((mp347 * 2) * inputAltura.value);
        mg32127 = (mg32127 * inputAltura.value);
    
        var somaTotal = 0;
    
        if (inputAltura.value <= 1.7) {
            somaTotal = Math.round(mg32108 + mg88514 + mg32058 + mg88202 + mg88039 + mg88040 + mg88041 + cl050Al + mp347Al) *
                inputValor.value;
        } else {
            somaTotal = Math.round(mg32108 + mg88514 + mg32058 + mg88202 + mg88039 + mg88040 + mg88041 + cl050Al + mp347Al + mg32127 +
                    mg32108) *
                inputValor.value;
        }
    
        return somaTotal;


    return (
        <table className="table table-bordered  border-dark container mt-5">
            <thead>
                <tr>
                    <th scope="col">Materiais</th>
                    <th scope="col">Largura</th>
                    <th scope="col">Altura</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Resultado</td>
                    <td>{}</td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    )
}