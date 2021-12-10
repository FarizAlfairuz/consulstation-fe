import Button from "./Button";
import Container from "./Container";

function Footer() {
  return (
    <Container bgColor="bg-white">
      <div className="flex flex-col space-y-10 relative">
        <div className="flex flex-wrap gap-4 justify-center sm:justify-between items-center">
          <div className="font-poppins font-bold text-4xl">
            <div>Consul</div>
            <div>station</div>
          </div>
          <div className="flex flex-wrap justify-between sm:justify-end space-x-2 ">
            <a href="https://www.facebook.com/">Facebook</a>
            <a href="https://twitter.com/home">Twitter</a>
            <a href="https://www.youtube.com/">Youtube</a>
            <a href="https://www.instagram.com/">Instagram</a>
          </div>
        </div>
        <div className="flex justify-center sm:justify-between flex-wrap gap-4 items-center font-nunito font-bold text-lg">
          <div className="flex flex-col flex-wrap w-96 space-y-2">
            <div className="flex flex-wrap gap-2 justify-center sm:justify-between">
              <div>About Us</div>
              <div>Contact Us</div>
            </div>
            <div className="flex flex-wrap gap-2 justify-center sm:justify-between">
              <div>Customer</div>
              <div>Blog</div>
            </div>
          </div>
          <div className="flex flex-col items-center sm:items-end space-y-2 ">
            <h6 className="font-nunito font-bold text-sm">Are you a consultant?</h6>
            <Button padding="px-6 py-1 sm:px-14 sm:py-2">
              Register
            </Button>
          </div>
        </div>
        <div className=" w-1/2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant
          adipiscing id sit nulla lorem nec.
        </div>
        <div className=" w-1/2">
          © 2021 Consulstation, Inc., All Rights Reserved.
        </div>
        <div className="w-1/2 flex space-x-4">
          <div>Ads</div>
          <div>Privacy Policy</div>
          <div>Terms of Use</div>
        </div>
      </div>
    </Container>
  );
}

export default Footer;
