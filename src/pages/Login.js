function Login() {
    const handleLogin = () => {
        console.log('login incoming');
    };

    return (
        <div className="w-screen h-screen">
            <div id="" className="w-full">
                <div className="w-full border-b flex justify-center">
                    <a href="/" className="flex items-center gap-3 p-10">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="32" height="32">
                            <circle cx="24" cy="24" r="24" fill="rgba(255,255,255,0.2)"></circle>
                            <circle cx="24" cy="24" r="22" fill="#1c202b" className="brand-color"></circle>
                            <circle cx="24" cy="24" r="10" fill="#ffffff"></circle>
                            <circle cx="13" cy="13" r="2" fill="#ffffff" className="brand-animate"></circle>
                            <path d="M 14 24 L 24 24 L 14 44 Z" fill="#FFFFFF"></path>
                            <circle cx="24" cy="24" r="3" fill="#000000"></circle>
                        </svg>
                        
                        <span className="sans-serif font-bold">RMW Music</span>
                    </a>
                </div>
                
                <div className="mt-10 flex flex-col justify-center items-center">
                    <div className="w-full max-w-[300px] flex flex-col justify-center items-center gap-3 text-center">
                        <a href="#" className="w-full flex justify-center items-center px-4 py-2 text-white bg-spotify rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 0C5.372 0 0 5.373 0 12c0 6.628 5.372 12 12 12 6.627 0 12-5.372 12-12C24 5.373 18.627 0 12 0zm5.305 17.473c-.227.375-.703.494-1.08.268-2.946-1.785-6.654-2.185-11.033-1.193-.432.102-.874-.16-.976-.595-.103-.436.16-.874.595-.976 4.72-1.047 8.78-.582 12.086 1.293.374.226.494.704.268 1.08zm1.508-3.196c-.288.462-.906.608-1.368.321-3.38-2.117-8.542-2.73-12.548-1.486-.514.156-1.062-.119-1.218-.635-.156-.515.12-1.062.635-1.218 4.49-1.364 10.154-.682 13.898 1.717.462.287.608.905.321 1.368zm.113-3.236C15.1 9.32 8.918 9.115 5.536 10.393c-.594.2-1.236-.128-1.435-.721-.2-.593.127-1.236.721-1.435 3.844-1.297 10.662-1.051 14.764 1.644.527.33.688 1.036.358 1.562-.33.527-1.036.688-1.562.358z"/>
                            </svg>

                            <span>Sign in with Spotify</span>
                        </a>
                        
                        <a href="#" className="w-full flex justify-center items-center px-4 py-2 text-white bg-facebook rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.407.593 24 1.324 24H12.82v-9.294H9.692v-3.622h3.128V8.41c0-3.1 1.894-4.787 4.66-4.787 1.325 0 2.463.099 2.794.143v3.24h-1.918c-1.504 0-1.794.715-1.794 1.762v2.31h3.586l-.467 3.622h-3.119V24h6.116C23.407 24 24 23.407 24 22.676V1.324C24 .593 23.407 0 22.676 0z"/>
                            </svg>

                            <span>Sign in with Facebook</span>
                        </a>
                    </div>
                    
                    <div className="my-5 text-sm">OR</div>
                    
                    <div className="w-full max-w-[350px] mx-auto">
                        <form className="space-y-6" action="#" method="POST">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                                <div className="mt-2">
                                    <input id="email" name="email" type="email" required className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                    <div className="text-sm">
                                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <input id="password" name="password" type="password" required className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div>
                                <button onClick={() => handleLogin()} className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                            </div>
                        </form>
                            
                        <div className="mt-3">
                            Do not have an account? <button href="#" className="text-primary hover:underline">Sign up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;