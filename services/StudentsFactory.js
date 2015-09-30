studentCheckin.facotry('StudentsFactory', function StudentsFactory() {
  var factory = {};
  factory.students = [];

  factory.addStudent = function() {
    factory.students.push({name: factory.studentName, checkinStatus: false});
    factory.studentName = null;
  };
})
