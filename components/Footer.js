import Button from "./Button";
import Container from "./Container";

function Footer() {
  return (
    <Container bgColor="bg-gray-400">
      <div className="flex flex-col space-y-10 relative">
        <div className="flex justify-between items-center">
          <div className="font-poppins font-bold text-4xl">
            <div>Consul</div>
            <div>station</div>
          </div>
          <div className="flex space-x-2">
            <div>facebook</div>
            <div>twitter</div>
            <div>youtube</div>
            <div>instagram</div>
          </div>
        </div>
        <div className="flex justify-between items-center font-nunito font-bold text-lg">
          <div className="flex flex-col w-96 space-y-2">
            <div className="flex justify-between">
              <div>about us</div>
              <div>contact us</div>
            </div>
            <div className="flex justify-between">
              <div>customer</div>
              <div>blog</div>
            </div>
          </div>
          <div className="flex flex-col items-end space-y-2 ">
            <div className="font-nunito font-bold text-sm">Are you a consultant?</div>
            <Button color="bg-white" textColor="text-black" padding="px-14 py-2">
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
