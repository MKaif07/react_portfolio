function Projects() {
  return (
    <>
      <h1
        id="project"
        className="title-font sm:text-5xl text-3xl font-medium text-gray-900 m-auto text-center"
      >
        Projects
      </h1>
      <section className="text-gray-600 body-font m-auto">
        <a href="https://ecom-front-9whale.vercel.app/login" target="_blank">
          <div className="container mx-auto flex px-20 py-16 md:flex-row flex-col items-center">
            {/* Image */}
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-7 md:mb-0">
              <img
                className="object-fit object-center rounded"
                alt="hero"
                src="/React_Ecomm.jpg"
              />
            </div>
            {/* About it */}
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Ecommerce Front-End
              </h1>
              <p className="mb-8 leading-relaxed">
                The React Ecommerce app, powered by a JSON server API and Redux
                for state management, delivers a robust online shopping
                experience. JSON server simulates a backend, handling product
                data and transactions. Redux orchestrates global state, ensuring
                seamless cart management and user interactions. This blend of
                React, JSON server, and Redux results in a scalable,
                high-performance e-commerce solution that offers users a smooth
                shopping journey with real-time updates and cart control.
              </p>
              <pre>
                <p>Admin Credentials:</p>
                "email": "admin@g.com" "password":"Admin@123"
                <p> User Credentials:</p>
                "email": "kaif@g.com" "password":"1234@Qwer",

                <p>JSON SERVER is Read Only</p>
              </pre>
            </div>
          </div>
        </a>

        <a href="https://react-note-app-chi.vercel.app/" target="_blank">
          <div className="container mx-auto flex px-20 py-16 md:flex-row flex-col items-center">
            {/* About it */}
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                React Notes App
              </h1>
              <p className="mb-8 leading-relaxed">
                The React Notes app, developed using custom hooks and local
                storage, offers a seamless user experience. Custom hooks
                streamline state management, enhancing code reusability. Local
                storage ensures data persistence across browser sessions,
                allowing users to save, edit, and delete notes effortlessly.
                This combination of React, custom hooks, and local storage
                creates a responsive and practical note-taking application,
                perfect for organizing thoughts and tasks efficiently.
              </p>
            </div>
            {/* Image */}
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-7 md:mb-0">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="/react_note.jpg"
              />
            </div>
          </div>
        </a>

        <a href="https://react-hangman-black.vercel.app/" target="_blank">
          <div className="container mx-auto flex px-20 py-24 md:flex-row flex-col items-center">
            {/* Image */}
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="/hangman.jpg"
              />
            </div>
            {/* About it */}
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                React Hangman
              </h1>
              <p className="mb-8 leading-relaxed">
                The Hangman game created in React is an interactive and engaging
                word-guessing game. It combines JavaScript and React's dynamic
                UI to provide an enjoyable gaming experience. Players guess
                letters to uncover a hidden word while avoiding incorrect
                guesses to save the hangman. It's a fun and educational project
                for learners.
              </p>
            </div>
          </div>
        </a>
      </section>
    </>
  );
}

export default Projects;
