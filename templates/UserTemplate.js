import Footer from "components/Footer";
import Navbar from "components/Navbar/Navbar";

function UserTemplate(props) {
  const { children } = props;
  return (
    <div>
      <Navbar />
      <div className="bg-cultured">{children}</div>
      <Footer />
    </div>
  );
}

export default UserTemplate;
