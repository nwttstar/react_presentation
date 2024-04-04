import styled from 'styled-components';
import Paginator from 'components/molecules/Paginator';

const Div = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
  max-height: 80px;
  background-color: #666;
`;

const Controller = () => {
  return (
    <Div>
      <Paginator />
    </Div>
  );
}

export default Controller;
