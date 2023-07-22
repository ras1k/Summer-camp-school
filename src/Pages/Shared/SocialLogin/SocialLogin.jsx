
import useAuth from '../../../hooks/useAuth';
import { FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <div className="divider">OR</div>
            <hr />
            <div className='text-center mt-4'>
                <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline hover:bg-white hover:text-black text-slate-200 btn-neutral">
                    <FaGoogle/>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;