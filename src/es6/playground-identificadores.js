function* getId() {
    let lastId = 1;
    while (true) {
      yield lastId++;
    }
    
}

const id = getId();
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);

function* getId() {
  let Id = 1;
  for (var i=0; i>=0; i++) {
    yield Id++;
  }
}

let arr = [];
const id1 = getId();
arr = id1.next();
console.log(arr);
arr = id1.next();
console.log(arr);
arr = id1.next();
console.log(arr);

function* getId() {
  for (let id = 1; true; id++) {
    yield id;
  }
}
const id2 = getId();
console.log(id2.next().value);
console.log(id2.next().value);
console.log(id2.next().value);
console.log(id2.next().value);
console.log(id2.next().value);