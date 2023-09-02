import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { IStudent, Student } from "@/domain/forum/enterprise/entities/student";
import { faker } from "@faker-js/faker";

export function makeStudent(
  override: Partial<IStudent> = {},
  id?: UniqueEntityID
) {
  const student = Student.create(
    {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      ...override,
    },
    id
  );

  return student;
}
