import React from 'react'
import { Button,Card,CardHeader,CardBody ,CardTitle,CardText} from 'reactstrap';
import BtnGroup from './BtnGroup';

const QuestionCard = () => {
  return (
    <Card
    className="my-5 w-75 mx-auto"
  style={{
    height: '60vh'
  }}
>
  <CardHeader className='bg-primary'>
   
  </CardHeader>
  <CardBody>
    <CardTitle tag="h2" className="my-2">
     Part Of Speech Questionnaire
    </CardTitle>
    <CardText className="my-5 fs-5">
    What is the part of speech {} ?
    </CardText>
    <BtnGroup answers={["adverb","verb","noun","adjective"]}/>
    <Button className='d-block mx-auto my-5 px-4'>
      Next
    </Button>
  </CardBody>
 
</Card>
  )
}

export default QuestionCard