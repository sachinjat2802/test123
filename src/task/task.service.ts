import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TaskService  {
  constructor(
     @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}
  create(createTaskDto: CreateTaskDto) {
    return this.taskRepository.save(createTaskDto);
  }

  findAll() {
    return this.taskRepository.find();
  }

  findOne(id:number) {
    return this.taskRepository.findOne({where:{id:id}});
  }

  update(id:number, updateTaskDto: UpdateTaskDto) {
    return this.taskRepository.update(id, updateTaskDto) ;
  }

  remove(id: number) {
    return this.taskRepository.delete(id);
  }
}
