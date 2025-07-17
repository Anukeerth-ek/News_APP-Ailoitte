import React from "react";

type ErrorMessageProps = {
  error: string;
};

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
     return (
          <div className="flex flex-col items-center justify-center bg-red-50 border border-red-300 text-red-700 rounded-lg p-6 shadow-md max-w-md mx-auto my-10">
               <div className="text-4xl mb-3">⚠️</div>
               <p className="text-center font-semibold mb-4">{error}</p>
               <button
                    onClick={() => window.location.reload()}
                    className="px-4 py-2 bg-red-600 text-white rounded cursor-pointer hover:bg-red-700 transition"
               >
                    Retry
               </button>
          </div>
     );
};

export default ErrorMessage;
