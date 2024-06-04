import { children } from "react";
import {useFormStatus} from 'react-dom'

export default function SubmitButton({children}){
    const {pending}=useFormStatus();

    return (
        <button
            disabled={pending}
            type="submit"
            className="bg-blue-500 disabled:bg-blue-300 text-white disabled:text-gray-400 w-full py-2 px-4 text-white flex justify-center
                  gap-2 items-center "
        >
          {pending && (
            <span>Saving...</span>
          )}
          {!pending && children}
      </button>
    );
}