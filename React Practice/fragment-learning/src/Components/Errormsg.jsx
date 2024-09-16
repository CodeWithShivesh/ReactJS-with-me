function Errormsg(props){

    let {items}=props;
    

    return <>{items.length === 0 && <h1>I'm still hungry.</h1> }
            </>;
};

export default Errormsg;