function* getId() {
    let lastId = 1;
    while (true) {
      yield lastId++;
    }
    
}

const id = getId();
console.log(id.next().value + ' ' + id.next().done);
console.log(id.next().value + ' ' + id.next().done);
console.log(id.next().value + ' ' + id.next().done);

function* getId() {
  let Id = 1;
  for (var i=0; i>=0; i++) {
    yield Id++;
  }
}

// const id1 = getId();
// console.log(id1.next().value + ' ' + id1.next().done);
// console.log(id1.next().value + ' ' + id1.next().done);
// console.log(id1.next().value + ' ' + id1.next().done);

function* getId() {
  for (let id = 1; true; id++) {
    yield id;
  }
}
const id1 = getId();
console.log(id1.next().value + ' ' + id1.next().done);
console.log(id1.next().value + ' ' + id1.next().done);
console.log(id1.next().value + ' ' + id1.next().done);