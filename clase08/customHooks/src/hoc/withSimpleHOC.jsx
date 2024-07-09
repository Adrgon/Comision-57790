const withSimpleHOC = (WrapperComponent) => {
    return (props) => {
        const additionalMessage = " (HOC)"
        return <WrapperComponent {...props} message={props.message + additionalMessage} />
    }
}

export default withSimpleHOC
