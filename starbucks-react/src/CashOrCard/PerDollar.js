function PerDollar(props){
    
    return (
        <div className={props.class}>
            <p className={"leading-7 text-primary-500 text-19 md:text-24 font-semi " + props.class}>{props.children}</p>
            <p className="pb-8 text-primary-500 ">{props.text}</p>
            
        </div>
    )
}
export default PerDollar