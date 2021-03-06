import Button from "components/Button";
import Layout from "components/Layout";
import useConsultant from "hooks/consultant/useConsultant";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { HashLoader } from "react-spinners";

function ConsProfilePage() {
  const router = useRouter()

  const { id } = router.query

  const { profile, getPublicProfile } = useConsultant()
  useEffect(() => {
    getPublicProfile(id)
  }, [id])

  console.log(profile)

  return profile.loading ? (
    <div className="h-screen w-screen flex justify-center items-center">
      <HashLoader size={60} color="gray" /> 
    </div>
  ) : (
    <Layout>
      <div className="max-w-3xl flex flex-col space-y-4">
        <h1 className="font-poppins text-4xl font-bold">Our Consultant</h1>
        <h4 className="font-nunito text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quis
          quam duis consequat etiam ornare pulvinar.
        </h4>
      </div>

      <div className="bg-gray-200 p-9 rounded-lg space-y-10">
        <div className="flex justify-between ">
          <div className="flex space-x-6">
            <div className="w-36 h-36 rounded-full bg-gray-100 overflow-hidden flex justify-center items-center">
              <img
                className="object-center object-cover h-full w-full"
                src="https://upload.wikimedia.org/wikipedia/commons/8/85/John_Lennon_1969_%28cropped%29.jpg"
                alt="profile"
              />
            </div>
            <div className="flex flex-col justify-between py-2">
              {/* <h4 className="text-heading-3 font-bold">{profile.data.data.firstName + " " + profile.data.data.lastName}</h4> */}
              <h5 className="text-paragraph-heading ">Personal Account</h5>
              <h5 className="text-paragraph-heading ">5 years</h5>
            </div>
          </div>
          <div>
            <Button
              color="bg-transparent"
              textColor="text-black"
              border="border border-black"
            >
              Chat
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-heading-3 font-black">Description</h4>
          <p className="text-paragraph-1 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quis
            quam duis consequat etiam ornare pulvinar.
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="text-heading-3 font-black">Background</h4>
          <p className="text-paragraph-1 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quis
            quam duis consequat etiam ornare pulvinar.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg space-y-8">
          {/* Job position */}
          <div className="flex space-x-8">
            <div className="w-16 h-16 rounded-full bg-gray-100 overflow-hidden flex justify-center items-center">
              <img
                className="object-center object-cover h-full w-full"
                src="https://upload.wikimedia.org/wikipedia/commons/8/85/John_Lennon_1969_%28cropped%29.jpg"
                alt="profile"
              />
            </div>
            <div className="space-y-3">
              <h5 className="text-paragraph-1 font-bold">Job Potition</h5>
              <h6 className="text-sm">Workplace</h6>
              <div className="text-sm">From - until [year] length</div>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                quis quam duis consequat etiam ornare pulvinar.
              </p>
            </div>
          </div>
          <div className="flex space-x-8">
            <div className="w-16 h-16 rounded-full bg-gray-100 overflow-hidden flex justify-center items-center">
              <img
                className="object-center object-cover h-full w-full"
                src="https://upload.wikimedia.org/wikipedia/commons/8/85/John_Lennon_1969_%28cropped%29.jpg"
                alt="profile"
              />
            </div>
            <div className="space-y-3">
              <h5 className="text-paragraph-1 font-bold">Job Potition</h5>
              <h6 className="text-sm">Workplace</h6>
              <div className="text-sm">From - until [year] length</div>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                quis quam duis consequat etiam ornare pulvinar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ConsProfilePage;
