
import sweta from '../assets/srpprofessional.jpg';

const Developer = () => {
    return (
      <div>
        <div className="w-full h-full pt-10 pb-32">
          <div className="w-full h-full flex flex-col gap-6 items-center justify-center px-4">
            <h1 className="md:text-6xl text-4xl font-display text-gray-900 text-center">
              Developers
            </h1>
            <p className="text-lg text-center px-6 text-gray-500 max-w-2xl">
              Diverse team of experts dedicated to innovation, collaboration, and
              excellence in delivering exceptional results for our clients.
            </p>
  
            <div className="max-w-[1200px] w-full mx-auto grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8 px-4 pt-6 justify-center items-center">
              {/* Profile Card 1 */}
              <div className="relative flex flex-col items-center">
                <img
                  className="h-[25rem] w-[22rem] object-cover rounded-xl"
                  src={sweta}
                  alt="Sweta  raj patel"
                />
  
                <div className="absolute bottom-[-3rem] left-26 right-0 mx-auto w-[14rem] h-[14rem] bg-gray-100 rounded-full outline outline-[5px] outline-orange-50 hover:outline-lightOrange flex flex-col items-center justify-center shadow-lg">
                  <h2 className="text-2xl font-semibold font-display text-bsDark">
                    Sweta Raj Patel
                  </h2>
                  <h4 className="text-lg text-gray-600 my-2">Full stack Developer
                  </h4>
  
                  {/* Socials */}
                  <div className="flex gap-4 justify-center items-center text-2xl text-white">
                    <div className="flex items-center justify-center p-2 bg-lightOrange rounded-full">
                      <ion-icon name="logo-facebook"></ion-icon>
                    </div>
                    <div className="flex items-center justify-center p-2 bg-lightOrange rounded-full">
                      <ion-icon name="logo-instagram"></ion-icon>
                    </div>
                    <div className="flex items-center justify-center p-2 bg-lightOrange rounded-full">
                      <ion-icon name="logo-whatsapp"></ion-icon>
                    </div>
                    <div className="flex items-center justify-center p-2 bg-lightOrange rounded-full">
                      <ion-icon name="person-circle-outline"></ion-icon>
                    </div>
                  </div>
                </div>
              </div>
  
              {/* Profile Card 2 */}
              <div className="relative flex flex-col items-center">
                <img
                  className="h-[25rem] w-[22rem] object-cover rounded-xl"
                  src="https://images.unsplash.com/photo-1631306006348-f9ed42b1e19a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwzfHxQcm9mZXNzaW9uYWxzJTIwdGVhY2hlcnxlbnwwfDF8fHwxNzMxNTAxNjE2fDA&ixlib=rb-4.0.3&q=80&w=1080"
                  alt="Team-2"
                />
  
                <div className="absolute bottom-[-3rem] left-26 right-0 mx-auto w-[14rem] h-[14rem] bg-gray-100 rounded-full outline outline-[5px] outline-orange-50 hover:outline-lightOrange flex flex-col items-center justify-center shadow-lg">
                  <h2 className="text-2xl font-semibold font-display text-bsDark">
                    Full Name
                  </h2>
                  <h4 className="text-lg text-gray-600 my-2">Designation</h4>
  
                  {/* Socials */}
                  <div className="flex gap-4 justify-center items-center text-2xl text-white">
                    <div className="flex items-center justify-center p-2 bg-lightOrange rounded-full">
                      <ion-icon name="logo-facebook"></ion-icon>
                    </div>
                    <div className="flex items-center justify-center p-2 bg-lightOrange rounded-full">
                      <ion-icon name="logo-instagram"></ion-icon>
                    </div>
                    <div className="flex items-center justify-center p-2 bg-lightOrange rounded-full">
                      <ion-icon name="logo-whatsapp"></ion-icon>
                    </div>
                    <div className="flex items-center justify-center p-2 bg-lightOrange rounded-full">
                      <ion-icon name="person-circle-outline"></ion-icon>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Developer;
  