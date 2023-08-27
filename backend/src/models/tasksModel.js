const conn = require('./connection');

const getAll = async () => {
    const [tasks] = await conn.execute('SELECT * FROM tasks');
    return tasks;
};

const createTask = async (task) => {

    var dateUTC = new Date(Date.now()).toUTCString();

    const { title } = task;
    const query = 'INSERT INTO TASKS(TITLE, STATUS, CREATED_AT) VALUES(?, ?, ?)'
    const [createdTask] = await conn.execute(query, [title, 'Pendente', dateUTC])
    return {insertId: createdTask.insertId};
};

const deleteTask = async (id) => {

    const query = 'DELETE FROM TASKS WHERE ID = ?'
    const deleteTaskTask = await conn.execute(query, [id]);
    return deleteTask;
};

const updateTask = async (id, task) => {
    const { title, status } = task;
    const query = 'UPDATE TASKS SET TITLE = ?, STATUS = ? WHERE ID = ?'
    const [updateTaskTask] = await conn.execute(query, [title, status, id]);
    return updateTask;
};


module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask
};