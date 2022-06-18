import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';


const AddTaskForm = (props) => {

    return (
      /*  <div>
            <form onSubmit={props.submit}>
                <label>
                    Task title:
                    <input type="text" name="title" onChange={(event) => props.change(event)} required />
                </label>
                <br />
                <label>
                    Due date:
                    <input type="date" name="deadline" onChange={(event) => props.change(event)} required />
                </label>
                <br />
                <label>
                    Details:
                    <input type="text" name="description" onChange={(event) => props.change(event)}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>*/

        <Box
            component="form"
            sx={{
                '& .MuiOutlinedInput-root': { m: 1, width: '30ch' },
            }}
            onSubmit={props.submit}
        >
            <div>
                <TextField
                    required
                    id="outlined-required"
                    name="title"
                    label="Task Title"
                    InputLabelProps={{ shrink: true }}
                    onChange={(event) => props.change(event)}
                />
            </div>
            <div>
                <TextField
                    required
                    name="deadline"
                    label="Deadline"
                    InputLabelProps={{ shrink: true }}
                    type="date"
                    onChange={(event) => props.change(event)}
                />
            </div>
            <div>
                <TextField
                    select
                    required
                    name="Priority level"
                    label="Priority level"
                    INputLabelProps={{ shrink: true }}
                    value={props.priority}
                    onChange={(event) => props.change(event)}                >
                    <MenuItem key="1" value="low">Low</MenuItem>
                    <MenuItem key="2" value="medium">Medium</MenuItem>
                    <MenuItem key="3" value="high">High</MenuItem>
                </TextField>
            </div>
            <div>
                <TextField
                    name="description"
                    id="outlined-multiline-static"
                    label="Task Details"
                    InputLabelProps={{ shrink: true }}
                    multiline
                    rows={4}
                    onChange={(event) => props.change(event)}
                />
            </div>
            <div>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{
                        m: 1,
                        p: 1,
                        width: '95%'
                    }}
                >
                    Add Task
                </Button>
            </div>
        </Box>
    )
};

export default AddTaskForm;