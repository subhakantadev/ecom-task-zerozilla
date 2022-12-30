import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";

function Footer() {
  return (
    <>
      <footer
         className="flex justify-center items-center text-center mt-20  p-5 bg-gray-50 ">
        <h1 className=" text-gray-800 font-semibold">
          © 2022 All rights reserved | Build with ❤ by {" "}
          <Link href="/">
          <div className="hover:text-blue-600 font-semibold cursor-pointer">
            MyApp
          </div>
          </Link>
         
        </h1>
      </footer>
    </>
  );
}

export default Footer;
