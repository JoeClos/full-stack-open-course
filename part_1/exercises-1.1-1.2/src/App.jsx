const Header = (course) => {
  return (
    <>
      <h1>{course.courseName}</h1>
    </>
  );
};

const Part = (part) => {
  return (
    <>
      <p>
        {part.name}: {part.exercises}
      </p>
    </>
  );
};

const Content = (content) => {
  return (
    <>
      <Part name={content.parts[0].name} exercises={content.parts[0].exercises} />
      <Part name={content.parts[1].name} exercises={content.parts[1].exercises} />
      <Part name={content.parts[2].name} exercises={content.parts[2].exercises} />
    </>
  );
};

const Total = (sum) => {
  return (
    <>
      <p>Number of exercises: {sum.sum}</p>
    </>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header courseName={course} />
      <Content parts={parts} />
      <Total sum={parts[0].exercises + parts[1].exercises + parts[2].exercises} />
    </div>
  );
};

export default App;
