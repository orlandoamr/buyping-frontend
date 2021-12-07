

const Blogin = ({type,className, label, onClick}) =>{
    return(
        <div>
            <button type={type} className={className} onClick={onClick}>{label}</button>
        </div>
    );
}

export default Blogin;