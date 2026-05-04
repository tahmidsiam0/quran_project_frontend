import { useState, useEffect } from "react";

export default function Topbar({ scrollContainerRef }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      // If scrolled more than 10px, hide it. If at top, show it.
      if (container.scrollTop > 10) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [scrollContainerRef]);

  return (
    <header
      className={`
      fixed top-0 left-15 right-0 h-15 bg-bgsecondary border-b border-borderColor 
      flex items-center justify-between px-6 z-30 transition-transform duration-300 ease-in-out
      ${isVisible ? "translate-y-0" : "-translate-y-full"}
    `}
    >
      <div className="flex flex-col">
        <h1 className="text-xl font-semibold text-white">Quran Mazid</h1>
        <p className="text-[8px] text-gray-500 uppercase tracking-wide">
          Read, Study, and Learn The Quran
        </p>
      </div>

      <div className="flex items-center gap-4">
        <button className="group flex size-[34px] min-w-[34px] cursor-pointer items-center justify-center rounded-full bg-primary-7 active:scale-90 text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
          >
            <path
              d="M18.3789 18.3721L14.7539 14.7471M16.7122 10.0387C16.7122 13.7206 13.7275 16.7054 10.0456 16.7054C6.36367 16.7054 3.37891 13.7206 3.37891 10.0387C3.37891 6.35684 6.36367 3.37207 10.0456 3.37207C13.7275 3.37207 16.7122 6.35684 16.7122 10.0387Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
        <button className="group flex size-[34px] min-w-[34px] cursor-pointer items-center justify-center rounded-full bg-primary-7 active:scale-90 text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className="text-primary"
          >
            <path
              fill="currentColor"
              d="m14.712 7.596l-2.289-2.288l2.289-2.289L17 5.308zm5 3l-1.289-1.288l1.289-1.289L21 9.308zM12.075 21q-1.888 0-3.543-.713T5.64 18.336t-1.951-2.893t-.714-3.543q0-2.92 1.68-5.265t4.436-3.27q-.104 2.34.717 4.501q.82 2.161 2.48 3.82q1.66 1.66 3.82 2.481t4.502.717q-.92 2.754-3.268 4.435T12.075 21"
            ></path>
          </svg>
        </button>
        <button className="group flex size-[34px] min-w-[34px] cursor-pointer items-center justify-center rounded-full bg-primary-7 active:scale-90 text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
            className="text-primary"
          >
            <path
              d="M15.3953 6.91501C14.0378 6.91501 13.4828 5.95501 14.1578 4.77751C14.5478 4.09501 14.3153 3.22501 13.6328 2.83501L12.3353 2.09251C11.7428 1.74001 10.9778 1.95001 10.6253 2.54251L10.5428 2.68501C9.86781 3.86251 8.75781 3.86251 8.07531 2.68501L7.99281 2.54251C7.65531 1.95001 6.89031 1.74001 6.29781 2.09251L5.00031 2.83501C4.31781 3.22501 4.08531 4.10251 4.47531 4.78501C5.15781 5.95501 4.60281 6.91501 3.24531 6.91501C2.46531 6.91501 1.82031 7.55251 1.82031 8.34001V9.66001C1.82031 10.44 2.45781 11.085 3.24531 11.085C4.60281 11.085 5.15781 12.045 4.47531 13.2225C4.08531 13.905 4.31781 14.775 5.00031 15.165L6.29781 15.9075C6.89031 16.26 7.65531 16.05 8.00781 15.4575L8.09031 15.315C8.76531 14.1375 9.87531 14.1375 10.5578 15.315L10.6403 15.4575C10.9928 16.05 11.7578 16.26 12.3503 15.9075L13.6478 15.165C14.3303 14.775 14.5628 13.8975 14.1728 13.2225C13.4903 12.045 14.0453 11.085 15.4028 11.085C16.1828 11.085 16.8278 10.4475 16.8278 9.66001V8.34001C16.8203 7.56001 16.1828 6.91501 15.3953 6.91501ZM9.32031 11.4375C7.97781 11.4375 6.88281 10.3425 6.88281 9.00001C6.88281 7.65751 7.97781 6.56251 9.32031 6.56251C10.6628 6.56251 11.7578 7.65751 11.7578 9.00001C11.7578 10.3425 10.6628 11.4375 9.32031 11.4375Z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
        <button className="bg-primary w-34 h-9.5 hover:bg-[#34693a] text-white px-4 py-1.5 rounded-full text-sm font-semibold flex items-center gap-2">
          Support Us{" "}
          <span className="text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
            >
              <path
                opacity="0.4"
                d="M15.2153 6.0675C15.2153 6.18 15.2153 6.29251 15.2078 6.39751C14.0603 5.97001 12.7103 6.23251 11.8103 7.04251C11.2028 6.49501 10.4153 6.18751 9.57531 6.18751C7.73031 6.18751 6.23032 7.69501 6.23032 9.55501C6.23032 11.6775 7.29532 13.23 8.31532 14.235C8.23282 14.2275 8.16532 14.2125 8.10532 14.19C6.16282 13.5225 1.82031 10.7625 1.82031 6.0675C1.82031 3.9975 3.48531 2.32501 5.54031 2.32501C6.76281 2.32501 7.84281 2.91 8.51781 3.8175C9.20031 2.91 10.2803 2.32501 11.4953 2.32501C13.5503 2.32501 15.2153 3.9975 15.2153 6.0675Z"
                fill="currentColor"
              ></path>
              <path
                d="M13.8217 7.1925C13.0192 7.1925 12.2917 7.58251 11.8417 8.18251C11.3917 7.58251 10.6717 7.1925 9.86171 7.1925C8.49671 7.1925 7.38672 8.30251 7.38672 9.68251C7.38672 10.215 7.46922 10.7025 7.61922 11.1525C8.32422 13.38 10.4917 14.7075 11.5642 15.075C11.7142 15.1275 11.9617 15.1275 12.1192 15.075C13.1917 14.7075 15.3592 13.38 16.0642 11.1525C16.2142 10.695 16.2967 10.2075 16.2967 9.68251C16.2967 8.30251 15.1867 7.1925 13.8217 7.1925Z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
        </button>
      </div>
    </header>
  );
}
