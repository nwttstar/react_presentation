import styled from 'styled-components';

interface Props {
  currentPage: number,
  maxPage: number,
};

const Div = styled.div`
  color: #eee;
`;

const InfoPageNum = (props: Props) => {
  return (
    <Div>
      {props.currentPage} / {props.maxPage}
    </Div>
  );
}

export default InfoPageNum;
