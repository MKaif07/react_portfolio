function Intro() {
  return (
    <section id="home" className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 pt-10 pb-20 m-10 md:flex-row flex-col items-center">
        <div className=" lg:flex-grow md:w-1/2 lg:p-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Front-End React Developer 👋
          </h1>
          <p className="mb-8 leading-relaxed">
            Hi, I'm M D Kaif. A passionate Front-end react Developer based in
            Delhi, India 📍
          </p>
          <div className="text-sm mt-2 text-gray-500 mb-8 w-full flex flex-row items-center ">
            {/* add Links here github, linkdin */}
            <a href="https://github.com/MKaif07" target="_blank">
              <img
                className="object-contain w-10 h-10"
                src="/github.png"
                alt="github"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/m-d-kaif-65ab17209/"
              target="_blank"
            >
              <img
                className="object-contain w-16 h-16"
                src="/linkdin.webp"
                alt="linkdin"
              />
            </a>
            <a
              href="mailto: kaif2002mk@gmail.com"
              className="object-contain w-11 h-11"
            >
              <img src="mail.png" alt="mail" />
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 lg:pr-10">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="/kaif.jpeg"
          />
        </div>
      </div>
    </section>
  );
}

export default Intro;
