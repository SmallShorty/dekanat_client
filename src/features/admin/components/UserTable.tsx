import { useState } from 'react';
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Select, MenuItem
} from '@mui/material';

const mockUsers = [
    { id: 1, name: 'Alice', email: 'alice@example.com', role: 'user' },
    { id: 2, name: 'Bob', email: 'bob@example.com', role: 'admin' },
];

const UsersTable = () => {
    const [users, setUsers] = useState(mockUsers);

    const handleRoleChange = (id: number, newRole: string) => {
        const updatedUsers = users.map(user =>
            user.id === id ? { ...user, role: newRole } : user
        );
        setUsers(updatedUsers);
    };

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Role</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map(user => (
                        <TableRow key={user.id}>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>
                                <Select
                                    value={user.role}
                                    onChange={(e) => handleRoleChange(user.id, e.target.value)}
                                >
                                    <MenuItem value="user">User</MenuItem>
                                    <MenuItem value="admin">Admin</MenuItem>
                                </Select>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default UsersTable;
