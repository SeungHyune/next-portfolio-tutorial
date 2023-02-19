import { useTheme } from 'next-themes'

export default function DarkModeToggleButton(){
    const { theme, setTheme } = useTheme()
    console.log(theme)

    return (
        <>
            <button className="hover:bg-gray-50 hover:text-orange-500 dark:bg-slate-600 dark:text-slate-400 dark:hover:bg-salte-700 dark:hover:text-yellow-300
            inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" onClick={() => {setTheme(theme === 'dark' ? 'light' : 'dark') }}>
                <svg className="invisible dark:visible dark:h-5 dark:w-5 h-0 w-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
                </svg>

                <svg className="visible dark:invisible dark:h-0 dark:w-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
                
            </button>
        </>
    )
}