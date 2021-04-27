import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import ReactGA from "react-ga";

const linkedinClickHandler = () => {
  ReactGA.event({
    category: "Links",
    action: "Clicked My LinkedIn",
  });
};
const githubClickHandler = () => {
  ReactGA.event({
    category: "Links",
    action: "Clicked My GitHUb",
  });
};

const Contact = () => {
  return (
    <section className="text-white pt-32 pb-8" id="contact">
      <ScrollAnimation
        animateIn="animate__fadeInDown"
        animateOut="animate__fadeOut"
        afterAnimatedIn={function afterAnimatedIn() {
          ReactGA.pageview("/contact");
        }}
      >
        <h2 className="text-4xl font-bold pb-20">Reach me</h2>
      </ScrollAnimation>
      <div className="px-4 text-center pb-6">
        <ScrollAnimation
          animateIn="animate__pulse"
          animateOut="animate__fadeOut"
        >
          <p className="underline text-2xl">
            I'm currently looking for new opportunities!
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="animate__fadeIn"
          animateOut="animate__fadeOut"
        >
          <p className="text-xl">
            For either professional contacts or any question, just email me.
          </p>
          <a
            className="email text-xl pt-6"
            href="mailto:info@brunoestevinho.dev"
          >
            bruno.m.estevinho@gmail.com
          </a>
          <p className="pt-12 pb-12">Or...</p>
          <p>Check below to find a bit more about me</p>
          <div className="flex justify-center space-x-6 pt-6">
            <a
              href="https://www.linkedin.com/in/brunoestevinho/"
              target="_blank"
              rel="noreferrer"
              alt="LinkedIn Bruno Estevinho"
              onClick={linkedinClickHandler}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="white"
                fillOpacity="0.9"
              >
                <path d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="https://github.com/brunoestevinho"
              target="_blank"
              rel="noreferrer"
              alt="GitHub Bruno Estevinho"
              onClick={githubClickHandler}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="white"
                fillOpacity="0.9"
              >
                <path d="M0 0v24h24v-24h-24zm14.534 19.59c-.406.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.311-1.588-.824-2.147.083-.202.357-1.016-.079-2.117 0 0-.671-.215-2.198.82-.639-.18-1.323-.267-2.003-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
              </svg>
            </a>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Contact;
