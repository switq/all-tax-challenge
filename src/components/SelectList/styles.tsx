import styled from "styled-components";

export const SelectListContainer = styled.div`
    display: flex;
    flex-direction: row; /* Alinha os selects lateralmente */
    gap: 16px;
    padding: 16px;
    border-radius: 8px;
    width: 100%;
    max-width: 100%;
    justify-content: center;
    overflow-x: auto; /* Permite rolagem horizontal caso necessário */
`;