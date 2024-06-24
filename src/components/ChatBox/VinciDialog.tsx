// import DialogCrystalSvg from "@/public/asset/vision/Header/dialogCrystal.svg"
import Image from "next/image";
const VinciDialog = ({ children, title }: { children: React.ReactNode; title: string | undefined }) => {
    return (
        <div className="w-full flex justify-start px-2 sm:px-6">
            <div className="relative text-sm max-w-[330px] sm:max-w-[500px] p-4 break-words" style={{ backgroundColor: 'white', borderRadius: '12px', color: 'black' }}>
               
                {title && <div className=" font-extrabold text-[16px] -mt-1 mb-1">
                    {title}
                </div>}
                {children}
            </div>
        </div>
    )
}
export default VinciDialog;