const FormCommon = ({ children, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 600, margin: "auto" }}>
      {children}
    </form>
  );
};

export default FormCommon;
