const MyDialog = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-full flex justify-end px-6 my-4">
            <div className="sm:max-w-[500px] p-4 break-words max-w-[330px] text-sm" style={{ backgroundColor: '#ED4E01', borderRadius: '12px' }}>
                {children}
            </div>
        </div>
    )
}
export default MyDialog;