import React from 'react'
import Lottie from 'lottie-react'

const LottiePlayer = ({ animationData, className = "w-full h-full" }) => {
    if (!animationData) {
        return (
            <div className={`bg-slate-100 flex items-center justify-center rounded-xl ${className}`}>
                <p className="text-slate-400 text-xs">Animation Placeholder</p>
            </div>
        )
    }

    return (
        <div className={className}>
            <Lottie animationData={animationData} loop={true} />
        </div>
    )
}

export default LottiePlayer
