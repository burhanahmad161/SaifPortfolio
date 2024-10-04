"use client";

import CountUp from "react-countup";

// Define the type for each stat
interface Stat {
    num: number;
    text: string;
}

// Define the stats array with the appropriate type
const stats: Stat[] = [
    {
        num: 1.2,
        text: "Years of experience",
    },
    {
        num: 5,
        text: "Projects Completed",
    },
    {
        num: 9,
        text: "Technologies Mastered",
    },
    {
        num: 142,
        text: "Code Commits",
    },
];

const Stats: React.FC = () => {
    return (
        <section className="flex max-sm:mb-6 pt-2 pb-12 xl:pt-14 xl:pb-0 max-xl:mt-5">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 tracking-widest">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="text-center">
                            <h3 className="text-6xl font-bold text-purple">
                                {/* Use CountUp to animate the numbers */}
                                <CountUp end={stat.num} duration={2} />
                            </h3>
                            <p className="text-xl mt-2">{stat.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
