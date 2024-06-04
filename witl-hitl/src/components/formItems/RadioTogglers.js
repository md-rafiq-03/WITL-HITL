import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function RadioTogglers({options,defaultValue,onChange}) {
  return (
    <div className="radio-togglers shadow">
        {options.map(option=>(
            <label>
                <input 
                    type="radio" 
                    name="bgType" 
                    defaultChecked={defaultValue==option.value}
                    value={option?.value} 
                    onClick={ev=>onChange(ev.target.value)}
                />
                <div>
                    <FontAwesomeIcon icon={option?.icon} />
                    <span>{option?.label}</span>
                </div>
            </label>
        ))}
    </div>
  );
}
