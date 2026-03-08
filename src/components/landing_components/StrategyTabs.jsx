import { useState } from 'react';
import MPCStrategy from './MPCStrategy';
import BIPCStrategy from './BIPCStrategy';

const GRID_BG = {
    backgroundColor: '#fffefd',
    backgroundImage:
        'linear-gradient(#E2E8F0 1px, transparent 1px),' +
        'linear-gradient(90deg, #E2E8F0 1px, transparent 1px)',
    backgroundSize: '40px 40px',
};

export default function StrategyTabs() {
    const [activeTab, setActiveTab] = useState('mpc');

    return (
        <section id="strategy" className="py-20 relative overflow-hidden" style={GRID_BG}>

            {/* TABS */}
            <div className="relative z-20 max-w-xl mx-auto px-4 sm:px-6 mb-8 flex flex-col items-center">
                <div
                    className="inline-flex items-center gap-1 p-1.5 rounded-2xl bg-white shadow-sm border border-gray-100"
                >
                    <button
                        onClick={() => setActiveTab('mpc')}
                        className={`relative px-8 py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 w-40 text-center ${activeTab === 'mpc'
                            ? 'text-white bg-[#0A1628] shadow-md scale-100'
                            : 'text-[#6B7280] hover:text-[#0A1628] bg-transparent hover:bg-gray-50 scale-95'
                            }`}
                    >
                        MPC Path
                    </button>
                    <button
                        onClick={() => setActiveTab('bipc')}
                        className={`relative px-8 py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 w-40 text-center ${activeTab === 'bipc'
                            ? 'text-white bg-[#0A1628] shadow-md scale-100'
                            : 'text-[#6B7280] hover:text-[#0A1628] bg-transparent hover:bg-gray-50 scale-95'
                            }`}
                    >
                        BIPC Path
                    </button>
                </div>
            </div>

            {/* CONTENT */}
            <div className="relative w-full">
                {activeTab === 'mpc' && <MPCStrategy />}
                {activeTab === 'bipc' && <BIPCStrategy />}
            </div>

        </section>
    );
}
