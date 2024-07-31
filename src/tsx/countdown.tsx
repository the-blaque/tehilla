import React, { useState, useEffect } from 'react';

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

interface CountdownTimerProps {
    targetDate: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft(targetDate));
        }, 1000);

        // Clear interval on component unmount
        return () => clearInterval(timer);
    }, [targetDate]);

    const calculateTimeLeft = (targetDate: Date): TimeLeft => {
        const difference = targetDate.getTime() - new Date().getTime();
        let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    return (
        <div className='flex justify-center items-center text-center space-x-4 font-semibold text-xl lg:text-5xl'>
            {Object.keys(timeLeft).length > 0 && Object.entries(timeLeft).map(([unit, value]) => (
                <span key={unit}>
                    {value} {unit}
                </span>
            ))}
        </div>
    );
};

export default CountdownTimer;
