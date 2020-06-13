import React from "react"
import { Link } from "gatsby"
import { Navigation, Icon, Center } from "./styles"
import logo from "../../images/logo.svg"

const Navbar = () => (
  <Navigation>
    <Center>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
    </Center>
    <Icon
      href="https://www.facebook.com/TheGUIDON/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.8627 27.9962V17.0682H21.5493L22.0973 12.7896H17.8627V10.0642C17.8627 8.82956 18.2067 7.98423 19.9787 7.98423H22.224V4.16956C21.1315 4.05248 20.0334 3.99595 18.9347 4.00023C15.676 4.00023 13.4387 5.98956 13.4387 9.64156V12.7816H9.776V17.0602H13.4467V27.9962H17.8627Z"
          fill="white"
        />
      </svg>
    </Icon>
    <Icon
      href="https://twitter.com/TheGUIDON/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M29 7.94689C28.0437 8.35939 27.0031 8.65626 25.9312 8.77189C27.0441 8.11075 27.8774 7.06626 28.275 5.83439C27.2307 6.4556 26.0867 6.89121 24.8937 7.12189C24.3951 6.58885 23.792 6.1642 23.1221 5.87441C22.4522 5.58462 21.7298 5.4359 21 5.43751C18.0468 5.43751 15.6718 7.83126 15.6718 10.7688C15.6718 11.1813 15.7218 11.5938 15.8031 11.9906C11.3812 11.7594 7.43745 9.64689 4.81558 6.41251C4.33784 7.2285 4.08749 8.15759 4.09058 9.10314C4.09058 10.9531 5.0312 12.5844 6.46558 13.5438C5.62028 13.5105 4.79477 13.2781 4.0562 12.8656V12.9313C4.0562 15.5219 5.88745 17.6688 8.32808 18.1625C7.86982 18.2815 7.39841 18.3424 6.92495 18.3438C6.57808 18.3438 6.24995 18.3094 5.9187 18.2625C6.5937 20.375 8.55933 21.9094 10.9 21.9594C9.0687 23.3938 6.77495 24.2375 4.28433 24.2375C3.83745 24.2375 3.42495 24.2219 2.99683 24.1719C5.35933 25.6875 8.16245 26.5625 11.1812 26.5625C20.9812 26.5625 26.3437 18.4438 26.3437 11.3969C26.3437 11.1656 26.3437 10.9344 26.3281 10.7031C27.3656 9.94376 28.275 9.00314 29 7.94689Z"
          fill="white"
        />
      </svg>
    </Icon>
  </Navigation>
)

export default Navbar
