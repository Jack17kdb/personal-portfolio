import Typewriter from "typewriter-effect";

function LandingAnimation() {
  return (
    <section
      id="landingPage"
      className="min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20 px-4"
    >
      <div className="max-w-5xl mx-auto w-full text-center">
        <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 animate-gradient">
          <Typewriter
            options={{
              strings: [
                "> Initializing Portfolio...",
                "> Loading Skills...",
                "> Connecting to Jace.stack...",
              ],
              autoStart: true,
              loop: false,
              delay: 50,
              deleteSpeed: 50,
              pauseFor: 500,
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default LandingAnimation;
