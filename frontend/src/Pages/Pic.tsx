const Pic = () => {
  const handleChange = (e: any) => {
    console.log(e.target.name);
    console.log(e.target.files[0]);
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      //   console.log(reader.result);
    };

    reader.readAsDataURL(file);
  };
  return (
    <div>
      <input
        onChange={handleChange}
        type="file"
        accept=".jpeg, .png, .jpg"
        name="file1"
        id="file"
      />
    </div>
  );
};

export default Pic;
