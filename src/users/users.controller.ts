import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {

    @Get()
    findAll(){
        return []
    }
    @Get(':id')
    findOne(@Param('id') id: string){
        return {id}
    }

    @Post()
    createUser(@Body() user: {}){
        return user
    }

    @Patch()
    updateUser(@Param('id') id:string, @Body() updateUser: {}){
        return { id, ...updateUser}
    }

    @Delete(':id')
    deleteUser(@Param('id') id: string){
        return {id}
    }


}
