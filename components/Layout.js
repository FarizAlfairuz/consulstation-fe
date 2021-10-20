function Layout(props) {
  const { children, padding, className, width } = props;
  return (
    <div className={`${padding} w-full min-h-screen`}>
      <div className={`${width} mx-auto ${className} `}>{children}</div>
    </div>
  );
}

Layout.defaultProps = {
  padding: "py-16",
  className: "",
  width: "w-4/5"
};

export default Layout;
