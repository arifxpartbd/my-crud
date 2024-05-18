import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    private users = [
        {
            "id": 1,
            "name": "Arif",
            "email": "arif@gmail.com",
            "role": "INTERN"
        },
        {
            "id": 2,
            "name": "Sarah",
            "email": "sarah@example.com",
            "role": "ENGINEER"
        },
        {
            "id": 3,
            "name": "John",
            "email": "john@example.com",
            "role": "ENGINEER"
        },
        {
            "id": 4,
            "name": "Lisa",
            "email": "lisa@gmail.com",
            "role": "ADMIN"
        },
        {
            "id": 5,
            "name": "David",
            "email": "david@example.com",
            "role": "ENGINEER"
        },
        {
            "id": 6,
            "name": "Emily",
            "email": "emily@gmail.com",
            "role": "ADMIN"
        },
        {
            "id": 7,
            "name": "Michael",
            "email": "michael@example.com",
            "role": "ADMIN"
        },
        {
            "id": 8,
            "name": "Sophia",
            "email": "sophia@example.com",
            "role": "ADMIN"
        },
        {
            "id": 9,
            "name": "Alex",
            "email": "alex@gmail.com",
            "role": "INTERN"
        },
        {
            "id": 10,
            "name": "Emma",
            "email": "emma@example.com",
            "role": "INTERN"
        },
        {
            "id": 11,
            "name": "Chris",
            "email": "chris@gmail.com",
            "role": "INTERN"
        },
        {
            "id": 12,
            "name": "Olivia",
            "email": "olivia@example.com",
            "role": "INTERN"
        },
        {
            "id": 13,
            "name": "Ryan",
            "email": "ryan@example.com",
            "role": "INTERN"
        },
        {
            "id": 14,
            "name": "Ava",
            "email": "ava@gmail.com",
            "role": "INTERN"
        },
        {
            "id": 15,
            "name": "Daniel",
            "email": "daniel@example.com",
            "role": "INTERN"
        }
    ]

    findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN'){
        if(role){
            return this.users.find(user => user.role === role)
        }
        return this.users
    }

    findOne(id: number){
        const oneUser = this.users.find(user => user.id === id)
        return oneUser
    }

    createUser(user: {name: string, email: string, role: 'INTERN' | 'ENGINEER' | 'ADMIN'}){
        const userByHeightId = [...this.users].sort((a,b) => b.id = a.id)
        const newUser ={
            id: userByHeightId[0].id + 1,
            ...user
        }
        this.users.push(newUser)

        return newUser
    }

    updateUser(id: number, updateUser: {name: string, email: string, role?: 'INTERN' | 'ENGINEER' | 'ADMIN'}){
        this.users = this.users.map(user => {
            if(user.id === id){
                return {...user, ...updateUser}
            }
            return user
        })

        return this.findOne(id)
    }

    deleteUser(id:  number){
        const removeUser = this.findOne(id)

        this.users = this.users.filter(user => user.id !== id)
        return removeUser
    }

}
