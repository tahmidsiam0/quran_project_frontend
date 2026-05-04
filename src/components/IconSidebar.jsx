export default function IconSidebar() {
  return (
    <nav className="z-50 flex h-screen flex-col items-center border-r border-white/5 bg-bgmain w-15 py-3">
      {/* Logo */}
      <a href="/">
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.99183 0H29.0082C32.8696 0 36 3.13043 36 6.99183V29.0082C36 32.8696 32.8696 36 29.0082 36H6.99183C3.13043 36 0 32.8696 0 29.0082V6.99183C0 3.13043 3.13043 0 6.99183 0Z"
            className="fill-primary"
          ></path>
          <path
            d="M26.0687 24.5654V28.2374C26.0688 28.3545 26.0389 28.4696 25.9818 28.5717C25.9247 28.6739 25.8424 28.7597 25.7427 28.821C25.6429 28.8822 25.5292 28.9168 25.4122 28.9215C25.2953 28.9263 25.1791 28.9009 25.0748 28.8479L18 25.2596"
            stroke="#E2E2E2"
            strokeWidth="0.782609"
          ></path>
          <path
            d="M9.92969 24.5654V28.2374C9.92957 28.3545 9.95949 28.4696 10.0166 28.5717C10.0737 28.6739 10.156 28.7597 10.2557 28.821C10.3554 28.8822 10.4692 28.9168 10.5861 28.9215C10.7031 28.9263 10.8193 28.9009 10.9236 28.8479L17.9976 25.2596"
            stroke="#E2E2E2"
            strokeWidth="0.782609"
          ></path>
          <path
            opacity="0.35"
            d="M17.5839 24.1444C17.5839 24.3737 17.7733 24.5591 18.0018 24.5591V25.5405L8.60421 23.6114L7.45143 23.3821C7.093 23.3109 6.77034 23.1177 6.53844 22.8353C6.30654 22.5528 6.17975 22.1987 6.17969 21.8333V10.8729C6.17969 9.90245 7.04838 9.16131 8.00708 9.31392L18.001 10.9026V11.884C17.8908 11.8842 17.7852 11.9279 17.7071 12.0056C17.629 12.0833 17.5847 12.1886 17.5839 12.2988V24.1436V24.1444Z"
            fill="#E2E2E2"
          ></path>
          <path
            opacity="0.35"
            d="M18.4171 24.1444C18.4171 24.3737 18.2293 24.5591 18 24.5591V25.5405L27.3976 23.6114L28.5503 23.3821C28.9088 23.3109 29.2314 23.1177 29.4633 22.8353C29.6952 22.5528 29.822 22.1987 29.8221 21.8333V10.8729C29.8221 9.90245 28.9534 9.16131 27.9947 9.31392L18 10.9018V11.8832C18.2285 11.8832 18.4171 12.0687 18.4171 12.298V24.1436V24.1444Z"
            fill="#E2E2E2"
          ></path>
          <path
            d="M17.5806 24.1443C17.5806 24.3736 17.77 24.5591 17.9986 24.5591V25.5405L9.92986 22.0383L8.60099 21.4623C8.29824 21.3311 8.04048 21.1142 7.85944 20.8383C7.6784 20.5624 7.58197 20.2396 7.58203 19.9096V9.37417C7.58187 9.09963 7.64851 8.82918 7.7762 8.58615C7.9039 8.34312 8.08881 8.13482 8.31498 7.97921C8.54116 7.8236 8.8018 7.72536 9.07441 7.69297C9.34703 7.66058 9.62343 7.69501 9.87977 7.7933L17.9986 10.9026V11.884C17.8883 11.884 17.7824 11.9276 17.7041 12.0053C17.6259 12.083 17.5815 12.1885 17.5806 12.2988V24.1436V24.1443Z"
            fill="white"
          ></path>
          <path
            d="M28.0252 9.37374V9.37397V19.9095C28.0252 20.4269 27.7175 20.8958 27.2417 21.1032C27.2416 21.1033 27.2415 21.1033 27.2413 21.1034L25.9131 21.6791L25.9129 21.6792L18.3913 24.9439V24.8493C18.4568 24.8131 18.517 24.7678 18.5702 24.7147C18.6452 24.6398 18.7048 24.5509 18.7454 24.453C18.786 24.3551 18.8069 24.2501 18.8069 24.1441V12.2986C18.8069 12.0848 18.7219 11.8798 18.5708 11.7286C18.5173 11.6751 18.4571 11.6299 18.3921 11.5938V11.1708L26.2587 8.15774L26.2589 8.15769C26.4559 8.08214 26.6684 8.05567 26.878 8.08056C27.0875 8.10546 27.2879 8.18098 27.4618 8.3006C27.6356 8.42023 27.7778 8.58036 27.876 8.76718C27.974 8.95384 28.0253 9.16251 28.0252 9.37374Z"
            fill="#E2E2E2"
            stroke="#E2E2E2"
            strokeWidth="0.782609"
          ></path>
        </svg>
      </a>

      {/* Navigation Icons */}
      <div className="flex flex-1 flex-col items-center justify-center gap-8">
        {/* Home Icon */}
        <button className="text-gray-500 transition-colors hover:text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9.23051 2.58494L2.87801 7.67243C2.16301 8.24076 1.70467 9.44163 1.86051 10.34L3.07968 17.6366C3.29968 18.9383 4.54634 19.9924 5.86634 19.9924H16.133C17.4438 19.9924 18.6997 18.9291 18.9197 17.6366L20.1388 10.34C20.2855 9.44163 19.8272 8.24076 19.1213 7.67243L12.7688 2.59411C11.788 1.80578 10.2022 1.80577 9.23051 2.58494Z" />
            <path d="M11.0007 14.2083C12.2663 14.2083 13.2923 13.1823 13.2923 11.9167C13.2923 10.651 12.2663 9.625 11.0007 9.625C9.735 9.625 8.70898 10.651 8.70898 11.9167C8.70898 13.1823 9.735 14.2083 11.0007 14.2083Z" />
          </svg>
        </button>

        {/* App Grid Icon */}
        <button className="text-gray-500 transition-colors hover:text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="14" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
          </svg>
        </button>

        {/* Navigation/Compass Icon */}
        <button className="text-gray-500 transition-colors hover:text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 12l19-9-9 19-2-8-8-2z" />
          </svg>
        </button>

        {/* Bookmark Icon */}
        <button className="text-gray-400 transition-colors hover:text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="opacity-40"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
          </svg>
        </button>

        {/* List Icon */}
        <button className="text-gray-500 transition-colors hover:text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
            <line x1="14" y1="15" x2="21" y2="15" />
            <line x1="14" y1="19" x2="21" y2="19" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
