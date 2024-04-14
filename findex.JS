const myInstruments = ["flute","clairnet","saxophone", "trumpet","trombone"];
myInstruments.splice(4,2);



function getFirstInstrument(instruments) { 
    return instruments[0];
}

function getLastInstrument(instruments) {
  return instruments[instruments.length - 1];
}

function getFirstAndLastInstruments(instruments) {
  const output = [];
  output.push(instruments[0]);
  output.push(instruments[instruments.length - 1]);
  return output;}

  function getFirstThreeInstruments(instruments) { 
    const output = [];
    output.push(instruments(0));
    output.push(instruments(1));
    output.push(instruments(2));

  }

  console.log(getFirstAndLastInstruments)
// flute, clarinet, saxophone, trumpet, and trombone