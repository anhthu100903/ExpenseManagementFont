import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
// import { authApi } from '../../api/auth.api';
// import { AxiosError } from 'axios';

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const validateForm = () => {
        if (!email.trim() || !password.trim()) {
            setErrors('Email hoặc mật khẩu không được để trống');
            return false;
        }
        return true;
    };

    const handleSubmit = async () => {
        // e.preventDefault();
        // if (!validateForm()) return;

        // setIsLoading(true);
        // try {
        //     const loginToken = await authApi.login(email, password);
        //     setErrors('');
        //     document.cookie = `jwt=${loginToken.data.token}`;
        //     navigate('/');
        // } catch (error: unknown) {
        //     if (error instanceof AxiosError) {
        //         setErrors(error.response?.data?.message || 'Có lỗi xảy ra');
        //     } else {
        //         setErrors('Lỗi không xác định');
        //     }
        // } finally {
        //     setIsLoading(false);
        // }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Đăng nhập</h2>
                {errors && (
                    <div className="text-red-500 text-sm mb-4 text-center font-semibold">
                        {errors}
                    </div>
                )}
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <input
                            type="email"
                            placeholder="Tên đăng nhập"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`w-full px-4 py-3 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors && !email && 'border-red-500'}`}
                        />
                    </div>
                    <div className="mb-6">
                        <input
                            type="password"
                            placeholder="Mật khẩu"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={`w-full px-4 py-3 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors && !password && 'border-red-500'}`}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-200 flex items-center justify-center"
                    >
                        ĐĂNG NHẬP
                        {isLoading && (
                            <svg
                                className="animate-spin h-5 w-5 text-white ml-2"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                />
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                />
                            </svg>
                        )}
                    </button>
                </form>
                <p className="mt-6 text-center text-sm text-gray-600">
                    Chưa có tài khoản?{' '}
                    <Link to="/signup" className="text-blue-600 hover:underline">
                        Đăng ký
                    </Link>
                </p>
            </div>
        </div>
    );
}
