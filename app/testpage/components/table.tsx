"use client"
import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text,
  Badge
} from '@tremor/react';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  banned: boolean;
}

export default function UsersTable({ users }: { users: User[] }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Username</TableHeaderCell>
          <TableHeaderCell>Email</TableHeaderCell>
          <TableHeaderCell>Banned</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>
              <Text>{user.username}</Text>
            </TableCell>
            <TableCell>
              <Text>{user.email}</Text>
            </TableCell>
            <TableCell>
            {user.banned &&
              <>
                <Badge 
      color={user.banned ? 'red' : 'green'}
      variant="filled"
    >
      {user.banned ? 'Banned' : 'Active'}
    </Badge>
              </>
            }
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
