function solve(arr){
    const num = Number(arr[0]);
    const initialState = arr.slice(1,num+1);
    const commands = arr.slice(num+1, arr.length);

    const assigniees = {}

    initialState.forEach(x => {
        [assignee, taskId, title, status, estimatedPoints] = x.split(':');
        if (assigniees.hasOwnProperty(assignee)) {
            assigniees[assignee].push({taskId, title, status, estimatedPoints});
        } else {
            assigniees[assignee] = [{taskId, title, status, estimatedPoints}];
        }        
    })

    function checkIfTaskExists(assignee, task) {
        let exists = false;

        for (const x of assigniees[assignee]) {
            if (x.taskId === task) {
                return x;
            }
        }

        return exists;
    }

    function returnTask(assignee, task) {
        for (const x of assigniees[assignee]) {
            if (x.taskId === task) {
                return x;
            }
        }
    }

    for (const cmd of commands) {
        [action, ...tokens] = cmd.split(':');

        if (action === 'Add New'){
            [assignee, taskId, title, status, estimatedPoints] = tokens;
            if (!assigniees.hasOwnProperty(assignee)) {
                console.log(`Assignee ${assignee} does not exist on the board!`);
                continue;
            }
            assigniees[assignee].push({taskId, title, status, estimatedPoints});
        } else if (action === 'Change Status') {
            [assignee, taskId, status] = tokens;
            if (!assigniees.hasOwnProperty(assignee)) {
                console.log(`Assignee ${assignee} does not exist on the board!`);
                continue;
            }

            if(!checkIfTaskExists(assignee, taskId)) {
                console.log(`Task with ID ${taskId} does not exist for ${assignee}!`);
                continue;
            }

            let task = returnTask(assignee, taskId);
            task.status = status;
        }  else if (action === 'Remove Task') {
            [assignee, taskIndex] = tokens;
            if (!assigniees.hasOwnProperty(assignee)) {
                console.log(`Assignee ${assignee} does not exist on the board!`);
                continue;
            }

            if (taskIndex < 0 || taskIndex >= assigniees[assignee].length || assigniees[assignee].length === 0) {
                console.log('Index is out of range!');
                continue;
            }

            assigniees[assignee].splice(taskIndex, 1);
        }
    }

    let todo = 0;
    let inProgress = 0;
    let codeReview = 0;
    let donePoints = 0;

    for (const a in assigniees) {
        for (const t of assigniees[a]) {
            if (t.status == 'ToDo') {
                todo += Number(t.estimatedPoints);
            } else if (t.status == 'In Progress'){
                inProgress += Number(t.estimatedPoints);
            }else if (t.status == 'Code Review'){
                codeReview += Number(t.estimatedPoints);
            }else if (t.status == 'Done'){
                donePoints += Number(t.estimatedPoints);
            }
        }
    }

    console.log(`ToDo: ${todo}pts`)
    console.log(`In Progress: ${inProgress}pts`)
    console.log(`Code Review: ${codeReview}pts`)
    console.log(`Done Points: ${donePoints}pts`)

    const sumOthers = todo + inProgress + codeReview;
    if (donePoints >= sumOthers) {
        console.log('Sprint was successful!');
    } else {
        console.log('Sprint was unsuccessful...');        
    }
}

// solve([
//         '5',
//         'Kiril:BOP-1209:Fix Minor Bug:ToDo:3',
//         'Mariya:BOP-1210:Fix Major Bug:In Progress:3',
//         'Peter:BOP-1211:POC:Code Review:5',
//         'Georgi:BOP-1212:Investigation Task:Done:2',
//         'Mariya:BOP-1213:New Account Page:In Progress:13',
//         'Add New:Kiril:BOP-1217:Add Info Page:In Progress:5',
//         'Change Status:Peter:BOP-1290:ToDo',
//         'Remove Task:Mariya:1',
//         'Remove Task:Joro:1',
//     ]
// )


// solve(
//     [
//         '4',
//         'Kiril:BOP-1213:Fix Typo:Done:1',
//         'Peter:BOP-1214:New Products Page:In Progress:2',
//         'Mariya:BOP-1215:Setup Routing:ToDo:8',
//         'Georgi:BOP-1216:Add Business Card:Code Review:3',
//         'Add New:Sam:BOP-1237:Testing Home Page:Done:3',
//         'Change Status:Georgi:BOP-1216:Done',
//         'Change Status:Will:BOP-1212:In Progress',
//         'Remove Task:Georgi:3',
//         'Change Status:Mariya:BOP-1215:Done',
//     ]

// )