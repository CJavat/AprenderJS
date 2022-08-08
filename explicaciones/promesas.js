/* const requestHandler = (req,res) => {
    user.findById(req.userID, (error, user) => {
        if(error) {
            res.send(error);
        } else {
            tasks.findByIb(user.taskId, (error,tasks) => {
                if(error) {
                    return res.send(error);
                } else {
                    tasks.completed = true;
                    tasks.save((error) => {
                        if(error) {
                            return res.send(error);
                        } else {
                            res.send('task completed');
                        }
                    });
                }
            });
        }
    });
} */

const requestHandler = (req, res) => {
    user.findById(req.userID)
        .then((user) => {
            return task.findById(user.tasksid);
        })
        .then((task) => {
            task.completed = true;
            return task.save();
        })
        .then(() => {
            res.send('task completed');
        })
        .catch((e) => {
            res.send(e);
        })
}