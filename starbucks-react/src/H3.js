function H3(props) {
    return(
          <h3 className={"leading-7 tracking-normal text-primary-500  font-semi " + props.class}>{props.children}</h3>
    );
}

export default H3;