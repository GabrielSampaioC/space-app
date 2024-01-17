import styled from "styled-components";
import Titulo from "../Titulo";
import Tags from "./Tags";
import Populares from "./Populares"

const GaleriaContainer = styled.div`
    display:flex;
`
const SecaoFluida = styled.section`
    flex-grow:1;
`

export default function Galeria() {
    return (
        <>
            <Tags />

            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>Navegue pela galeria</Titulo>
                </SecaoFluida>
                <Populares></Populares>
            </GaleriaContainer>

        </>
    )
}