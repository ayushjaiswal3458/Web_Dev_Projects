function P(props) {
    return <p className = {"font-normal text-primary-500 " + props.class }>{props.children}</p>
}

export default P; 