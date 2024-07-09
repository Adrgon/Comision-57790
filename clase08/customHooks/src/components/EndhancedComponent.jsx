import withSimpleHOC from "../hoc/withSimpleHOC"
import SimpleComponent from "./SimpleComponent"


const EndhancedComponent = withSimpleHOC(SimpleComponent)

export default EndhancedComponent;
