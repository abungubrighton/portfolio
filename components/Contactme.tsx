import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

type Props = {}

function Contactme({ }: Props) {
    return (
        <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                Contact
            </h3>
            <div className="flex flex-col space-y-10 items-center">
                <h4 className="text-4xl font-semibold text-center mt-4">
                    I have got just what you need .{" "}
                    <div className="decoration-[#F7AB0A]/50 underline">Lets Talk</div>
                </h4>

                <div className="space-y-10">
                    <div>
                        <div className="flex items-center space-x-5">
                            <PhoneIcon className="h-7 w-7 animate-pulse text-[#F7AB0A]" />
                            <p className='text-2xl'>+254797323731</p>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center space-x-5">
                            <EnvelopeIcon className="h-7 w-7 animate-pulse text-[#F7AB0A]" />
                            <p className='text-2xl'>brightonhoods@gmail.com</p>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center space-x-5">
                            <MapPinIcon className="h-7 w-7 animate-pulse text-[#F7AB0A]" />
                            <p className='text-2xl'>Nairobi Kenya</p>
                        </div>
                    </div>

                </div>
                <form className='flex flex-col space-y-2 w-fit mx-auto'>
                    <div className='flex space-x-2'>
                        <input  placeholder ="Name" className='contactInput' type="text" />
                        <input placeholder ="Email" className='contactInput' type="email" />
                    </div>

                    <input  placeholder ="Subject" className='contactInput' type="text" />
                    <textarea  placeholder ="Message" className='contactInput' name="" id="" />
                    <button  type="submit" className='bg-[#f7AB0A] py-5 px-10 text-lg font-bold text-black rounded-md'>Submit</button>
                </form>
            </div>
        </div>
        
    )
}

export default Contactme