import { useForm } from "../../../hooks/useForm"
import { FcGoogle } from 'react-icons/fc'

const LoginForm = () => {
    const { handleSubmit } = useForm()

    return (
        <div className="h-[550px] w-[430px] rounded-lg shadow bg-primary-600">
            <div className="flex flex-col p-8 items-center w-full h-full text-typography gap-8">
                <div className="flex flex-col w-full items-center gap-4">
                    <h3 className="text-3xl font-semibold">Sign in</h3>
                    <hr className="w-full h-px rounded-lg border-none bg-primary-400" />
                </div>
                <div className="flex flex-col w-full gap-5">
                    <div className="flex flex-col w-full gap-1.5">
                        <label htmlFor="email" className="pl-2">Email</label>
                        <input
                            type="text"
                            placeholder="example@gmail.com"
                            className="
                            bg-primary-700 
                            p-2.5 
                            rounded-lg 
                            outline-none 
                            focus:ring-2 
                            focus:ring-primary-800 
                            placeholder:text-typography/80
                            text-typography
                        "
                        />
                    </div>
                    <div className="flex flex-col w-full gap-1.5">
                        <label htmlFor="email" className="pl-2">Password</label>
                        <input
                            type="password"
                            placeholder="***********"
                            className="
                            bg-primary-700 
                            p-2.5 
                            rounded-lg 
                            outline-none 
                            focus:ring-2 
                            focus:ring-primary-800 
                            placeholder:text-typography/80
                            text-typography
                        "
                        />
                    </div>
                </div>
                <button className="bg-red-600 p-2.5 rounded-lg w-full hover:bg-red-700 transition">Login</button>
                <div className="relative flex py-5 items-center w-full">
                    <div className="grow border-t border-primary-400" />
                    <span className="mx-4 shrink text-typography">OR</span>
                    <div className="grow border-t border-primary-400" />
                </div>
                <div className="flex flex-row">
                    <div>
                        <FcGoogle size={22} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm