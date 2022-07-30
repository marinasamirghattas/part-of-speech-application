
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const LandingPage = () => {
 
    const [words, setWords] = useState();
    const [ranks, setRanks] = useState();

    const getWords = async () => {
      const { data } = await axios("http://localhost:3001/words/");
      setWords(data);
      console.log(data)
    };
  
    const getRanks = async () => {
        const { data } = await axios("http://localhost:3001/rank/");
        setRanks(data);
        console.log(data)
      };

    useEffect(() => {
        getWords();
        getRanks();

    }, []);
  
    return <div style={{"height":"100vh","background":"#f2e08e"}}> 
    <h1 className="py-5 " >Welcome To Part Of Speech Questionnaire</h1>
    <Button color="primary" >  <Link className="text-decoration-none" style={{color:"white"}} to="/Questionnaire">Start Test</Link></Button>
    </div>
  
}

export default LandingPage



