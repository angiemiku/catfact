const btn = document.querySelector("button");
const facts = document.querySelector("p");

const getData = async () => {
  const res = await axios.get('https://catfact.ninja/fact');
  console.log(res.data.fact);
  return res.data.fact;
};

btn.addEventListener("click", async () => {
  try {
    facts.innerText = await getData();
  } catch (e) {
    console.log('Error:', e);
    facts.innerText = "Something went wrong, pls try again later :(";
  }
});
