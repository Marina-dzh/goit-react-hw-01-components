import styled from '@emotion/styled';

const border = `
border: 1px solid;
border-collapse: ;
padding:4px;

`

export const Table = styled.table`
 ${border}
 width: 60%;
   margin-left: auto;
    margin-right: auto;
    text-align:center;
    min-width: 400px;
    border-radius: 8px;
    
`
export const Th= styled.th`
    ${border};
    
    padding: 30px;
    background-color:	#00FF00;
    
`
export const Td= styled.td`
    ${border}
    padding: 20px;
   
`
export const Tr= styled.tr`
    :nth-of-type(odd){
      background-color: #08f90066;   
    };
    :nth-of-type(even) {
  background-color: #03f7be81;

}
:hover{
        cursor: pointer;
    background-color: #289db4;
    color: white;
}
`
// export const = styled.div`
    
// `