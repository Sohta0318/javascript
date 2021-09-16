(function () {
  // (4_Global Variable)
  // let grade = '';
  // 1
  const students = [
    {
      name: 'John',
      score1: 47,
      score2: 46,
    },
    {
      name: 'Bob ',
      score1: 23,
      score2: 24,
    },
    {
      name: 'Nick',
      score1: 40,
      score2: 35,
    },
    {
      name: 'Alex',
      score1: 44,
      score2: 45,
    },
  ];
  // 2
  const passingLimits = [91, 81, 71, 61, 51];
  const degree = ['A', 'B', 'C', 'D', 'E'];
  // 3
  const totalScore = students.map(student => student.score1 + student.score2);
  // 4
  const examGrade = () => {
    totalScore.forEach((score, index) => {
      let grade = '';
      passingLimits.forEach((limit, index) => {
        if (grade) return;
        if (score >= limit) grade = degree[index];
      });
      console.log(
        `${students[index].name} got ${score} points : GRADE ${grade}`
      );
    });
  };
  // 5
  examGrade();
})();
