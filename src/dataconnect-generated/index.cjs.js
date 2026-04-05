const { queryRef, executeQuery, validateArgsWithOptions, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'smartium-main',
  location: 'europe-west1'
};
exports.connectorConfig = connectorConfig;

const listAllCoursesRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListAllCourses');
}
listAllCoursesRef.operationName = 'ListAllCourses';
exports.listAllCoursesRef = listAllCoursesRef;

exports.listAllCourses = function listAllCourses(dcOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrOptions, options, undefined,false, false);
  return executeQuery(listAllCoursesRef(dcInstance, inputVars), inputOpts && inputOpts.fetchPolicy);
}
;
