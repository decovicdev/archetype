
export default function JoinWaitlistButton(props) {
    
    return (
        <button
            type="button"
            onClick={props.onClick}
            className="inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-[#09E4A8] hover:bg-[#09E4B7] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
            Join waitlist
        </button>
    )
}