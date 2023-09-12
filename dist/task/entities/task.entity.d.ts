import { BaseEntity } from "typeorm";
export declare class Task extends BaseEntity {
    id: number;
    title: string;
    description: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}
