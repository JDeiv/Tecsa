import { useState, useEffect } from 'react';
import { Dialog, Popover } from '@headlessui/react'
import { HiOutlineBars3, HiXMark } from 'react-icons/hi2'
import ChangeTheme from '../components/theme/ChangeTheme'
import { Link } from 'react-router-dom'
import { ABOUT, LOGIN, SERVICES, CONTACT } from '../router/paths'

const Header2 = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
      
    } else {
      setIsScrolled(false);
    }
  };

  return (
    <header
      className={`${
        isScrolled? 'fixed top-0 left-0 w-full h-20 shadow-md z-50 bg-primary text-primary-content' : ''
      } transition-all duration-300 ease-in-out z-50`}
    >
      <nav className="flex items-center justify-between p-2 mx-auto lg:px-8 " aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5 relative">
            <div className={`${scrollPosition? 'absolute -top-[4.5rem]  w-52 h-52 transition duration-500 ease-in-out': 'absolute -top-36  w-72 h-72 transition duration-500 ease-in-out'}
            `}>
            <img className="object-cover" src="https://i.imgur.com/5MJB7gr.png" alt="Logo de la empresa" />
            </div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <ChangeTheme />
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Abrir menú principal</span>
            <HiOutlineBars3 className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-2">
          <Link to={ABOUT} className="font-semibold leading-6 normal-case btn btn-ghost">
            Nosotros
          </Link>
          <Link to={SERVICES} className="text-lg font-semibold leading-6 normal-case btn btn-ghost">
            Servicios
          </Link>
          <Link to={CONTACT} className="font-semibold leading-6 normal-case btn btn-ghost">
            Contactos
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <ChangeTheme />
          <Link to={LOGIN} className="font-semibold leading-6 normal-case btn btn-ghost">
            Iniciar <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-30" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-30 w-full px-6 py-6 overflow-y-auto bg-primary text-primary-content sm:max-w-sm sm:ring-1">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">EMPRESA</span>
              <img className="w-auto h-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Logo de la empresa" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Cerrar menú</span>
              <HiXMark className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
          <div className="flow-root mt-6">
            <div className="-my-6">
              <div className="py-3 space-y-2">
                <Link
                  to={ABOUT}
                  className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 rounded-lg btn btn-ghost"
                >
                  Nosotros
                </Link>
                <Link
                  to={SERVICES}
                  className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 rounded-lg btn btn-ghost"
                >
                  Servicios
                </Link>
                <Link
                  to={CONTACT}
                  className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 rounded-lg btn btn-ghost"
                >
                  Contactos
                </Link>
              </div>
              <div className="divider">O</div>
              <div className="py-3">
                <Link
                  to={LOGIN}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 btn btn-ghost"
                >
                  Iniciar Sesión
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Header2;
