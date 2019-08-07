
const config = require('config.json')('./env.json');
const firebaseConfig = config[process.env.NODE_ENV].firebaseConfig;
// console.log(process.env.NODE_ENV);
// console.log(config[process.env.NODE_ENV]);
// const firebaseConfig = {
//     apiKey: "AIzaSyCLInhn0rEncZe6wOOccEdRIDSqpBQWdfw",
//     authDomain: "smakky-39f67.firebaseapp.com",
//     databaseURL: "https://smakky-39f67.firebaseio.com",
//     projectId: "smakky-39f67",
//     storageBucket: "smakky-39f67.appspot.com",
//     messagingSenderId: "183750459167",
//     appId: "1:183750459167:web:0fefcc2e7840c4f0"
// }
console.log(firebaseConfig);
const admin = require('firebase');
const firebase = admin.initializeApp(firebaseConfig);

const db = firebase.firestore();

const saveStudentDetails = async function (data) {
    if (!data) throw new Error('data is empty');
    try {
        let result = await db.collection('students').add(data);
        let response = {};
        response.id = result.id;
        response.data = data;
        response.message = "success";
        return response;
    } catch (err) {
        throw err;
    }
}

const fetchStudentDetails = async function () {
    try {
        let students = [];
        let result = await db.collection('students').get();
        result.forEach((doc) => {
            students.push({
                id: doc.id,
                data: doc.data()
            });
        });
        return students;
    } catch (err) {
        throw err;
    }
}

const updateStudentDetailsByID = async function (id, data) {
    try {
        if (!id) throw new Error('id is empty');
        if (!data) throw new Error('data is empty');
        const result = await db.collection('students').doc(id).set(data, { merge: true });
        let response = {};
        response.id = id;
        response.data = data;
        response.message = "success";
        return response;
    } catch (err) {
        throw err;
    }
}

const deleteStudentDetailsByID = async function (id) {
    try {
        if (!id) throw new Error('id is empty');
        await db.collection('students').doc(id).delete();
        let response = {};
        response.id = id;
        response.message = "success";
        return response;
    } catch (err) {
        throw err;
    }
}

const fetchStudentDetailsByID = async function (id) {
    try {
        if (!id) throw new Error('id is empty');
        const student = await db.collection('students').doc(id).get();
        if (!student.exists) {
            throw new Error('student does not exists');
        }
        let response = {};
        response.id = student.id;
        response.data = student.data();
        response.message = "success";
        return response;
    } catch (err) {
        throw err;
    }
}

module.exports = { "saveStudentDetails": saveStudentDetails, "fetchStudentDetails": fetchStudentDetails, "deleteStudentDetailsByID": deleteStudentDetailsByID, "updateStudentDetailsByID": updateStudentDetailsByID, "fetchStudentDetailsByID": fetchStudentDetailsByID }