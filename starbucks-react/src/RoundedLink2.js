function RoundedLink2(props) {
    const themeClass =
       props.theme === "green" ? " text-white bg-primary-300 " : "text-primary-500 border-black";
      
    return (
      <a href={props.linkUrl}
       className={
           "flex-shrink-0 px-4 py-2 text-sm font-semi rounded-full "
           +
            props.class + themeClass
           }
           >       
        {props.children }
      </a>
    );
  }
  
  export default RoundedLink2;
  