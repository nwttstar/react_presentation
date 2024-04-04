import styled from 'styled-components';

interface Props {
  className?: string;
  onClick?: (e?: React.MouseEvent<HTMLInputElement>) => void,
  icon: string;
  disabled?: boolean,
};

const Button = styled.button`
  font-size: 48px;
  color: ${props => props.disabled ? '#999' : '#f2f2f2'};
  transition: .2s;

  &:hover {
    opacity: ${props => props.disabled ? '1' : '.6'};
  }
`;

const ButtonPageControl = (props: Props) => {
  const attr: { className: string, onClick?: any, disabled?: boolean } = {
    className: `material-icons ${props.className}`,
  };
  if (props.onClick) attr.onClick = props.onClick;
  if (props.disabled) attr.disabled = props.disabled;

  return (
    <Button {...attr}>
      {props.icon}
    </Button>
  );
}

export default ButtonPageControl;
