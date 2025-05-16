const btn = document.querySelector("button");
const para = document.querySelector("p");

const getData = async () => {
  const res = await axios.get('https://catfact.ninja/fact');
  console.log(res.data.fact);
  return res.data.fact;
};

btn.addEventListener("click", async () => {
  try {
    para.innerText = await getData();
  } catch {
    para.innerText = "Something went wrong, pls try again later :(";
  }
});
