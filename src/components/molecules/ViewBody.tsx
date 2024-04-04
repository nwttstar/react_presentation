interface Props {
  children: React.ReactNode,
};

const ViewBody = (props: Props) => {
  return (
    <div>
      {props.children}
    </div>
  );
}

export default ViewBody;
