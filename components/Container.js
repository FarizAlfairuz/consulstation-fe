import Link from "next/link"

function Container(props) {
  const { children, bgColor } = props;
  return (
    <div className={`w-full py-20 ${bgColor}`}>
      <div className="w-4/5 mx-auto">{children}</div>
    </div>
  );
}

Container.defaultProps = {
  bgColor: "white",
};

export default Container;

export const HeroCard = (props) => {
  const { title, image } = props;
  return (
    <Link href="/consultants">
      <a className="w-28 h-40 bg-white rounded-xl p-3 flex flex-col justify-start items-center space-y-3 hover:cursor-pointer">
        <img className="h-16 w-16 rounded-full" src={image} alt="magnifying" />
        <p className="font-nunito text-sm text-center">{title}</p>
      </a>
    </Link>
  );
};

export const TestiCard = () => {
  return (
    <div className="flex flex-col flex-grow space-y-2 w-60 bg-goldCrayola rounded-xl p-5">
      <img
        className="h-16 w-16 rounded-full"
        src="https://spesialis1.orthopaedi.fk.unair.ac.id/wp-content/uploads/2021/02/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg"
        alt="testi"
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper tempor
        et tortor, aliquet aliquam nunc. Vitae risus vulputate vivamus ut. Ut
        sed dui, dolor sit dui vel.
      </p>
    </div>
  );
};
