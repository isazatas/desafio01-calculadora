
import Input from './components/Input';
import Buttom from './components/Button';
import { Container, Content, Row } from "./styles";
import { useState } from 'react';

const App = () => {

  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');
  
  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  }

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  }

  const handlerSumNumbers = () => {
    if(firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0')
      setOperation('+')
    } else {
      const sum = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }  
  
  const handlerSubNumbers = () => {
    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('-')
    } else {
      const sub = Number(firstNumber) - Number(currentNumber)
      setCurrentNumber(String(sub))
      setOperation('')
    }
  }

  const handlerMulNumbers = () => {
    if(firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0')
      setOperation('*')
    } else {
      const mul = Number(firstNumber) * Number(currentNumber)
      setCurrentNumber(String(mul))
      setOperation('')
    }
  }
 
  const handlerDivNumbers = () => {
    if(firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0')
      setOperation('/')
    } else {
      const div = Number(firstNumber) / Number(currentNumber)
      setCurrentNumber(String(div))
      setOperation('')
    }
  }

  const handlerEquals = () => {
    if(firstNumber !== '0' && operation !== '' && currentNumber !== 0) {
      switch(operation) {
        case '+':
          handlerSumNumbers();
          break;
        case '-':
          handlerSubNumbers();
          break;
        case '*':
          handlerMulNumbers();
          break;
        case '/':
          handlerDivNumbers();
          break;
        default:
          break;
      }
    }
  }


  return (
    <Container>
      <Content>
        <Input value={ currentNumber }/>
          <Row>
            <Buttom label="C" onClick={handleOnClear}/>
            <Buttom label="%" onClick={() => handleAddNumber('%')}/>
            <Buttom label="/" onClick={handlerDivNumbers}/>
            <Buttom label="*" onClick={handlerMulNumbers}/>
          </Row>
          <Row>
            <Buttom label={7} onClick={() => handleAddNumber('7')}/>
            <Buttom label={8} onClick={() => handleAddNumber('8')}/>
            <Buttom label={9} onClick={() => handleAddNumber('9')}/>
            <Buttom label="+" onClick={handlerSumNumbers}/>
          </Row>
          <Row>
            <Buttom label={4} onClick={() => handleAddNumber('4')}/>
            <Buttom label={5} onClick={() => handleAddNumber('5')}/>
            <Buttom label={6} onClick={() => handleAddNumber('6')}/>
            <Buttom label="-" onClick={handlerSubNumbers}/>
          </Row>
          <Row>
            <Buttom label={3} onClick={() => handleAddNumber('3')}/>
            <Buttom label={2} onClick={() => handleAddNumber('2')}/>
            <Buttom label={1} onClick={() => handleAddNumber('1')}/>
            <Buttom label="=" onClick={handlerEquals}/>
          </Row>
      </Content>
    </Container>
  );
}

export default App;
