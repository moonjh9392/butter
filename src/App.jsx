import styled from 'styled-components';
import Top from './components/Top.tsx';
import Bottom from './components/Bottom.tsx';

function App() {
  return (
    <MainComponent>
      <Top />
      <Bottom />
    </MainComponent>
  );
}

export default App;

const MainComponent = styled.div`
  section {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;
  }

  font-size: 30px;
  color: white;
`;
