import Container, { HeroCard, TestiCard } from "components/Container";

export default function Home() {
  return (
    <div className="">
      <Container bgColor="bg-gray-300">
        <div className="max-w-3xl flex flex-col space-y-4">
          <h1 className="font-poppins text-4xl font-bold">
            Your on-the-go Business Consultant
          </h1>
          <h4 className="font-nunito text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quis
            quam duis consequat etiam ornare pulvinar.
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
      </Container>
      <Container>
        <div className="max-w-3xl flex flex-col space-y-4">
          <h1 className="font-poppins text-4xl font-bold">Why Choose Us?</h1>
          <h4 className="font-nunito text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quis
            quam duis consequat etiam ornare pulvinar.
          </h4>
        </div>
        <div className="mt-4 hidden lg:flex lg:space-x-4 ">
          <img
            className="max-h-60"
            src="https://i.kym-cdn.com/entries/icons/facebook/000/023/977/cover3.jpg"
            alt="vector"
          />
          <img
            className="max-h-60"
            src="https://i.kym-cdn.com/entries/icons/facebook/000/023/977/cover3.jpg"
            alt="vector"
          />
        </div>
      </Container>
      <Container bgColor="bg-gray-300">
        <div className="flex justify-center space-x-10">
          <img
            className="max-h-72"
            src="https://www.valentiam.com/hubfs/Images/Blog/What-Does-A-Transfer-Pricing-Consultant-Deliver.jpg"
            alt="consultant"
          />
          <div className="max-w-3xl flex flex-col space-y-4 justify-center">
            <h1 className="font-poppins text-4xl font-bold">
              Become a Consultant
            </h1>
            <h4 className="font-nunito text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quis
              quam duis consequat etiam ornare pulvinar.
            </h4>
            <div>
              <button>Start Today</button>
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <div className="max-w-3xl flex flex-col space-y-4">
          <h1 className="font-poppins text-4xl font-bold">Testimonials</h1>
          <h4 className="font-nunito text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quis
            quam duis consequat etiam ornare pulvinar.
          </h4>
        </div>
        <div className="flex mt-6 space-x-4 justify-start">
          <TestiCard />
          <TestiCard />
          <TestiCard />
          <TestiCard />
        </div>
      </Container>
    </div>
  );
}
