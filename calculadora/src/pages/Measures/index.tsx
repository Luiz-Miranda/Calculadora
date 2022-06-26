import Calculations from "Components/Calculations";
import { useState } from "react";
import { initialMeasures } from "types/measures";




export default function Measures() {




    const [largura, setLargura] = useState<initialMeasures>({ heigth: 0 });
    const [altura, setAltura] = useState<initialMeasures>({width:0})


    const handleWidthInput = (event: { target: { value: any; }; }) => {
        setAltura({
            width: event.target.value,
            

        })
    }
    const handleHeigthInput = (event: { target: { value: any; }; }) => {
        setLargura({
            heigth: event.target.value,
           
        })
    }
    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault()
       
    }
    console.log(largura.width ,largura.heigth,altura.heigth,altura.width)
    return (
        <body>

            <div className="text-center m-5 ">
                <h1 className="fw-bold fst-italic">Persiana Mega 25</h1>
            </div>

            <form className=" fw-bold container" onSubmit={handleSubmit}>
                <div className="form-row align-items-center">
                    <div className="col-4">
                        <label className="largura mt-3" htmlFor="inlineFormInput">Largura</label>
                        <input onChange={handleWidthInput} type="text" className="form-control mb-2" id="inlineFormInput" placeholder="Digite a Largura" />
                    </div>
                    <div className="col-4">
                        <label className="sr-only" htmlFor="inlineFormInputGroup">Altura</label>
                        <div className="input-group mb-2">
                            <input onChange={handleHeigthInput} type="text" className="form-control" id="inlineFormInputGroup" placeholder="Digite a Altura" />
                        </div>
                    </div>
                    <div className="col-4">
                        <button type="submit" className="btn btn-primary mb-2">Calcular</button>
                    </div>
                </div>
            </form>
           
        </body>
    );
}