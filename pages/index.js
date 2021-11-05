import Button from "components/Button";
import Container, { HeroCard, TestiCard } from "components/Container";

export default function Home() {
  return (
    <div className="">
      <Container bgColor="bg-gray-300">
        <div className="flex">
          <div className="max-w-3xl flex flex-col space-y-4">
            <h1 className="font-poppins text-4xl font-bold">
              Your on-the-go Business Consultant
            </h1>
            <h4 className="font-nunito text-2xl">
              Search, Chat and get some good advice from the experts. We provide
              you a best consultant you can get.
            </h4>

            <div className="flex space-x-4 ">
              <HeroCard
                image="https://media.istockphoto.com/vectors/search-magnifying-glass-icon-symbol-vector-id1221635138"
                title="Search Consultants"
              />
              <HeroCard
                image="https://media.istockphoto.com/vectors/search-magnifying-glass-icon-symbol-vector-id1221635138"
                title="Chatting with Consultants"
              />
            </div>
          </div>
          <div className="hidden md:block w-3/4 ">
            <img
              className="w-full "
              src="/assets/images/on-the-go.png"
              alt="sign-up"
            />
          </div>
        </div>
      </Container>
      <Container>
        <div className="max-w-3xl flex flex-col space-y-4">
          <h1 className="font-poppins text-4xl font-bold">Why Choose Us?</h1>
          <h4 className="font-nunito text-2xl">
            We provide a good service with credible consultant for your
            business.
          </h4>
        </div>
        <div className="mt-4 hidden lg:flex lg:space-x-4 ">
          <img
            className="max-h-60"
            src="/assets/images/choose-us-1.png"
            alt="vector"
          />
          <img
            className="max-h-60"
            src="/assets/images/choose-us-2.png"
            alt="vector"
          />
        </div>
      </Container>
      <Container bgColor="bg-gray-300">
        <div className="flex justify-center sm:space-x-10">
          <img
            className="max-h-72 hidden sm:block"
            src="/assets/images/consultant.png"
            alt="consultant"
          />
          <div className=" max-w-3xl flex flex-col space-y-4 justify-center">
            <h1 className="font-poppins text-4xl font-bold">
              Become a Consultant
            </h1>
            <h4 className="font-nunito text-2xl">
              Become a consultant today for helping another people.
            </h4>
            <div>
              <Button color="bg-white" textColor="text-black">
                Start Today
              </Button>
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <div className="max-w-3xl flex flex-col space-y-4">
          <h1 className="font-poppins text-4xl font-bold">Testimonials</h1>
          <h4 className="font-nunito text-2xl">
            Some testimonials from our users and consultant.
          </h4>
        </div>
        <div className="flex mt-6 gap-2 justify-start flex-wrap">
          <TestiCard />
          <TestiCard />
          <TestiCard />
          <TestiCard />
        </div>
      </Container>
    </div>
  );
}
