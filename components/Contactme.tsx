import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from 'react-hook-form';

type Props = {};

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};


function Contactme({ }: Props) {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => window.location.href=`mailto:brightonhoods@gmail.com?subject=${formData.subject}&body= Hi my name is ${formData.name}, ${formData.message} (${formData.email})`;
    return (
        <div className="h-screen flex sm:relative sm:space-y-16 flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
            <h3 className="sm:absolute sm:top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                Contact
            </h3>
            <div className="flex flex-col space-y-10 items-center">
                <h4 className="text-4xl font-semibold text-center mt-4">
                    <div className="hidden">I have got just what you need .{" "}</div>
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
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                    <div className='flex space-x-2'>
                        <input {...register('name')} placeholder ="Name" className='contactInput' type="text" />
                        <input {...register('email')} placeholder ="Email" className='contactInput' type="email" />
                    </div>

                    <input {...register('subject')} placeholder ="Subject" className='contactInput' type="text" />
                    <textarea {...register('message')}  placeholder ="Message" className='contactInput' name="" id="" />
                    <button  type="submit" className='bg-[#f7AB0A] py-5 px-10 text-lg font-bold text-black rounded-md'>Submit</button>
                </form>
            </div>
        </div>
        
    )
}

export default Contactme