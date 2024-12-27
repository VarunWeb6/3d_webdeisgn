import React from 'react';

export default function FeaturedProjects() {
    return (
        <div className="w-full py-12">
            <div className="w-full px-20 border-b-[1px] pb-16 border-zinc-700">
                <h1 className="text-7xl font-thin tracking-tight mb-12">Featured Projects</h1>
            </div>
            <div className="px-20 mt-10">
                <div className="cards w-full flex gap-10">
                    <div className="card-container w-1/2 h-[80vh] bg-zinc-800">
                        <div className="w-full h-full bg-green-800 rounded-lg shadow-lg overflow-hidden">
                            <div className="name-container w-full text-center text-white">
                                Fyde
                            </div>
                        </div>
                    </div>
                    <div className="card-container w-1/2 h-[80vh] bg-zinc-800">
                        <div className="w-full h-full bg-green-800 rounded-lg shadow-lg overflow-hidden">
                            <div className="name-container w-full text-center text-white">
                                Fyde
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cards w-full flex gap-10 mt-20 ">
                <div className="card-container w-1/2 h-[80vh] bg-zinc-800">
                        <div className="w-full h-full bg-green-800 rounded-lg shadow-lg overflow-hidden">
                            <div className="name-container w-full text-center text-white">
                                Fyde
                            </div>
                        </div>
                    </div>
                    <div className="card-container w-1/2 h-[80vh] bg-zinc-800">
                        <div className="w-full h-full bg-green-800 rounded-lg shadow-lg overflow-hidden">
                            <div className="name-container w-full text-center text-white">
                                Fyde
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
