function Buttons(props){
    const themeClass =
       props.theme === "black" ? " bg-primary-500 text-white" : " border-primary-500 text-primary-500 ";
      
    return (
      <a href={props.linkUrl}
       className={
           "flex-shrink-0 px-4 py-2 text-sm border font-semi rounded-full "
           +
            props.class + themeClass
           }
           >       
        {props.children }
      </a>
    );
}

export default Buttons;