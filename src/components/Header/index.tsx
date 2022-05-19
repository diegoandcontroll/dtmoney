import logoImg from '../../assets/logo.svg';
import {Container, Content} from './styles';
interface HeaderProps {
  toggleModal: () => void;
}
export  function Header({toggleModal}: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="logo" />
        <button type='button' onClick={toggleModal}>Nova transação</button>      
      </Content>
    </Container>
  )
}
 