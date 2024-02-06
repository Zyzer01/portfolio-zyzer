'use client';
import { socials } from '@/utils/items';
import Link from 'next/link';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Spacer from '@/components/Spacer';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import OtherProjects from '@/components/OtherProjects';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import Image from 'next/image';
import logo from '/public/images/Lubesurgeons main logo.webp';
import MenuBar from '@/components/MenuBar';

const Home = () => {
  return (
    <div>
      <div className="flex justify-end mr-44">
        <div className="relative before:absolute md:before:h-[270px] md:before:w-[300px] before:h-[200px] before:w-[250px]  before:right-0 after:right-0 md:before:-right-48 md:after:-right-48 before:rounded-full before:bg-gradient-radial before:from-secondary before:to-pink-900 before:blur-2xl before:content-[''] after:absolute after:-z-20 md:after:h-[270px] md:after:w-[250px] after:h-[150px] after:w-[150px] after:bg-gradient-conic after:from-secondary after:via-fuchsia-700 after:blur-2xl after:content-[''] z-[-1] animate-bg-gradient"></div>
      </div>
      <NavBar />
      {/* <div className="flex justify-between md:hidden items-center">
        <div>
          <MenuBar />
        </div>
        <div>
          <Image src={logo} alt="Logo" width={150} height={70} />
        </div>
      </div> */}
      <div className="grid grid-cols-6 place-content-between px-8 md:px-0">
        <div className="justify-self-center">
          <div className="hidden md:flex flex-col space-y-8 justify-center items-center fixed top-0 bottom-0">
            {socials.map((item, index) => (
              <Link href={item.href} key={index}>
                <p className="text-xl hover:scale-125 transition ease-in-out duration-300">
                  {item.icon}
                </p>
              </Link>
            ))}
          </div>
        </div>
        <div className="col-span-6 md:col-span-4">
          <Hero />
          <Spacer />
          <About />
          <Spacer />
          <Experience />
          <Spacer />
          <Projects />
          <Spacer />
          <OtherProjects />
          <Spacer />
          <Footer />
          <Spacer />
          <Spacer />
        </div>
        <div>
          <div className="hidden md:flex justify-center items-center fixed top-0 bottom-0">
            <Link href="mailto:davidicfola@gmail.com">
              <p className="transform rotate-90 proggy text-xl">
                <span className="transition-all ease duration-300 hover:bg-clip-text text-bright hover:text-transparent hover:bg-gradient-to-r from-primary to-secondary">
                  davidicfola@gmail.com
                </span>
              </p>
            </Link>
          </div>
          {/* <div className="flex justify-end absolute bottom-0 left-0"> */}
          {/* <div className="relative md:before:-bottom-32 md:before:-right-[500px] md:after:-bottom-20 md:after:right-32 before:absolute before:h-[350px] before:w-[520px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-secondary before:to-primary before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[200px] after:w-[260px] after:translate-x-1/3 after:bg-gradient-conic after:from-secondary after:via-fuchsia-700 after:blur-2xl after:content-[''] before:h-[360px] z-[-1] animate-bg-gradient"></div> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};
export default Home;
