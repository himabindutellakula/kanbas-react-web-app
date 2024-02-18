import BooleanVariables from "./Variables/BooleanVariables";
import VariableTypes from "./Variables/VariableTypes";
import VariablesAndConstants from "./Variables/VariablesAndConstants";
import IfElse from "./Conditionals/IfElse";
import TernaryOperator from "./Conditionals/TernaryOperator";
import WorkingWithFunctions from "./Functions/WorkingWithFunctions";
import WorkingWithArrays from "./Arrays/WorkingWithArrays";
import JsonStringify from "./json/JsonStringify";
import TemplateLiterals from "./String/TemplateLiterals";
import House from "./json/House";
import Spreading from "./json/Spreading";
import Destructing from "./json/Destructing";
import FunctionDestructing from "./Functions/FunctionDestructing";

function JavaScript() {
    console.log('Hello World!');
    return (
        <div>
            <h1>JavaScript</h1>
            <VariablesAndConstants />
            <VariableTypes />
            <BooleanVariables />
            <IfElse />
            <TernaryOperator />
            <WorkingWithFunctions />
            <WorkingWithArrays />
            <JsonStringify />
            <TemplateLiterals />
            <House />
            <Spreading />
            <Destructing />
            <FunctionDestructing />
        </div>
    );
}
export default JavaScript