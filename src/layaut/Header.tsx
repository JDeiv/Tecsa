import {  useState } from 'react'
import { Dialog, Popover } from '@headlessui/react'
import {
  HiOutlineBars3,
  HiXMark,
} from 'react-icons/hi2'
//import { HiChevronDown, HiPhone, HiPlayCircle } from 'react-icons/hi2'
import ChangeTheme from '../components/theme/ChangeTheme'
import { Link } from 'react-router-dom'
import { ABOUT, LOGIN, SERVICES, CONTACT } from '../router/paths'




const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="top-0 z-20 bg-primary text-primary-content">
      <nav className="flex items-center justify-between p-2 mx-auto lg:px-8 " aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="w-auto h-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <ChangeTheme />
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
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
              <img
                className="w-auto h-8"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
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
              <div className="divider">OR</div>
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
  )
}

export default Header