import File from '../File';

const txtFile = (
    {
      id,
      accept,
      onChange,
      placeholder,
      value,
      className,
      name,
      ...elseProps
    }
  )=>{
    return (
      <File
        id={id}
        type="file"
        accept={accept}
        onChange={onChange}
        value={value}
        name={name}
        {...elseProps}
      >
      </File>
    );
  }
  
  export default txtFile;