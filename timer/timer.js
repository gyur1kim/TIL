let start = Date.now();
let end;
let timeout = setTimeout(() => {
  end = Date.now();

  console.log("start", start);
  console.log("end", end);
  let gap = end - start;
  console.log("gap", gap);
}, 1000);
