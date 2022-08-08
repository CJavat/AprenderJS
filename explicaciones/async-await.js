const requestHandler = async (req, res) => {
    try {
        const user = await user.findById(req.userID)
        const tareas = await tasks.findById(user.tasksId);
        tasks.copmleted = true;
        await tasks.save();
        res.send('task complete');
    }
    catch(e) {
        res.send(e); 
    }
}