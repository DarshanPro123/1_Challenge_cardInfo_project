import "./App.css";

function App() {
  return (
    <>
      <h1>My app</h1>
      <div className="card">
        <div className="img-card">
          <Profile />
        </div>
        <div className="data">
          <div className="maininfo">
            <InfoData />
          </div>

          <div className="skills">
            {" "}
            <MySkills />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

export const Profile = () => {
  return (
    <>
      <img
        src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFufGVufDB8fDB8fHww"
        alt="MyProfile"
      />
    </>
  );
};

export const InfoData = () => {
  return (
    <>
      <h1>Jonas Machols</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
        facere. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Pariatur deleniti distinctio quo dolor totam?
      </p>
    </>
  );
};

export const MySkills = () => {
  return (
    <>
      <h4>my skilss</h4>
      <Skill skill="HTML" bg="red" emj="🤟" />
      <Skill skill="CSS" bg="blue" emj="😍" />
      <Skill skill="JS" bg="green" emj="🫠" />
    </>
  );
};

// eslint-disable-next-line react/prop-types
export const Skill = ({ bg, skill, emj }) => {
  return (
    <>
      {" "}
      <span style={{ backgroundColor: bg }}>
        {skill}
        {emj}
      </span>
    </>
  );
};
