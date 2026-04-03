const { queryRef, executeQuery, validateArgs } = require('firebase/data-connect');

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

exports.listAllCourses = function listAllCourses(dc) {
  return executeQuery(listAllCoursesRef(dc));
};
