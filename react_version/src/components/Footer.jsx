export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 bg-zinc-950 border-t border-zinc-900 text-white font-sans text-center">
      <div className="max-w-[1300px] mx-auto px-6 md:px-12 text-zinc-400 text-sm md:text-base">
        <span>
          Created By{' '}
          <a
            href="https://linktr.ee/ChiraagRokade"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 font-semibold hover:underline"
          >
            Chiraag Rokade
          </a>{' '}
          | <span>&copy;</span> 2022-{currentYear} All rights reserved.
        </span>
      </div>
    </footer>
  );
}
