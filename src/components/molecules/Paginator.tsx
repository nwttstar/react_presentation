import styled from 'styled-components';
import { useContexts } from 'context';
import InfoPageNum from 'components/atoms/InfoPageNum';
import ButtonPageControl from 'components/atoms/ButtonPageControl';

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const Paginator = () => {
  const { page, maxPage, increment, decrement } = useContexts();
  const disabledBeforeButton = (page <= 1) && true;
  const disabledNextButton = (page >= maxPage) && true;
  
  return (
    <Div>
      <ButtonPageControl
        onClick={decrement}
        icon="navigate_before"
        disabled={disabledBeforeButton}
      />
      <InfoPageNum
        currentPage={page}
        maxPage={maxPage}
      />
      <ButtonPageControl
        onClick={increment}
        icon="navigate_next"
        disabled={disabledNextButton}
      />
    </Div>
  );
}

export default Paginator;
