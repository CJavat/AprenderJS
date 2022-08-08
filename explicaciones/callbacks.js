const requestHandler = (req,res) => {
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
}

