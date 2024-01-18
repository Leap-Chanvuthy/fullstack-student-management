const Student = require('../models/student');
const mongoose = require('mongoose');



const getStudent =  ( async (req , res) => {
    const {id} = req.params;
    const student = await Student.findById(id);
    try {
        if (!student){
            res.status(401).json({message : 'cant find student with this ID'});

        }
        res.status(200).json({message : student});

    }catch(error){
        res.status(401).json({message : error.message});
    }
});


const getStudents = (async (req , res) => {
    const student = await Student.find().sort({createdAt: -1});
    try {
        if (!student){
            res.status(401).json({message : 'No student found !!!'});
        }
        res.status(200).json(student);
    }
    catch (error){
        res.status(401).json({message : error.message});
    }
})

const addStudent = async (req, res) => {

    const {
        firstname,
        lastname,
        gender,
        contact,
        course,
        address,
        // attendance,
        id_card,
        dob,
        email
    } = req.body;

    let emptyFields = [];
    if (!firstname){
        emptyFields.push('firstname');
    }
    if (!lastname){
        emptyFields.push('lastname');
    }
    if (!gender){
        emptyFields.push('gender');
    }

    if (emptyFields.length > 0){
        return res.status(400).json({error : 'All this fields must be filled' , emptyFields});
    }
    
    try {
        const create = await Student.create({
            firstname,
            lastname,
            gender,
            contact,
            course,
            address,
            id_card,
            dob,
            email
        });

        return res.status(200).json({ message: 'Student added', create });
    } catch (error) {
        console.error('Error adding student:', error);
        return res.status(400).json({ error: error.message});
    }
};
 

const deleteStudent = (async (req , res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'No such student with this id'})
    }
  
    const workout = await Student.findOneAndDelete({_id: id})
  
    if (!workout) {
      return res.status(400).json({error: 'No such workout'})
    }
  
    res.status(200).json(workout)
})

module.exports = {
    getStudent,
    getStudents,
    addStudent,
    deleteStudent
}