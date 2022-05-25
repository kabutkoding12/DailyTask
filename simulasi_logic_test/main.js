function nomorSatu(num) {

    for (var i = 1; i <= num; i++) {
        if(i % 3 ==0 && i % 2 !== 0 ){
            console.log(i + '-' +'I Love Coding')
        }else if( i % 2 !== 0){
            console.log( i + '-' +'Santai')
        }else{
            console.log( i + '-' +'Berkualitas')
        }
    }
  
  }
  
  nomorSatu(20);


function nomorDua(size){
    var board = "";

    for (var y = 0; y < size; y++) {
        for (var x = 0; x < size; x++) {
            if ((x + y) % 2 == 0){
            board += " ";
            }else
            board += "#";
        }
    board += "\n";
    }

    console.log(board);
}
nomorDua(8)

let params = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1998", "Membaca"] 
    for(let i = 0; i < params.length; i++){
        if(i == 1){
            params.splice(1,1, 'Roman Alamsyah Elsharawy')

        }else if(i == 2){
            params.splice(2,1, 'Provinsi Bandar Lampung')
        }else if(i == 4){
            params.splice(3,3, '21/07/1998', 'Pria', 'SMA Internasional Metro')
        }
    }

console.log(params)
let month = params[3].split("/") 
console.log(month)

month = Number(month[1])

switch(month){
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("Februari")
        break;
    case 3:
        console.log("Maret")
        break;
    case 4:
        console.log("April")
        break;
    case 5:
        console.log("Mei")
        break;
    case 6:
        console.log("Juni")
        break;
    case 7:
        console.log("Juli")
        break;
    case 8:
        console.log("Agustus")
        break;
    case 9:
        console.log("September")
    case 10:
        console.log("Oktober")
        break
    case 11:
        console.log("November")
        break
    case 12:
        console.log("Desember")

}



const datesort = params[3].split("/").sort((a,b) =>b-a)
console.log(datesort)

const dateJoin = params[3].split("/").join("-")
console.log(dateJoin)

let name = params[1]

name = name.slice(0, 15)
console.log(name)