import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import { Container, TransactionTypeContainer,RadioBox } from './styles';
import { useState } from 'react';
Modal.setAppElement('#root');
interface TransActionModalProps{
  isOpen: boolean;
  onRequestClose: () => void;
}
export function TransactionModal({isOpen, onRequestClose}: TransActionModalProps) {
  const [type, setType] = useState('deposit');
  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type='button'>
        <img 
        src={closeImg} 
        alt="" 
        onClick={onRequestClose}
        className="react-modal-close"
        />
      </button>
      <Container>
        <h2>Cadastrar transação</h2>

        <input type="text" placeholder='Titulo'/>

        <input type="number" placeholder='Valor'/>
        <TransactionTypeContainer>
          <RadioBox 
          type='button'
          isActive={type === 'deposit'}
          activeColor='green'
          onClick={() => { setType('deposit');}}
          >
            <img src={incomeImg} alt="" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox 
          type='button'
          isActive={type === 'withdraw'}
          activeColor='red'
          onClick={() => { setType('withdraw');}}
          >
            <img src={outcomeImg} alt="" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>
        <input type="text" placeholder='Categoria'/>

        <button type='submit'>Cadastrar</button>
      </Container>
    </Modal>
  )
}
