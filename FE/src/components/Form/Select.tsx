interface SelectProps {
    placeholderText?: string;
    classes?: string;
    values: ValueProp[];
}

interface ValueProp {
    text: string;
    value: string | number;
}

const Select: React.FC<SelectProps> = ({
    placeholderText,
    classes,
    values
}) => {
    return (
        <div className={`flex flex-col w-full ${classes}`}>
            <label className="text-black text-md" htmlFor="">
                {placeholderText}
            </label>
            <select className="w-full h-12 px-3 text-md border border-gray-300 rounded-md" name="" id="">
                <option value="">Select {placeholderText}</option>
                {
                    values.map((value, index) => (
                        <>
                            <option key={index} value={value.value}>{value.text}</option>
                        </>
                    )
                    )
                }
            </select>
        </div>
    );
};

export default Select;