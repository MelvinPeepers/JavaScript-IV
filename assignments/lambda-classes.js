// CODE here for your Lambda Classes
// base-class
class Person {
   constructor(props) {
    this.name = props.name;
    this.age = props.age;
    this.location = props.location;
   }
   
   speak() {
       console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
   }
}

// 2 - 3 objects for each class and test them according to their unique Attributes

const dumbledore = new Person({
    name: 'Albus Dumbledore',
    location: 'Hogwarts',
    age: 110,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Full-Stack',
    catchPhrase: 'It does not do to dwell on dreams and forget to live.'
  });

  const moody = new Person({
    name: 'Alastor Mad-Eye Moody',
    location: 'Hogwarts',
    age: 63,
    gender: 'male',
    favLanguage: 'Go',
    specialty: 'Back-End',
    catchPhrase: "I don't know so much about 'Professor'. Never got round to much teaching, did I?"
  });

  const mcGonagall = new Person({
    name: 'Minerva McGonagall',
    location: 'Hogwarts',
    age: "A woman doesn't tell her age.",
    gender: 'female',
    favLanguage: 'Java',
    specialty: 'Backend',
    catchPhrase: 'They’re supposed to be, you blithering idiot.'
  });

  dumbledore.speak();
  moody.speak();
  console.log(`My name is ${dumbledore.name}.`);
  console.log(`My name is ${moody.name} and I am ${moody.age} years old.`);
  mcGonagall.speak();


// student class
class Students extends Person {
    constructor(studProps) {
        super(studProps);
        this.previousBackground = studProps.previousBackground;
        this.className = studProps.className;
        this.favSubjects = studProps.favSubjects;
    }

    listsSubjects() {
        console.log(`${this.favSubjects}`);
    }

    PRAssignment(subject) {
        console.log(`${student.name} has submitted a PR for ${subject}.`);
    }

    sprintChallenge(subject) {
        console.log(`${student.name} has begun sprint challenge on ${subject}.`);
    }
}

// student objects

const potter = new Students({
    name: 'Harry Potter',
    location: 'Hogwarts',
    age: 11,
    gender: 'male',
    favSubjects: ['Python', 'JavaScript', 'C++'],
    specialty: 'Frontend',
    catchPhrase: 'I solemnly swear that I am up to no good.'
  });

  const granger = new Students({
    name: 'Hermione Granger',
    location: 'Hogwarts',
    age: 11,
    gender: 'female',
    favSubjects: ['Java', 'Swift', 'C++'],
    specialty: 'Fullstack of course',
    catchPhrase: 'Books! And cleverness! There are more important things — friendship and bravery and — oh Harry — be careful!'
  });


  const weasley = new Students({
    name: 'Ronald Weasley',
    location: 'Hogwarts',
    age: 11,
    gender: 'male',
    favSubjects: ['Go', 'SQL', 'Ruby'],
    specialty: 'Frontend',
    catchPhrase: 'From now on, I don’t care if my tea leaves spell, ‘Die, Ron, die,’ I’m chucking them in the bin where they belong.'
  });

console.log(potter.favSubjects);
console.log(granger.favSubjects);
console.log(weasley.favSubjects);


// instructor class
class Instructor extends Person {
    constructor(instrProps) {
        super(instrProps);
        this.specialty = instrProps.specialty;
        this.favLanguage = instrProps.favLanguage;
        this.catchPhrase = instrProps.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`)
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

// instructor objects

const lupin = new Instructor({
    name: 'Remus Lupin',
    location: 'Hogwarts',
    age: 40,
    gender: 'male',
    favLanguage: 'TypeScript',
    specialty: 'Full-Stack',
    catchPhrase: 'It is the quality of ones convictions that determines success, not the number of followers.'
  });

  const snape = new Instructor({
    name: 'Severus Snape',
    location: 'Hogwarts',
    age: 53,
    gender: 'male',
    favLanguage: 'Python',
    specialty: 'Back-End',
    catchPhrase: "Ah, yes. Harry Potter. Our new — celebrity."
  });

  const lockhart = new Instructor({
    name: 'Gilderoy Lockhart',
    location: 'Hogwarts',
    age: "43",
    gender: 'male',
    favLanguage: 'Swift',
    specialty: 'Backend',
    catchPhrase: 'Whoops - My wand is a little over excited!'
  });

  console.log(lockhart.demo('Swift'));
  console.log(snape.grade(potter, 'potions'));


// project manager class

class ProjectManager extends Instructor {
    constructor(pmProps) {
        super(pmProps);
        this.gradClassName = pmProps.gradClassName;
        this.favInstructor = pmProps.favInstructor;
    }

    standUp(channel) {
        console.log(`${this.name} annouces to ${channel}, @channel standy times!`);
    }

    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`);
    }
}

// project manager objects

const percy = new ProjectManager({
    name: 'Percy Weasley',
    location: 'Hogwarts',
    age: 20,
    gender: 'male',
    favLanguage: 'TypeScript',
    specialty: 'Full-Stack',
    catchPhrase: 'I was a fool!'
  });

  console.log(percy.standUp('webpt6'));
  console.log(percy.debugsCode(weasley, 'JavaScript'));