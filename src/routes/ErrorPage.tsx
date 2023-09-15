import { useRouteError, useNavigate } from "react-router-dom";

const ErrorBoundary: React.FC = () => {
  const navigate = useNavigate();
  const error: { status: string; statusText: string; data: string } =
    useRouteError() as { status: string; statusText: string; data: string };

  return (
    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col justify-center items-center text-center">
      <h1 className="font-bold text-4xl text-brand-aqua mb-2">
        {error.status}
        <br />
        {error.statusText}
      </h1>
      <h2 className="text-brand-aqua mb-4">{error.data}</h2>
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="bg-blue-500 text-brand-white p-4 rounded-lg w-32"
      >
        Go Back
      </button>
    </div>
  );
};

export default ErrorBoundary;
