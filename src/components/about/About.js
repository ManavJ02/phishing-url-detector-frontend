import React from "react";
import "./about.css";
function Feature() {
  return (
    <div className="bg-base-200 p-2">
      <div className="card bg-base-300 rounded-box p-2 m-2">
        <h1 className="text-4xl font-semibold text-sky-400/75 p-2">
          About the application
        </h1>
        <p className="p-5 text-lg">
          Welcome to Team Oliver's innovative phishing URL detector web
          application! Our dedicated team of aspiring developers crafted this
          tool as a minor project with a major impact. Powered by cutting-edge
          algorithms, our application swiftly identifies malicious URLs,
          safeguarding users from phishing attacks. With a sleek interface and
          lightning-fast detection, users can navigate the web with confidence,
          knowing they're protected against online threats. Join us in our
          mission to promote cybersecurity and empower internet users to browse
          securely. Together, let's make the digital world a safer place, one
          click at a time."
        </p>
      </div>
      <div className="card bg-base-300 rounded-box p-2 m-2">
        {/* <h1 className="text-4xl font-semibold text-sky-400/75">Feature</h1> */}
        <div className="flex w-full flex-col lg:flex-row">
          {/* <div className="grid h-32 flex-grow card bg-base-300 rounded-box place-items-center text-center">
            <h1>Candidate Image</h1>
            RAJ PATERIYA
          </div> */}
          <div className="card bg-base-300 rounded-box p-2 m-2">
            <h1 className="text-4xl font-semibold text-sky-400/75 p-1">
              Let's meet the team
            </h1>
            <div className="flex">
              <p className="p-5 text-lg">
                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <div className="flex justify-center">
                        <img
                          class="w-20 h-20 rounded-full m-3"
                          src="boy.png"
                          alt="Raj Profile"
                        />
                      </div>
                      <p class="title">Raj Pateriya</p>
                      <p class="sub-title">MERN Stack Developer</p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Numquam, placeat eaque sint eligendi, accusantium
                        sed itaque impedit molestias molestiae expedita quasi
                        magni repellat non error consectetur cum vero at?
                        Repudiandae.
                      </p>
                    </div>
                    <div class="flip-card-back">
                      <p class="title">About Raj</p>
                      <p>Resume</p>
                    </div>
                  </div>
                </div>
              </p>
              <p className="p-5 text-lg">
                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <div className="flex justify-center">
                        <img
                          class="w-20 h-20 rounded-full m-3"
                          src="boy.png"
                          alt="Raj Profile"
                        />
                      </div>
                      <p class="title">Pranjal Gupta</p>
                      <p class="sub-title">MERN Stack Developer</p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Numquam aspernatur, recusandae aperiam dignissimos
                        modi vero similique tenetur natus consectetur facere
                        soluta magni veniam doloribus provident adipisci quod,
                        quam animi? Nostrum?
                      </p>
                    </div>
                    <div class="flip-card-back">
                      <p class="title">About Pranjal</p>
                      <p>Resume</p>
                    </div>
                  </div>
                </div>
              </p>
              <p className="p-5 text-lg">
                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <div className="flex justify-center">
                        <img
                          class="w-20 h-20 rounded-full m-3"
                          src="boy.png"
                          alt="Raj Profile"
                        />
                      </div>
                      <p class="title">Manav Joshi</p>
                      <p class="sub-title">MERN Stack Developer</p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Molestiae tempora, sed commodi dolores eos neque
                        deleniti quaerat explicabo perferendis consequatur ea
                        iste quis dolorem, maiores repellendus. Ullam cum
                        consequatur itaque.
                      </p>
                    </div>
                    <div class="flip-card-back">
                      <p class="title">About Manav</p>
                      <p>Resume</p>
                    </div>
                  </div>
                </div>
              </p>
              <p className="p-5 text-lg">
                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <div className="flex justify-center">
                        <img
                          class="w-20 h-20 rounded-full m-3"
                          src="boy.png"
                          alt="Raj Profile"
                        />
                      </div>
                      <p class="title">Muskan Thakur</p>
                      <p class="sub-title">MERN Stack Developer</p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Assumenda sunt deleniti alias incidunt cupiditate
                        consectetur modi beatae dignissimos. Quod blanditiis
                        mollitia dignissimos repellat quas iusto iure esse
                        laboriosam repudiandae laborum!
                      </p>
                    </div>
                    <div class="flip-card-back">
                      <p class="title">About Muskan</p>
                      <p>Resume</p>
                    </div>
                  </div>
                </div>
              </p>
            </div>
          </div>
          {/* <div class="bg-gray-800 flex items-center justify-center min-h-screen">
            <div class="card mx-auto w-64 h-96 md:w-80 md:h-112">
              <div class="card-inner relative w-full h-full rounded-lg shadow-lg">
                <div class="card-front absolute w-full h-full bg-white rounded-lg flex flex-col items-center justify-center p-4">
                  <img
                    src="https://via.placeholder.com/128.png?text=Character+Image"
                    alt="Character Image"
                    class="w-32 h-32 rounded-full mb-4"
                  />
                  <h2 class="text-2xl font-bold text-gray-800 text-center">
                    Raj Pateriya
                  </h2>
                </div>
                <div class="card-back absolute w-full h-full bg-gray-700 rounded-lg flex flex-col items-center justify-center p-4 text-white">
                  <p class="text-center">
                    Raj Pateriya ki kahani
                  </p>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="divider lg:divider-horizontal"></div>
          <div className="grid h-32 flex-grow card bg-base-300 rounded-box place-items-center text-center">
            <h1>Candidate Image</h1>
            PRANJAL GUPTA
          </div>
          <div className="divider lg:divider-horizontal"></div>
          <div className="grid h-32 flex-grow card bg-base-300 rounded-box place-items-center text-center">
            <h1>Candidate Image</h1>
            MANAV JOSHI
          </div>
          <div className="divider lg:divider-horizontal"></div>
          <div className="grid h-32 flex-grow card bg-base-300 rounded-box place-items-center text-center">
            <h1>Candidate Image</h1>
            MUSKAN THAKUR
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Feature;
