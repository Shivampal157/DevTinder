import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="hero-glow">
      <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          Where <span className="text-primary">Code</span> Meets its{" "}
          <span className="text-secondary">Match</span>.
        </h1>
        <p className="mt-6 max-w-2xl text-lg opacity-80">
          Stop scrolling alone. Connect with developers who share your stack,
          your passion, and your debugging nightmares. Swipe right on your next
          coding partner or co-founder.
        </p>
        <div className="mt-8 flex gap-4">
          <Link
            to="/login?mode=signup"
            className="btn btn-primary bg-gradient-to-r from-blue-500 to-purple-500 border-0"
          >
            Get Started
          </Link>
          <Link to="/login" className="btn btn-outline">
            Let's Connect
          </Link>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6 px-6 md:px-16 pb-16">
        <article className="card bg-base-200 shadow-xl">
          <div className="card-body">
            <h3 className="text-2xl font-bold text-secondary">Discover</h3>
            <p>Find developers based on skills, interests, and location.</p>
          </div>
        </article>
        <article className="card bg-base-200 shadow-xl">
          <div className="card-body">
            <h3 className="text-2xl font-bold text-secondary">Connect</h3>
            <p>Match with peers for pair programming or networking.</p>
          </div>
        </article>
        <article className="card bg-base-200 shadow-xl">
          <div className="card-body">
            <h3 className="text-2xl font-bold text-secondary">Build</h3>
            <p>Turn connections into projects and career opportunities.</p>
          </div>
        </article>
      </section>

      <section className="text-center pb-20 px-6">
        <h2 className="text-3xl font-bold">DevTinder Community</h2>
        <p className="opacity-80 mt-2">Connect, collaborate and grow together 🚀</p>
        <div className="stats stats-vertical md:stats-horizontal shadow bg-base-200 mt-8">
          <div className="stat">
            <div className="stat-title">Developers</div>
            <div className="stat-value text-primary">1,240+</div>
          </div>
          <div className="stat">
            <div className="stat-title">Connections</div>
            <div className="stat-value text-secondary">580+</div>
          </div>
          <div className="stat">
            <div className="stat-title">Projects</div>
            <div className="stat-value text-accent">220+</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
