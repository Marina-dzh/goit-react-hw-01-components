import styled from '@emotion/styled';

const reuse = `
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.div`  background-color: #d7a6ffd3;
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


export const Name = styled.p`
${reuse};
width:fit-content;
margin-left: auto;
    margin-right: auto;
    font-weight: bold;
    :hover{
        cursor: pointer;
    color: white;}
`;

export const Tag = styled.p`
color:rgba(1, 1, 1, 0.8);
    text-decoration: underline;
     ${reuse}
`;

export const Location = styled.p`
${reuse}
`;

export const Stats = styled.ul`
${reuse};
flex-wrap: wrap;
padding: 0;

`;

export const StatsItem = styled.li`
font-size: smaller;
    background-color: #e8e5e583;
   display: grid;
    border: 1px solid grey;
    border-radius: 8px;
    width: 200px;
    padding: 5px;
    :hover{
        cursor: pointer;
    background-color: #b4282883;
    color: white;
}

`