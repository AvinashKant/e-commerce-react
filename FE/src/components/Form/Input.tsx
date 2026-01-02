interface InputProps {
  type: string;
  placeholderText?: string;
  classes?: string;
}

const Input: React.FC<InputProps> = ({ type, placeholderText, classes }) => {
  return (
    <div className={`relative w-full ${classes}`}>
      <input
        type={type}
        id="fullname"
        className="peer w-full h-12 px-3 text-lg border border-gray-300 rounded-md outline-none
               focus:border-blue-600 focus:ring-1 focus:ring-blue-200 transition-all"
      />
      <label
        htmlFor="fullname"
        className="absolute left-3 top-3 font-semibold text-base
               transition-all duration-200 ease-in-out
               peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-lg
               peer-focus:top-1 peer-focus-out:top-1 peer-focus:text-xs peer-focus:text-blue-600"
      >
        {placeholderText}
      </label>
    </div>
  );
};

export default Input;
