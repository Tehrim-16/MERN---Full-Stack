function Render() {
  const Students = ["Sohail", "Zara", "Simran", "Sibtain", "Sohail"];
  return (
    <>
      {Students.map((name, index) => (
        <h1 key={index}>{name}</h1>
      ))}
    </>
  );
}
export default Render;
