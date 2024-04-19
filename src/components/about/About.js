import React from "react";
import "./about.css"
function Feature() {
  return (
    <div className="bg-base-200 p-2">
      <div className="card bg-base-300 rounded-box p-2 m-2">
        <h1 className="text-4xl font-semibold text-sky-400/75">About</h1>
        <p className="p-3 text-lg">
          Phishing is a kind of Cybercrime trying to obtain important or
          confidential information from users which is usually carried out by
          creating a counterfeit website that mimics a legitimate website.
          Although these pages have similar graphical user interfaces, they must
          have different Uniform Resource Locators (URLs) from the original
          page.
        </p>
      </div>
      <div className="card bg-base-300 rounded-box p-2 m-2">
        {/* <h1 className="text-4xl font-semibold text-sky-400/75">Feature</h1> */}
        <div className="flex w-full flex-col lg:flex-row">
          {/* <div className="grid h-32 flex-grow card bg-base-300 rounded-box place-items-center text-center">
            <h1>Candidate Image</h1>
            RAJ PATERIYA
          </div> */}
          <div class="bg-gray-800 flex items-center justify-center min-h-screen">
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
          </div>
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
