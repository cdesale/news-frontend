export const Error = (props) => {
  const { message } = props;
  return (
    <div>
      <h2>An Error!</h2>
      <p>{message}</p>
    </div>
  );
};
