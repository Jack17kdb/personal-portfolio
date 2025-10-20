import Typewriter from "typewriter-effect";

function LandingAnimation() {
  return (
	<section id="landingPage" className="min-h-screen flex items-center justify-center py-20">
	<div className="max-w-5xl mx-auto px-4">
    <div className="text-center text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400">
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
