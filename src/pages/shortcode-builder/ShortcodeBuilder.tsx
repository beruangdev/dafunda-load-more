/**
 * Internal dependencies
 */
import Menu from "./components/menu/ShortcodeBuilderMenu"
import ShortcodeBuilderSidebar from "./components/sidebar/ShortcodeBuilderSidebar"

export default function ShortcodeBuilder() {
    return (
        <>
            <div className="w-full p-4 relative">
                <div className="grid grid-cols-12 gap-4">
                    <Menu />
                    <ShortcodeBuilderSidebar />
                </div>
            </div>
        </>
    )
}
