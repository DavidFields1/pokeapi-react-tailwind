import React from 'react';
import Loader from './Loader';

const LoadingCard = () => {
    return (
        <div className= "transition ease-in-out">
            <div className="w-72 border border-black m-4 rounded-md overflow-hidden ">                                
                <div className="bg-red-500 p-2 m-0 flex items-center border-b border-black">
                    <div className="rounded-full bg-gray-800 text-white w-7 h-7 text-sm flex justify-center items-center animate-pulse"> </div>
                    <h2 className="font-bold text-xl ml-2 "> <div className="bg-red-900 w-28 h-6 rounded-full animate-pulse"></div> </h2>
                </div>

                <div className="flex">
                    <div className="w-1/2 grid items-center">  
                        <Loader />
                        <div className="w-full flex justify-evenly text-xs text-center m-0">
                        </div>
                    </div>
                    <div className="w-1/2 h-full pb-4 bg-blue-400 text-center">
                        <div>
                            <p className="w-full bg-blue-900 text-white font-semibold"> </p>
                            <div className="grid justify-center">
                                <div className="mb-0.5">  <div className="bg-blue-900 h-6 w-36"> </div> </div>                
                                <div className="mb-0.5">  <div className="bg-gray-700 w-28 h-4 rounded-full animate-pulse"></div> </div>
                                <div className="mb-0.5">  <div className="bg-gray-700 w-28 h-4 rounded-full animate-pulse"></div> </div>
                            </div>
                        </div>
                        <div className="w-full h-16 mt-3">
                        <p className="mb-0.5">  <div className="bg-blue-900 h-6 w-36"></div> </p>                
                                <p className="mb-0.5">  <div className="bg-gray-700 w-28 h-4 rounded-full animate-pulse"></div> </p>
                                <p className="mb-0.5">  <div className="bg-gray-700 w-28 h-4 rounded-full animate-pulse"></div> </p>
                            <div>                                                          
                            </div>
                        </div>
                    </div>
                </div>            
            </div>
        </div>
    )
}

export default LoadingCard
