const SocialLink = ({ href, text }) => {
  return (
    <p className="hover:text-black duration-200">
      <a href={href}>{text}</a>
      <span className="inline-flex">
        <svg
          className="with-icon_icon__MHUeb"
          data-testid="geist-icon"
          fill="none"
          height="24"
          shapeRendering="geometricPrecision"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          width="24"
          style={{ color: "currentColor", width: "14px", height: "14px" }}
        >
          <path d="M7 17L17 7"></path>
          <path d="M7 7h10v10"></path>
        </svg>
      </span>
    </p>
  );
};

export default function Contact() {
  return (
    <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-32 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col mt-14">
        <h4 className="text-4xl font-semibold text-black text-center font-outfit">
          connect with me on{" "}
          <span className="underline decoration-blue-600">socials.</span>
        </h4>

        <div className="flex flex-wrap gap-6 justify-center font-outfit text-xl font-extralight text-gray-500 mt-14">
          <SocialLink
            text="hashnode"
            href="https://nickk2305.hashnode.dev/"
          />

          <SocialLink
            text="github"
            href="https://github.com/Nick-h4ck3r"
          />

          <SocialLink
            text="twitter"
            href="https://twitter.com/NickK2305"
          />

          <SocialLink
            text="linkedin"
            href="https://www.linkedin.com/in/nickk2305/"
          />
        </div>

        <h5 className="mt-28">
          <p className="text-xl font-md font-outfit text-gray-900 md:ml-5">
            or drop a mail at{" "}
            <a
              href="mailto:nickkadam23@gmail.com"
              className="cursor-pointer"
            >
              <span className="link-underline link-underline-black">
                {" "}
                nickkadam23@gmail.com
              </span>
            </a>
          </p>
        </h5>
      </div>

      <div className="text-sm bottom-20 md:bottom-10 items-center justify-center absolute flex font-outfit text-gray-500">
        <p>
          website designed and developed by{" "}
          <span className="text-blue-500">
            <a
              target={"_blank"}
              href="https://twitter.com/NickK2305"
              rel="noreferrer"
            >
              nikhil
            </a>
          </span>
        </p>
      </div>
    </div>
  );
}
