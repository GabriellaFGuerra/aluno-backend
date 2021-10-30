import { getRepository } from "typeorm";
import { Students } from '../entity/Students';
import { Request, Response } from "express";
 
export const getStudents = async(request: Request, response: Response) => {
    const tasks = await getRepository(Students).find()
    return response.json(tasks);
};

export const saveStudent = async(request: Request, response: Response) => {
    const task = await getRepository(Students).save(request.body)
    return response.json(task);
};

export const getStudent = async (request : Request, response: Response) => {
    const {id} = request.params
    const task = await getRepository(Students).findOne(id)
    return response.json(task);
};

export const updateStudent = async(request: Request, response: Response) => {
    const {id} = request.params
    const task = await getRepository(Students).update(id, request.body)
 
    if (task.affected == 1){
        const taskUpdated = await getRepository(Students).findOne(id)
        return response.json(taskUpdated);
    }
    else{
        return response.status(404).json( {message: 'Aluno não matriculado.'} )
    }
};
 
export const deleteStudent = async(request: Request, response: Response) => {
    const {id} = request.params
    const task = await getRepository(Students).delete(id)
 
    if (task.affected == 1){
        return response.status(200).json( {message: "Aluno excluído com sucesso."} );
    }
    else{
        return response.status(404).json( {message: 'Aluno não matriculado.'} )
    }
};
 
export const finishedStudent = async(request: Request, response: Response) => {
    const {id} = request.params
    const task = await getRepository(Students).update(id, {
        enrolled: false,
    })
 
    if (task.affected == 1){
        const taskFinished = await getRepository(Students).findOne(id)
        return response.json(taskFinished);
    }
    else{
        return response.status(404).json( {message: 'Aluno não matriculado.'} )
    }
};
