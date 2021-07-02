function EnterCode(props){
    return (
        <div class={"" +props.class} >
          <input id="star code"
            className={"w-full px-4 py-3 placeholder-gray-500 border border-gray-600 appearance-none md:placeholder-black lg:placeholder-black rounded-xl focus:ring-2 focus:ring-primary-300 focus:outline-none" + props.class}
            placeholder="Enter your Star code" type="code" />
        </div>
    );
}

export default EnterCode;