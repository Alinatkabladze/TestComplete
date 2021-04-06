function getVariableValues(){
  Project.Variables.test = "testautomation"
  Log.Message(Project.Variables.test)
}

function addVariables(){
  Project.Variables.AddVariable("fromScript", "String")
  
}

function modifyingVariables(){
  Project.Variables.$set("test","test automation")
  Log.Message(Project.Variables.test)
}

function removingVariables(){
  Project.Variables.RemoveVariable("fromScript")
  
}

let name = "Alina"

module.exports.getVarName = getVariableValues;
module.exports.myName = name ;
module.exports.functionForAnotherUnit = function(){Log.Message(Project.Variables.test)}