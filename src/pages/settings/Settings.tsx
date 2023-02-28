/**
 * Internal dependencies
 */
import Menu from "./components/menu/SettingMenu"

const Settings = () => {
    return (
        <>
            <div className="w-full p-4 relative">
                <div className="grid grid-cols-12 gap-4">
                    <Menu />
                    <div className="col-span-3 h-80 border border-black"></div>
                </div>
            </div>
        </>
    );
};

export default Settings;
