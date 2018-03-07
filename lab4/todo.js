/* 
 * Taylor He
 * CS 546 Lab 4
 * I pledge my honor that I have abided by the Stevens Honor System.
 *   - Taylor He
 */

const uuidv1 = require('uuid/v1');
const mongoCollections = require('./mongoCollections');
const todoItems = mongoCollections.todoItems;

/**
 *  Inserts a new task into the database with title and description
 */
 async function createTask(title, description) {
    if (arguments.length !== 2) {
        throw "Incorrect number of arguments";
    }
    if (typeof title !== 'string' || typeof description !== 'string') {
        throw "Incorrect argument type";
    }
    try {
        const task = {
            "_id" : uuidv1(),
            "title" : title,
            "description" : description,
            "completed" : false,
            "completedAt" : null
        }
        const t = await todoItems();
        const inserted = await t.insertOne(task);

        // Check if the task was inserted!
        if (task.insertedCount === 0) {
            throw "Error inserting task";
        }

        return await t.findOne({_id: task._id});


    } catch(error) {
        throw error;
    }
 }

/**
 *  Gets all tasks from the database
 */
async function getAllTasks() {
    if (arguments.length !== 0) {
        throw "Incorrect number of arguments";
    }
    try {
        const t = await todoItems();
        return await t.find().toArray();
    } catch (error) {
        throw error;
    }
}

/**
 *  Gets a task from the database with given id
 */
async function getTask(id) {
    if (arguments.length !== 1) {
        throw "Incorrect number of arguments";
    }
    if (typeof id !== 'string') {
        throw "You must provide an id to search for";
    }
    const t = await todoItems();
    const task = await t.findOne({ _id : id});
    if (task === null) {
        throw "No task with that id";
    }
    return task;
}

/**
 *  Sets a task's completed field to true and completedAt to current time
 */
async function completeTask(taskId) {
    if (arguments.length !== 1) {
        throw "Incorrect number of arguments";
    }
    if (typeof taskId !== 'string') {
        throw "You must provide an id to search for";
    }
    try {
        const t = await todoItems();
        const findAndUpdate = await t.findOneAndUpdate(
            {_id: taskId},
            { $set : {completed : true, completedAt: new Date()}}
        );
        if (findAndUpdate.modifiedCount === 0) {
           throw "Error finding or updating task";
        }
        return findAndUpdate.value;
    } catch (error) {
        throw error;
    }
}

/**
 *  Removes a task from the database
 */
async function removeTask(taskId) {
    if (arguments.length !== 1) {
        throw "Incorrect number of arguments";
    }
    if (typeof taskId !== 'string') {
        throw "You must provide an id to search for";
    }
    try {
        const t = await todoItems();
        const findAndDelete = await t.findOneAndDelete({_id: taskId});
        if (findAndDelete.deletedCount === 0) {
           throw "Error finding or deleting task";
        }
        return findAndDelete;
    } catch (error) {
        throw error;
    }
}

/**
 *  Deletes all tasks from the database
 */
// async function deleteTodoItems() {
//     try {
//         const t = await todoItems();
//         t.deleteMany({});
//     } catch (error) {
//         throw error;
//     }
// }

module.exports = {
    firstName: "Taylor", 
    lastName: "He", 
    studentId: "10407544",
    createTask,
    getAllTasks,
    getTask,
    completeTask,
    removeTask
}
 // async function main() {
 //    const createdTask = await createTask("My First Task", "This is the first thing I need to do today");
 //    console.log(createdTask);
 // }
 // main();