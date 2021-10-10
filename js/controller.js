const data = async () => {
  const res = await fetch(
    `https://cors-anywhere.herokuapp.com/https://api-mobilespecs.azharimm.site/v2/latest`
  );
  const data = await res.json();
  console.log(data);
};

data();
