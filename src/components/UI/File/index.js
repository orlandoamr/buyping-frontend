const File = (
    {
      type,
      accept,
      name,
      id,
      className,
      placeholder,
      value,
      onChange,
      ...elseProps
    }
  )=>{
    const _onChange = onChange || function(e){return null;};
    return (
      <div>
          
          <input
            type={type}
            accept={accept}
            name={name}
            id={id}
            onChange={_onChange}
            value={value}
            {...elseProps}
          />
        </div>
    );
  }
  
  export default File;