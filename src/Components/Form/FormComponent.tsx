

export default function FormComponent() {
    return (
        <form className="max-w-md mx-auto">
            <div className="mb-4 pt-[10vw] sm:pt-[2vw]">
                <label htmlFor="email" className="block pb-[3vw] sm:pb-[.5vw] sm:text-[.8vw] text-Charcoal-Grey font-bold text-[3.5vw]">Email address</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="email@company.com"
                    className="border border-gray-300 rounded-md py-2 px-4 block w-full sm:py-[.8vw] sm:px-4 sm:text-xs"
                />
            </div>
            <button
                type="submit"
                className="bg-Dark-Slate-Grey hover:bg-Tomato text-white font-bold py-3 px-6 sm:py-[.8vw] rounded-md w-full sm:w-[16vw] sm:text-[.7vw]"
            >
                Subscribe to monthly newsletter
            </button>
        </form>
    );
}
