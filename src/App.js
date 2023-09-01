import React from 'react';
import './App.css';
import useCalculator from './useCalculator';
function App() {
 const{text,result,clear,percent,backspace,divide,seven,eight,nine,multiply,four,five,six,substract,one,two,three,add,doublezero,zero,dot,evaluateing}=useCalculator();
 
  return (
    <div className='screen'>
      <div className='calculator'>
        <div className='display'>
        <p className='text'>{text}</p>
        <p className='result'>{result}</p>
        </div>
        <div className='buttonss'>
        <img className='clear' onClick={clear} src={require('./img/c.png')} alt="Percent" />
        <img className='percent' onClick={percent} src={require('./img/percent.png')} alt="Percent" />
        <img className='backspace' onClick={backspace} src={require('./img/backspace.png')} alt="Percent" />
        <img className='divide' onClick={divide} src={require('./img/divide.png')}alt="Percent" />
        <img className='seven' onClick={seven} src={require('./img/seven.png')}alt="Percent" />
        <img className='eight' onClick={eight} src={require('./img/eight.png')}alt="Percent" />
        <img className='nine' onClick={nine} src={require('./img/9.png')}alt="Percent" />
        <img className='multiply' onClick={multiply} src={require('./img/multiply-mathematical-sign.png')}alt="Percent" />
        <img className='four' onClick={four} src={require('./img/4.png')}alt="Percent" />
        <img className='five'onClick={five} src={require('./img/five.png')}alt="Percent" />
        <img className='six'onClick={six} src={require('./img/6.png')}alt="Percent" />
        <img className='substract' onClick={substract}src={require('./img/minus.png')}alt="Percent" />
        <img className='one' onClick={one} src={require('./img/one.png')}alt="Percent" />
        <img className='two' onClick={two} src={require('./img/2.png')}alt="Percent" />
        <img className='three' onClick={three}src={require('./img/3.png')}alt="Percent" />
        <img className='add' onClick={add} src={require('./img/plus.png')}alt="Percent" />
        <button className='doublezero' onClick={doublezero}>00</button>
        <img className='zero' onClick={zero} src={require('./img/zero.png')}alt="Percent" />
        <img className='dot' onClick={dot} src={require('./img/full-stop.png')}alt="Percent" />
        <img className='equal' onClick={evaluateing} src={require('./img/equal-mathematical-sign.png')}alt="Percent" />
        </div>
      </div>
    </div>
  );
}

export default App;
