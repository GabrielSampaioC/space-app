import styled from "styled-components";
import tags from "./tags.json";

const TituloTags = styled.h3`
    color: #FFFFFF;
    font-size: 24px;
    font-weight: 400;
    line-height:28.8px;
`
const ContainerTags = styled.div`
    display:flex;
    justify-content: flex-start;
    gap: 17px;
    margin: 2em 0;
    align-items: center;
`

const Tag = styled.button`
    font-size: 24px;
    color: #FFFFFF;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid transparent;
    &:hover {
      border-color: #C98CF1;
    }
`

const Tags = () => {
    return (
        <>
            <ContainerTags>
                <TituloTags>Busque por tags:</TituloTags>
                {tags.map(tag => <Tag $ativo key={tag.id}>{tag.titulo}</Tag>)}
            </ContainerTags>
        </>
    )
}   

export default Tags;