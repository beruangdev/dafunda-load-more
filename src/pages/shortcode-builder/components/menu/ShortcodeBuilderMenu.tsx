import { useState } from "react"
import DisplaySettings from "./contents/DisplaySettings"
import QueryParameters from "./contents/QueryParameters"

export default function index(props: any) {
    const { attributes, setAttributes } = props
    const menus = [
        {
            label: "Query Parameters",
            icon: "dashicons-admin-generic"
        },
        {
            label: "Display Settings",
            icon: "dashicons-admin-generic"
        },
    ]

    const [menuActive, setMenuActive] = useState(0)

    function onClickTabButton(e: any, index: any) {
        e.preventDefault()
        setMenuActive(index)
    }

    return (
        <div className="col-span-9">
            <div className="grid grid-cols-12">
                <aside id="default-sidebar" className="col-span-2" aria-label="Sidebar">
                    <div className="h-full overflow-y-auto dark:bg-gray-800 relative contents">
                        <ul className="space-y-2 sticky top-12">
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
                <div className="col-span-10 min-h-[1500px] bg-gray-50">
                    {menuActive == 0 && <QueryParameters attributes={attributes} setAttributes={setAttributes} />}
                    {menuActive == 1 && <DisplaySettings attributes={attributes} setAttributes={setAttributes} />}
                    {/* {menuActive == 1 && <DisplaySettings attributes={attributes} setAttributes={setAttributes} />} */}
                </div>
            </div>
        </div>
    )
}
