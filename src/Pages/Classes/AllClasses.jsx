import { useEffect } from "react";
import { useState } from "react";
import Class from "./Class";
import { GiMusicSpell } from "react-icons/gi";
import { Helmet } from "react-helmet-async";

const AllClasses = () => {
    const [classes, setClasses] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch('https://summer-camp-school-server-side-eight.vercel.app/courses')
            .then(res => res.json())
            .then(data => {
                setClasses(data[0].classes);
                setIsLoading(false);
            })
    }, [])
    return (
        <div>
            <Helmet>
                <title>Cascade School of Music | Classes</title>
            </Helmet>
            {isLoading ? (
                <div className="lg:text-[80px] text-black md:text-[70px] text-[30px] m-24 flex items-center justify-center">L<span><GiMusicSpell /></span>ADING...</div>

            ) : (
                <div className="courses lg:mx-12 lg:gap-6 mb-10 grid md:grid-cols-2 lg:grid-cols-3">
                    {classes.map(course => (
                        <Class key={course.id} course={course} />
                    ))}
                </div>
            )}

        </div>
    );
};

export default AllClasses;