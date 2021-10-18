function Layout(props) {
  const { children, padding } = props;
  return (
    <div className={`${padding} w-full min-h-screen`}>
      <div className="w-4/5 mx-auto">{children}</div>
    </div>
  );
}

Layout.defaultProps = {
  padding: "py-16",
};

export default Layout;
