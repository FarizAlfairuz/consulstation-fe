function Layout(props) {
  const { children, padding, className, width, space } = props;
  return (
    <div className={`${padding} w-full min-h-screen`}>
      <div className={`${width} mx-auto ${className} ${space}`}>{children}</div>
    </div>
  );
}

Layout.defaultProps = {
  padding: "py-16",
  className: "",
  width: "w-4/5",
  space: "space-y-8"
};

export default Layout;
