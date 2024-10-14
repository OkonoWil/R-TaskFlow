import ReactLogo from "../assets/react.svg";

export const Header = () => {

    return (
        <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row w-full">
                <img src={ReactLogo} alt="" className="w-14 mr-4"/>
                <div className="w-full">
                    <h1 className="text-3xl text-blue-100 font-bold"><span className="text-blue-700">RTask</span>Flow</h1>
                    <h2 className="text-gray-500 w-full">Eliminez le chaos, suivez le flux</h2>
                </div>
            </div>
            <code className="text-blue-700">
                v.1.0
            </code>
        </div>
    )
}