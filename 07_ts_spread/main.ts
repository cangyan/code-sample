const mikeProfile = {
  name: 'mike',
  age: 27,
  programmingSkills: {
    frontEnd: ['JavaScript', 'TypeScript']
  }
}

const mock = {
  ...mikeProfile
}

mikeProfile.name = 'kobe'
mikeProfile.programmingSkills.frontEnd = ['Dart']

console.log(mikeProfile)
console.log(mock);



