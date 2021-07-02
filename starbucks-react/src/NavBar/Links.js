function Links(props) {
  return (
    <div className={"" + props.class}>
      <a
        href="#"
        className="leading-5 tracking-widest text-14px font-extrasemi text-primary-500"
      >
        {props.children}
      </a>
    </div>
  );
}

export default Links;
