export default function FloatingCallButton() {
  return (
    <a
      href="tel:7705984665"
      className="fixed bottom-6 left-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-2xl shadow-primary/30 transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      aria-label="Call Parts Central"
    >
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21 11.36 11.36 0 003.55.57 1 1 0 011 1v3.5a1 1 0 01-1 1A17 17 0 013 5a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.55 1 1 0 01-.21 1.11l-2.2 2.2z"
          fill="currentColor"
        />
      </svg>
    </a>
  );
}
