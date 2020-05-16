import { Controller, Get, Post, Put, Delete } from '@nestjs/common';

@Controller('todos')
export class TodosController {

    @Get()
    all(): string {
        return 'All TODOs'
    }

    @Post()
    add() {
        return 'New ToDo';
    }

    @Put()
    update() {
        return 'Update Todo';
    }

    @Delete()
    delete() {
        return 'Delete ToDo';
    }

}
