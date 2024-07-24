import { useEffect, useState } from "react"
import { themeChange } from "theme-change"
import { HiChevronDown, HiOutlineSwatch } from 'react-icons/hi2'

const listThemes = [
    {
        id: 1,
        theme: 'light'
    },
    {
        id: 2,
        theme: 'dark'
    },
    {
        id: 3,
        theme: 'bumblebee'
    },
    {
        id: 4,
        theme: 'forest'
    },
    {
        id: 5,
        theme: 'cupcake'
    },
    {
        id: 6,
        theme: 'halloween'
    },
    {
        id: 7,
        theme: 'mytheme'
    },
    
]

const ChangeTheme = () => {

    const [currentTheme, setCurrentTheme] = useState<string>(localStorage.getItem('theme') || 'light')

    useEffect(() => {
        themeChange(false)
        // 👆 false parameter is required for react project
    }, [])

    return (
        <div title="Change Theme" className="dropdown dropdown-end">
            <div tabIndex={0} className="normal-case btn btn-ghost">
                <HiOutlineSwatch className="flex-none w-5 h-5" />
                <HiChevronDown className="flex-none w-5 h-5" aria-hidden="true" />
            </div>
            <div
                className="z-10 w-56 mt-16 overflow-y-auto shadow dropdown-content bg-base-200 text-base-content rounded-box top-px">
                <div className="grid grid-cols-1 gap-3 p-3" tabIndex={0}>
                    {
                        listThemes.map(item => (
                            <button
                                key={item.id}
                                className="overflow-hidden text-left rounded-lg outline-base-content"
                                data-set-theme={item.theme}
                                onClick={() => setCurrentTheme(item.theme)}
                                >
                                <div data-theme={item.theme}
                                    className="w-full font-sans cursor-pointer bg-base-100 text-base-content">
                                    <div className="grid grid-cols-5 grid-rows-3">
                                        <div
                                            className="flex items-center col-span-5 row-span-3 row-start-1 gap-2 px-4 py-3">
                                            {
                                                item.theme === currentTheme && (
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        viewBox="0 0 24 24" fill="currentColor"
                                                        className="w-3 h-3 shrink-0">
                                                        <path
                                                            d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z">
                                                        </path>
                                                    </svg>
                                                )
                                            }
                                            <div className="flex-grow text-sm">{item.theme}</div>
                                        </div>
                                    </div>
                                </div>
                            </button>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ChangeTheme