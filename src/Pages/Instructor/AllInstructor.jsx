
import { useEffect, useState } from "react";
import Instructor from "./Instructor";
import { GiMusicSpell } from "react-icons/gi";
import { Helmet } from "react-helmet-async";

const AllInstructor = () => {
    const [allInstructors, setAllInstructors] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch('https://summer-camp-school-server-side-eight.vercel.app/instructors')
            .then(res => res.json())
            .then(data => {
                setAllInstructors(data[0].instructors);
                setIsLoading(false);
            })
    }, [])

    return (
        <div>
            <Helmet>
                <title>Cascade School of Music | Instructors</title>
            </Helmet>
            {isLoading ? (
                <div className="lg:text-[80px] text-black md:text-[70px] text-[30px] m-24 flex items-center justify-center">L<span><GiMusicSpell /></span>ADING...</div>
            ) : (
                <div className="lg:mx-12 lg:gap-6 mb-10 grid md:grid-cols-2 lg:grid-cols-3">
                    {
                        allInstructors.map(instructor => <Instructor key={instructor.id} instructor={instructor}></Instructor>)
                    }
                </div>
            )}
        </div>
    );
};

export default AllInstructor;