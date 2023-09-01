import { useState } from "react";

const useCalculator=()=>{
    const [text, setText] = useState('');
    const [result, setResult] = useState('');
    const [lastletter,setLastletter]=useState('');
  
    const clear = () => {
      const updatedText = '';
      setText(updatedText);
      setResult(updatedText);
    };
    const percent = () => {
      const letter=text.substring(text.length - 1);
      if(letter==='%'||letter==='/'||letter==='*'||letter==='-'||letter==='+'||letter==='.' ||text===''){
        const newLetter = '%';
        const updatedText = text ;
        setText(updatedText);
      }
      else if(result) {
        const newLetter = '%';
        const updatedText = result + newLetter;
        setText(updatedText);
      }
      else{
        const newLetter = '%';
        const updatedText = text + newLetter;
        setText(updatedText);
      }
    };
    const backspace = () => {
       const updatedText = text.substring(0, text.length - 1);
       setText(updatedText);
    };
    const divide = () => {
      const letter=text.substring(text.length - 1);
      if(letter==='%'||letter==='/'||letter==='*'||letter==='-'||letter==='+'||letter==='.' ||text===''){
        const newLetter = '/';
        const updatedText = text ;
        setText(updatedText);
      }
      else if(result) {
        const newLetter = '/';
        const updatedText = result + newLetter;
        setText(updatedText);
      }
      else{
        const newLetter = '/';
        const updatedText = text + newLetter;echo "# calculatorreact" >> README.md
        setText(updatedText);
      }
    };
    const seven = () => {
      const newLetter = '7';
      const updatedText = text + newLetter;
      setText(updatedText);
    };
    const eight = () => {
      const newLetter = '8';
      const updatedText = text + newLetter;
      setText(updatedText);
    };
    const nine = () => {
      const newLetter = '9';
      const updatedText = text + newLetter;
      setText(updatedText);
    };
    const multiply = () => {
      const letter=text.substring(text.length - 1);
      if(letter==='%'||letter==='/'||letter==='*'||letter==='-'||letter==='+'||letter==='.' ||text===''){
        const newLetter = '*';
        const updatedText = text ;
        setText(updatedText);
      }
      else if(result) {
        const newLetter = '*';
        const updatedText = result + newLetter;
        setText(updatedText);
      }
      else{
        const newLetter = '*';
        const updatedText = text + newLetter;
        setText(updatedText);
      }
    };
    const four= () => {
      const newLetter = '4';
      const updatedText = text + newLetter;
      setText(updatedText);
    };
    const five = () => {
      const newLetter = '5';
      const updatedText = text + newLetter;
      setText(updatedText);
    };
    const six= () => {
      const newLetter = '6';
      const updatedText = text + newLetter;
      setText(updatedText);
    };
    const substract = () => {
      const letter=text.substring(text.length - 1);
      if(letter==='%'||letter==='/'||letter==='*'||letter==='-'||letter==='+'||letter==='.' ||text===''){
        const newLetter = '-';
        const updatedText = text ;
        setText(updatedText);
      }
      else if(result) {
        const newLetter = '-';
        const updatedText = result + newLetter;
        setText(updatedText);
      }
    
      else {
        const newLetter = '-';
        const updatedText = text + newLetter;
        setText(updatedText);
      }
    };
    const one = () => {
      const newLetter = '1';
      const updatedText = text + newLetter;
      setText(updatedText);
    };
    const two = () => {
      const newLetter = '2';
      const updatedText = text + newLetter;
      setText(updatedText);
    };
    const three = () => {
      const newLetter = '3';
      const updatedText = text + newLetter;
      setText(updatedText);
    };
    const add = () => {
      const letter=text.substring(text.length - 1);
      if(letter==='%'||letter==='/'||letter==='*'||letter==='-'||letter==='+'||letter==='.' ||text===''){
        const newLetter = '+';
        const updatedText = text ;
        setText(updatedText);
      }
      else if(result) {
        const newLetter = '+';
        const updatedText = result + newLetter;
        setText(updatedText);
      }
      else{
        const newLetter = '+';
        const updatedText = text + newLetter;
        setText(updatedText);
      }
    };
    const doublezero = () => {
      const letter=text.substring(text.length - 2);
      if(text==='0'||text==='00'||letter==='%0'||letter==='/0'||letter==='*0'||letter==='-0'||letter==='+0'){
        const newLetter = '0';
        const updatedText = text ;
        setText(updatedText);
      }
      else{
      const newLetter = '00';
      const updatedText = text + newLetter;
      setText(updatedText);
      }
    };
    const zero = () => {
      const letter=text.substring(text.length - 2);
      if(text==='0'||letter==='%0'||letter==='/0'||letter==='*0'||letter==='-0'||letter==='+0'){
        const newLetter = '0';
        const updatedText = text ;
        setText(updatedText);
      }
      else{
      const newLetter = '0';
      const updatedText = text + newLetter;
      setText(updatedText);
      }
    };
    const dot = () => {
      const letter=text.substring(text.length - 1);
      if(letter==='%'||letter==='/'||letter==='*'||letter==='-'||letter==='+'||letter==='.' ||text===''){
        const newLetter = '.';
        const updatedText = text ;
        setText(updatedText);
      }
      else{
        const newLetter = '.';
        const updatedText = text + newLetter;
        setText(updatedText);
      }
    };
    const evaluateing= () => { 
      const letter=text.substring(text.length - 1);
      setLastletter(letter)
      if(letter==='%'||letter==='/'||letter==='*'||letter==='-'||letter==='+'||letter==='.' ||text===''){
        const updatedText = text ;
        setText(updatedText);
      }
      else{
        const evaluate = new Function(`return ${text}`);
        const calculatedResult = evaluate();
        setResult(calculatedResult);
      }

    };
    return{text, setText,result, setResult,lastletter,setLastletter,clear,percent,backspace,divide,seven,eight,nine,multiply,four,five,six,substract,one,two,three,add,doublezero,zero,dot,evaluateing}
}

export default useCalculator;