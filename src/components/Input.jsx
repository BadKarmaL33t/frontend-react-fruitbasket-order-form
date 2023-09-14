function Input({ type, name, checked, textarea, select, children, handleChange }) {

    return (
        <>
            {type === "text" && (
                <input
                    type={type}
                    name={name}
                    onChange={handleChange}
                />
            )}

            {type === "radio" && (
                <input
                    type={type}
                    name={name}
                />
            )}

            {type === "checkbox" && (
                <input
                    type={type}
                    name={name}
                    checked={checked}
                    onChange={handleChange}
                />
            )}

            {select && (
                <select
                    name={name}
                >
                    {children}
                </select>
            )}

            {textarea && (
                <textarea
                    name={name}
                    rows="5"
                    cols="50"
                >
          {children}
        </textarea>
            )}
        </>
    );
}

export default Input;