import React, { useState } from 'react'
import { Button,ButtonGroup} from 'reactstrap';

function BtnGroup(props: any) {
  const [rSelected, setRSelected]= useState<number>() ;
  return (
    <ButtonGroup >
      {props.answers.map((ans:string,index:number)=>{

return  <Button key={index} color="primary" outline onClick={() => setRSelected(index)} active={rSelected === index}>
{ans}
</Button>

      })}
  
</ButtonGroup>
  )
}

export default BtnGroup