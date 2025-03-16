const Footer = () => {
  return (
    <footer className="w-full py-4 text-center text-gray-400 bg-[var(--card-background)] border-t border-[var(--border-color)]">
      <p className="text-sm">
        Built by{" "}
        <span className="text-white font-semibold">Arnab Chaudhuri</span>
      </p>
      <div className="flex justify-center gap-4 mt-2">
        <a
          href="https://github.com/Arnab-pixel/DoneZo"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-200 transition"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/arnab-chaudhuri-229175292"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-200 transition"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
