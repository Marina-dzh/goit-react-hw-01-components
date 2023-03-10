import styled from '@emotion/styled';



export const Container = styled.ul`  background-color: #33adfffa;
    border-radius: 20px;
    padding: 20px;
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    text-align:left;
    min-width: 400px;
    :hover{
        
        box-shadow: 6px 6px 29px 8px rgba(48,48,48,0.47);
    }
    `;
export const Item = styled.li`
    background-color: aliceblue;
    border: 1px solid grey;
    padding: 5px 20px;
    border-radius: 8px;
        display: flex;
        align-items: center;
        gap: 20px;
        width: 80%;
         margin-left: auto;
    margin-right: auto;
    :hover{
        cursor: pointer;
    background-color: #9cf6febd;
    
}
    `

