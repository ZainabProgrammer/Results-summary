function App() {
  return (
    <div className="md:px-9  px-0">
      <div className="flex  justify-center  items-center h-[100vh] md:gap-0  sm:gap-4 md:flex-row flex-col  w-full ">
        <div className=" rounded-3xl items-center justify-center shadow-xl shadow-slate-200 w-50 flex md:py-0 md:flex-row flex-col">
          <div
            className="col-first rounded-3xl  w-full   md:mt-2 mt-[20%]"
            style={{ height: "30rem" }}
          >
            <h3 className="p-7 pt-0  result  ">Your Result</h3>
            <div>
              <div className=" pt-6 text-5xl my-8 text-center ">
                <span className=" my-bg  rounded-full  p-10 px-11  main">
                  76
                </span>
                <p className="  text-sm py-2 small"> of 100</p>
              </div>

              <p className=" main-sub pt-9">Great</p>
              <p className=" mt-2 desc mx-3 ">
                You scored higher than 65% of the
              </p>
              <p className="desc mx-9">people who have taken these tests.</p>
            </div>
          </div>

          <div className="col-second my-6 w-full px-9  ">
            <p className=" sub-h py-5"> Summary </p>
            <ul className="w-full ">
              <div className="flex  reaction rounded-2xl   justify-between w-full items-center">
                <div className="flex items-center justify-between">
                  <div className="pl-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="#F55"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.25"
                        d="M10.833 8.333V2.5l-6.666 9.167h5V17.5l6.666-9.167h-5Z"
                      />
                    </svg>
                  </div>
                  <div className=" w-full p-4 rounded-xl  ">Reaction</div>
                </div>

                <div className="w-full flex items-center  justify-end mx-4">
                  <span className="sub-h">80 </span>{" "}
                  <span className="hundred"> &nbsp; / 100</span>{" "}
                </div>
              </div>

              <div className="flex memory my-4 justify-between w-full items-center">
                <div className="flex items-center justify-between">
                  <div className="pl-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="#FFB21E"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.25"
                        d="M5.833 11.667a2.5 2.5 0 1 0 .834 4.858"
                      />
                      <path
                        stroke="#FFB21E"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.25"
                        d="M3.553 13.004a3.333 3.333 0 0 1-.728-5.53m.025-.067a2.083 2.083 0 0 1 2.983-2.824m.199.054A2.083 2.083 0 1 1 10 3.75v12.917a1.667 1.667 0 0 1-3.333 0M10 5.833a2.5 2.5 0 0 0 2.5 2.5m1.667 3.334a2.5 2.5 0 1 1-.834 4.858"
                      />
                      <path
                        stroke="#FFB21E"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.25"
                        d="M16.447 13.004a3.334 3.334 0 0 0 .728-5.53m-.025-.067a2.083 2.083 0 0 0-2.983-2.824M10 3.75a2.085 2.085 0 0 1 2.538-2.033 2.084 2.084 0 0 1 1.43 2.92m-.635 12.03a1.667 1.667 0 0 1-3.333 0"
                      />
                    </svg>
                  </div>
                  <div className=" w-full p-4 rounded-xl  ">Memory</div>
                </div>

                <div className="w-full flex items-center justify-end  mx-4">
                  <span className="sub-h">92 </span>{" "}
                  <span className="hundred"> &nbsp; / 100</span>{" "}
                </div>
              </div>
              <div className="flex verbal my-4 justify-between w-full items-center">
                <div className="flex justify-between items-center">
                  <div className="pl-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="#00BB8F"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.25"
                        d="M7.5 10h5M10 18.333A8.333 8.333 0 1 0 1.667 10c0 1.518.406 2.942 1.115 4.167l-.699 3.75 3.75-.699A8.295 8.295 0 0 0 10 18.333Z"
                      />
                    </svg>
                  </div>
                  <div className=" w-full p-4 rounded-xl  ">Verbal</div>
                </div>

                <div className="w-full flex items-center justify-end mx-4 ">
                  <span className="sub-h">61 </span>
                  <span className="hundred"> &nbsp; / 100</span>{" "}
                </div>
              </div>
              <div className="flex visual my-4 justify-between w-full items-center">
                <div className="flex items-center justify-between">
                  <div className="pl-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="#1125D6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.25"
                        d="M10 11.667a1.667 1.667 0 1 0 0-3.334 1.667 1.667 0 0 0 0 3.334Z"
                      />
                      <path
                        stroke="#1125D6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.25"
                        d="M17.5 10c-1.574 2.492-4.402 5-7.5 5s-5.926-2.508-7.5-5C4.416 7.632 6.66 5 10 5s5.584 2.632 7.5 5Z"
                      />
                    </svg>
                  </div>
                  <div className=" w-full p-4 rounded-xl  ">Visual</div>
                </div>

                <div className="w-full flex items-center justify-end mx-4 ">
                  <div className="sub-h">72 </div>{" "}
                  <div className="hundred">&nbsp; / 100</div>{" "}
                </div>
              </div>
            </ul>
            <button className="w-full my-3 btn rounded-3xl p-4 text-center">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
