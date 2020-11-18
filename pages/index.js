import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import { Fragment } from "react";

const link = [
  {
    url: "https://www.youtube.com/channel/UCEB3RVcxEKio2KCAf9vgwJQ",
    title: "Youtube Channel",
    icon: faYoutube,
  },
];

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>PENGKODE</title>
        <meta
          content="Tempat belajar ilmu web development lengkap mulai dari basic hingga production"
          name="description"
        />
        <meta property="og:title" content="PENGKODE" />
        <meta property="og:type" content="website" />
      </Head>
      <div className="bg-primary min-h-screen p-5">
        <div className="w-full lg:w-1/3 mx-auto mt-5">
          <div className="flex justify-center">
            <img src="/pengkode-logo.png" className="w-24" />
          </div>
          <ul className="flex flex-col mt-10">
            {link.map((item, index) => (
              <li>
                <a
                  href={item.url}
                  className="block bg-white-100 p-2 px-4 rounded-sm merriweather text-primaryDark hover:bg-white-200"
                >
                  <FontAwesomeIcon icon={item.icon} className="mr-3" />
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Fragment>
  );
}
