import { Entity } from "@/core/entities/entity";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";

export interface IStudent {
  name: string;
  email: string;
  password: string;
}

export class Student extends Entity<IStudent> {
  get name() {
    return this.props.name;
  }

  get email() {
    return this.props.email;
  }

  get password() {
    return this.props.password;
  }

  static create(props: IStudent, id?: UniqueEntityID) {
    const student = new Student(props, id);

    return student;
  }
}
