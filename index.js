
const arrayM = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const arrayI = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay( arrayM, arrayI ){
  
  var eArr = [];
  
    for(let i = 0; i < arrayM.length; i++){
      eArr.push(arrayM[i] + ' ' + 'plays' + ' ' + arrayI[i]);
    }
  return eArr;
}

const arrFacts = ["He was the last Beatle to learn to drive",
                  "He was never a vegetarian",
                  "He was a choir boy and boy scout",
                  "He hated the sound of his own voice"];

function johnLennonFacts(arrFacts){
  
  var count = 0;
  
        while(count < arrFacts.length){
          
          arrFacts.push(arrFacts[count] +'!!!');
        }
  count++;
  return arrFacts;
}

