import styled from 'styled-components';
import { useContexts } from 'context';
import ViewBody from 'components/molecules/ViewBody';
import ViewHead from 'components/molecules/ViewHead';
import contents from 'contents';

const containerWidth = '800px';
const containerHeight = '600px';

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 80px;
  width: 100%;
  height: 100vh;
  min-width: ${containerWidth};
  min-height: ${containerHeight};
  background-color: #444;
`;

const Container = styled.div`
  padding: 40px 60px;
  width: ${containerWidth};
  max-width: ${containerWidth};
  height: 100%;
  max-height: ${containerHeight};
  background-color: #fcfcfc;
`;

const View = () => {
  const { page } = useContexts();
  const content = contents[page - 1];
  return (
    <Wrap>
      <Container className="view">
        <ViewHead heading={content.heading} />
        <ViewBody>
          {content.body}
        </ViewBody>
      </Container>
    </Wrap>
  );
}

export default View;
