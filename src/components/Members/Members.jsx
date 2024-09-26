import React, { useState } from "react";
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import './Members.css';
// import SideMenuBar from "../SideMenuBar";


const Members = () => {
    const [open, setOpen] = useState(false);
    const openData = () => {
        setOpen(true)
    }
    const closeData = () => {
        setOpen(false)
    }

    return (
        <>
            {/* <SideMenuBar></SideMenuBar> */}
            <section id="content">
                <main>
                    {/* <form open={open} onClose={closeData} >
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form> */}
                    <Dialog open={open} onClose={closeData} id="manage">
                        <DialogTitle>
                            content
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText>Are you sure..</DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button variant="contained">submit</Button>
                            <Button variant="contained">cancel</Button>
                        </DialogActions>
                    </Dialog>
                    <div className="table-data">
                        <div className="order">
                            <div className="head">
                                <h3>Members Details</h3>
                                <Button className="btn btn-primary" variant="contained" onClick={openData}>Add Member</Button>
                                <i className="bx bx-search"></i>
                                <i className="bx bx-filter"></i>
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>User</th>
                                        <th>Date Order</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <img src='img/people.png' alt="User" />
                                            <p>John Doe</p>
                                        </td>
                                        <td>01-10-2021</td>
                                        <td>
                                            <span className="status completed">Completed</span>
                                        </td>
                                        <td>
                                            <button className="btn btn-primary status" type="button">Edit</button>
                                            <button type="button" className="btn btn-danger status">Delete</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src="img/people.png" alt="User" />
                                            <p>John Doe</p>
                                        </td>
                                        <td>01-10-2021</td>
                                        <td>
                                            <span className="status pending">Pending</span>
                                        </td>
                                        <td>
                                            <button className="btn btn-primary status" type="button">Edit</button>
                                            <button type="button" className="btn btn-danger status">Delete</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src="img/people.png" alt="User" />
                                            <p>John Doe</p>
                                        </td>
                                        <td>01-10-2021</td>
                                        <td>
                                            <span className="status process">Process</span>
                                        </td>
                                        <td>
                                            <button className="btn btn-primary status" type="button">Edit</button>
                                            <button type="button" className="btn btn-danger status">Delete</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src="img/people.png" alt="User" />
                                            <p>John Doe</p>
                                        </td>
                                        <td>01-10-2021</td>
                                        <td>
                                            <span className="status pending">Pending</span>
                                        </td>
                                        <td>
                                            <button className="btn btn-primary status" type="button">Edit</button>
                                            <button type="button" className="btn btn-danger status">Delete</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src="img/people.png" alt="User" />
                                            <p>John Doe</p>
                                        </td>
                                        <td>01-10-2021</td>
                                        <td>
                                            <span className="status completed">Completed</span>
                                        </td>
                                        <td>
                                            <button className="btn btn-primary status" type="button">Edit</button>
                                            <button type="button" className="btn btn-danger status">Delete</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>
            </section>
        </>
    )
}
export default Members;