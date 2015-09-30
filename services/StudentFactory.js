studentCheckin.factory('StudentsFactory', function StudentsFactory() {
  var factory = {};
  factory.students = [];
  facotry.addStudent = function() {
    factory.students.push({name: factory.studentName, id: factory.students.length + 1, checkinStatus: false});
    factory.studentName = null;
  };
  return factory;
});
