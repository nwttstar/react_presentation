import styled from 'styled-components';
import HeadingView from 'components/atoms/HeadingView';

interface Props {
  heading: string;
};

const ViewHead = (props: Props) => {
  return (
    <HeadingView>
      {props.heading}
    </HeadingView>
  );
}

export default ViewHead;
