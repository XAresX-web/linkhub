// components/formItems/RadioTogglers.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function RadioTogglers({
  options,
  defaultValue,
  onChange,
  className,
}) {
  return (
    <div className={`radio-togglers shadow rounded-md ${className || ""}`}>
      {options.map((option) => (
        <label
          key={option.value}
          className="flex items-center gap-2 cursor-pointer p-2"
        >
          <input
            type="radio"
            name="bgType"
            onChange={(ev) => onChange(ev.target.value)}
            checked={defaultValue === option.value}
            value={option.value}
            className="hidden"
          />
          <div
            className={`flex items-center gap-2 ${
              defaultValue === option.value ? "text-blue-600" : "text-gray-700"
            }`}
          >
            <FontAwesomeIcon icon={option.icon} />
            <span>{option.label}</span>
          </div>
        </label>
      ))}
    </div>
  );
}
