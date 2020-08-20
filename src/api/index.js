import faker from 'faker/locale/ru'

export default function api() {
  return new Promise(resolve => setTimeout(
    () => resolve({
      data: Array.from(new Array(faker.random.number({ min: 30, max: 50 })), () => {
        const gender = faker.random.number(1)

        return {
          id: faker.random.uuid(),
          firstName: faker.name.firstName(gender),
          lastName: faker.name.lastName(gender),
          age: faker.random.number({ min: 18, max: 65 }),
        }
      }),
    }),
    700,
  ))
}
