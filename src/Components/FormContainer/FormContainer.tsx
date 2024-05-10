export default function FormContainer(): JSX.Element {
    return (

        <div className="sm:bg-white sm:w-[42vw] sm:h-[30vw] w-full h-full rounded-3xl sm:flex sm:justify-between sm:items-center flex-row-reverse ">

            <div className="w-full sm:w-[20vw] sm:h-[28vw] sm:pr-[1vw] flex justify-center items-start">
                {/* Imagen de vista móvil */}
                <img src="/assets/images/illustration-sign-up-mobile.svg" alt="" className="sm:hidden w-full h-auto object-cover" />
                {/* Imagen de vista desktop */}
                <img src="/assets/images/illustration-sign-up-desktop.svg" alt="" className="hidden sm:block w-full h-full" />
            </div>

            <div className="pt-[6vw] pl-[6vw] pr-[10vw] sm:w-[20vw] sm:pl-[3vw] sm:pr-[1vw]">
                <div>
                    <h1 className="text-[10vw] sm:text-[2.4vw] text-Dark-Slate-Grey font-bold">Stay updated!</h1>
                    <p className="text-[3.8vw] sm:text-[.7vw] text-Dark-Slate-Grey font-bold">Join 60,000+ product managers receiving monthly updates on:</p>
                </div>
            </div>
        </div>


    );
}



