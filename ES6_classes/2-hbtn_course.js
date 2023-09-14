// 2-hbtn_course.js

class HolbertonCourse {
    constructor(name, length, students) {
      // Verify the types of attributes during object creation
      if (typeof name !== 'string') {
        throw new TypeError('Name must be a string');
      }
  
      if (typeof length !== 'number') {
        throw new TypeError('Length must be a number');
      }
  
      if (!Array.isArray(students) || !students.every((student) => typeof student === 'string')) {
        throw new TypeError('Students must be an array of strings');
      }
  
      // Store attributes in underscore attribute version
      this._name = name;
      this._length = length;
      this._students = students;
    }
  
    // Getter and setter for 'name' attribute
    get name() {
      return this._name;
    }
  
    set name(newName) {
      if (typeof newName === 'string') {
        this._name = newName;
      } else {
        throw new TypeError('Name must be a string');
      }
    }
  
    // Getter and setter for 'length' attribute
    get length() {
      return this._length;
    }
  
    set length(newLength) {
      if (typeof newLength === 'number') {
        this._length = newLength;
      } else {
        throw new TypeError('Length must be a number');
      }
    }
  
    // Getter and setter for 'students' attribute
    get students() {
      return this._students;
    }
  
    set students(newStudents) {
      if (Array.isArray(newStudents) && newStudents.every((student) => typeof student === 'string')) {
        this._students = newStudents;
      } else {
        throw new TypeError('Students must be an array of strings');
      }
    }
  }
  
  export default HolbertonCourse;
  