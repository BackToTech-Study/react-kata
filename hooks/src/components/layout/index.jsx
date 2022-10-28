import "./layout.css";

const Layout = ({ children, ...props }) => {
  return (
    <>
      <div className="main" {...props}>
        {children}
      </div>
    </>
  );
};

export default Layout;
