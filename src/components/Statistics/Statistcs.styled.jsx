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
     :hover{
        
        box-shadow: 6px 6px 29px 8px rgba(48,48,48,0.47);
    }
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
 :hover{
        cursor: pointer;
    background-color: #fa9e00;
}
    `

    export const Label = styled.span`
        font-size: smaller;
    `