export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  label: string;
}

function Input(props: InputProps) {
  const { label, ...inputProps } = props;
  return (
    <div>
      <label
        htmlFor={inputProps.name}
        className="block text-sm font-medium text-gray-700"
      >
        {props.label}
      </label>
      <div className="mt-1">
        <input
          {...inputProps}
          className={`block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500 sm:text-sm ${inputProps.className}`}
        />
      </div>
    </div>
  );
}

export default Input;
