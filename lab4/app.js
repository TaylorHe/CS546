/**
 *  Taylor He
 *  CS546 Lab 4
 *  I pledge my honor that I have abided by the Stevens Honor System.
 *      - Taylor He
 */

const todo = require('./todo');
const mongoConnection = require('./mongoConnection');


async function main() {
    // Delete previously stored items
    // await todo.deleteTodoItems();


    // Step 1: Create Dino Task
    const dino = {
        title: "Ponder Dinosaurs",
        description: "Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?"
    }
    const dinoTask = await todo.createTask(dino.title, dino.description);

    // Step 2: Create Pokemon task
    console.log(dinoTask);
    const poke = {
        title: "Play Pokemon with Twitch TV",
        description: "Should we revive Helix?"
    }
    const pokeTask = await todo.createTask(poke.title, poke.description);

    // Step 3: Query and log all tasks
    console.log(await todo.getAllTasks());
    
    // Step 4: Remove the first task
    await todo.removeTask(dinoTask._id);

    // Step 5: Query and log all tasks
    console.log(await todo.getAllTasks());

    // Step 6: Complete the remaining task
    await todo.completeTask(pokeTask._id);

    // Step 7: Log the task that has been completed with its new value
    console.log(await todo.getTask(pokeTask._id));

    // Close database
    const db = await mongoConnection();
    await db.serverConfig.close();

}
main();

module.exports = {
    firstName: "Taylor", 
    lastName: "He", 
    studentId: "10407544",
    main
};