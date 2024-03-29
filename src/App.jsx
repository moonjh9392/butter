import styled from 'styled-components';
import MainTop from './components/MainTop';
import MainBottom from './components/MainBottom';

function App() {
  return (
    <MainComponent>
      <MainTop />
      <MainBottom />
    </MainComponent>
  );
}

export default App;

const MainComponent = styled.div`
  section {
    overflow: hidden;
    position: relative;
  }

  color: white;
  background-color: rgb(35, 39, 48);
`;
