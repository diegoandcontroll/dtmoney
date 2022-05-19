import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import { Container, TransactionTypeContainer,RadioBox } from './styles';
import { FormEvent, useState } from 'react';
import { api } from '../../services/api';
Modal.setAppElement('#root');
interface TransActionModalProps{
  isOpen: boolean;
  onRequestClose: () => void;
}
export function TransactionModal({isOpen, onRequestClose}: TransActionModalProps) {
  const [type, setType] = useState('deposit');
  const [title,setTitle] = useState('');
  const [value, setValue] = useState(0)
  const [category, setCategory] = useState('')
  function handleCreateNewTransaction(event: FormEvent){
    event.preventDefault();
    const data = {
      title,
      value,
      category,
      type
    }
    api.post('/transactions', data);
  }
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
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input 
        type="text" 
        placeholder='Titulo'
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        />

        <input 
        type="number" 
        placeholder='Valor'
        value={value}
        onChange={(event) => setValue(Number(event.target.value))}
        />
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
        <input 
        type="text" 
        placeholder='Categoria'
        value={category}
        onChange={(event) => setCategory(event.target.value)}
        />

        <button type='submit'>Cadastrar</button>
      </Container>
    </Modal>
  )
}
