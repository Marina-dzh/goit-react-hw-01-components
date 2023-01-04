import styled from '@emotion/styled';


export const Container = styled.section`
margin-top: 40px;
  background-color: #ffcea6d2;
    border-radius: 20px;
    padding: 20px;
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    text-align:center;
    min-width: 400px;
    `;

export const StatList = styled.ul`
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
    
    
    `

export const Item = styled.li`

    display: grid;
    gap:10px;
       border: 1px solid grey;
    width: 120px;
    background-color: #f0fd026a;
 padding: 5px;
    `

    export const Label = styled.span`
        font-size: smaller;
    `