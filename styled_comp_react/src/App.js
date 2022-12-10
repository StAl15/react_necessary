import styled from 'styled-components'
import Button from './components/Button';
import Console from './components/Console';
import Flex from './components/Flex';
import Title from './components/Title';

const AppWrapper = styled.div`
width: 100%;
min-height: 100vh;
padding: 2rem;
background: black;
color: white;
`

function App() {
  return (
    <AppWrapper>
      <Flex justify="center">
        <Title color={"green"}>osdjgsjodghos</Title>
      </Flex>

      <Flex direction="column" margin={"10px 0"}>
        <Console />
        <Button color="green" outlined align="flex-end">Send</Button>
      </Flex>

    </AppWrapper>
  );
}

export default App;
