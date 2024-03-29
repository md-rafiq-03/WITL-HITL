import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

export default function LoginPage(){
    return (
        <div>
            <div className="p-4 max-w-xs m-auto">
                <h1 className="text-4xl font-bold text-center mb-2"  >Sign In</h1>

                <p className="text-center text-gray-500 mb-6">
                    Sing In to your account using one of the options given below
                </p>

                <button className="bg-white shadow text-center w-full py-4 flex justify-center gap-2 ">
                    <FontAwesomeIcon icon={faGoogle} className="w-6 " />
                    <span>Sign In with Google</span>
                </button>

            </div>
            
        </div>
    )
}