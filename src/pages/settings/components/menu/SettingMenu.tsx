import { useState } from "react"

export default function index() {
    const menus = [
        {
            label: "Global Settings",
            icon: "dashicons-admin-generic"
        },
        {
            label: "Admin Settings",
            icon: "dashicons-admin-generic"
        },
    ]

    const [menuActive, setMenuActive] = useState(0)

    function onClickTabButton(e: any, index: any) {
        e.preventDefault()
        setMenuActive(index)
    }

    return (
        <div className="col-span-9 border border-black">
            <div className="grid grid-cols-12">
                <aside id="default-sidebar" className="col-span-2" aria-label="Sidebar">
                    <div className="h-full overflow-y-auto dark:bg-gray-800">
                        <ul className="space-y-2">
                            {menus.map((menu, index) => {
                                return (
                                    <li key={index}>
                                        <a href="#"
                                            onClick={(e) => onClickTabButton(e, index)}
                                            className={`flex items-center p-2 pl-4 text-sm font-medium text-gray-900 dark:text-white focus:shadow-none ${index === menuActive && "font-extrabold bg-gray-50"}`}>
                                            {menu.label}
                                        </a>
                                    </li>
                                )
                            })}

                        </ul>
                    </div>
                </aside>
                <div className="col-span-10 min-h-[500px] bg-gray-50">
                    <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                        <div className=""></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
