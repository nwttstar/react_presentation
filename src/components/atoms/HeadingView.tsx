import styled from 'styled-components';

interface Props {
  children: React.ReactNode,
};

const Heading = styled.h1`
  margin-bottom: 28px;
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  letter-spacing: .1em;
`;

const HeadingView = (props: Props) => {
  return (
    <Heading>
      {props.children}
    </Heading>
  );
}

export default HeadingView;
