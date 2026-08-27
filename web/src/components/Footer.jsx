const Footer = () => {
  return (
    <footer className="footer bg-base-200 text-base-content p-10 mt-10 border-t border-base-300">
      <aside>
        <h2 className="text-2xl font-extrabold italic text-primary">DevTinder</h2>
        <p className="max-w-sm opacity-80">
          DevTinder helps developers connect, collaborate, and build amazing
          projects together from anywhere in the world.
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Quick Links</h6>
        <a className="link link-hover">Home</a>
        <a className="link link-hover">Feed</a>
        <a className="link link-hover">Connections</a>
        <a className="link link-hover">Requests</a>
      </nav>
      <nav>
        <h6 className="footer-title">Resources</h6>
        <a className="link link-hover">Privacy Policy</a>
        <a className="link link-hover">Terms & Conditions</a>
        <a className="link link-hover">Developer Community</a>
        <a className="link link-hover">Support</a>
      </nav>
      <nav>
        <h6 className="footer-title">Connect With Us</h6>
        <p className="max-w-xs opacity-80">
          Follow DevTinder on social media and stay updated with developer trends.
        </p>
      </nav>
    </footer>
  );
};

export default Footer;
