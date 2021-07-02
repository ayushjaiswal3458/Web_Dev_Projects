function RoundedLink(props) {
  const themeClass =
     props.theme === "white" ? " border-white text-white" : "text-primary-500 border-black";
    
  return (
    <a href={props.linkUrl}
     className={
         "flex-shrink-0 px-4 py-2 text-sm font-semi border rounded-full "
         +
          props.class + themeClass
         }
         >       
      {props.children }
    </a>
  );
}

export default RoundedLink;
