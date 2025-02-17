export default function ScrollDown() {
  const handleScroll = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="w-full flex flex-col items-center justify-center text-black mt-24">
      <div className="flex flex-col items-center justify-center space-y-4">
        <div
          className="flex animate-bounce flex-col items-center justify-center space-y-2 cursor-pointer"
          onClick={handleScroll}
        >
          <div className="flex items-center justify-center w-12 h-12 border-2 border-black rounded-full">
            <ArrowDownIcon className="h-6 w-6" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </svg>
  );
}
