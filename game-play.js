let randomQuestionIndex = [] //URUTAN INDEX "questionDB" YANG SUDAH DIRANDOM
let counter = 0 // [i] UNTUK "randomQuestionIndex"
let flag = false // FLAG UNTUK TAU WEBSITE PAS PERTAMA KALI DIBUKA (IF: TRUE = WEBSITE SUDAH NGE-LOOP PERTAMA KALI)
let poin = 0 //POIN PER JAWABAN
let totalPoin = 0; //TOTAL AKUMULASI
let questionsDB = [{
    QstID: 0,
    pertanyaan: 'Apa yang dilakukan jika kebelet pipis saat berenang?',
    jawaban: [
      ['PIPIS', 32],
      ['KE TOILET', 24],
      ['TAHAN', 22],
      ['KE PINGGIR KOLAM', 18]
    ]
  },
  {
    QstID: 1,
    pertanyaan: 'Bagaimana cara agar tidak masuk angin?',
    jawaban: [
      ['PAKAI JAKET', 37],
      ['MAKAN', 23],
      ['MINUM OBAT', 15],
      ['TIDAK BERGADANG', 9],
      ['MINUM', 4]
    ]
  },
  {
    QstID: 2,
    pertanyaan: 'Sebutkan bagian tubuh yang bergerak saat tertawa?',
    jawaban: [
      ['MULUT', 43],
      ['PIPI', 18],
      ['PERUT', 13],
      ['BAHU', 9],
      ['DADA', 4],
      ['DAGU', 3]
    ]
  },
  {
    QstID: 3,
    pertanyaan: 'Kegiatan apa yang dilakukan saat cuaca dingin?',
    jawaban: [
      ['TIDUR', 39],
      ['MINUM KOPI', 28],
      ['MAKAN', 13],
      ['MINUM TEH', 8],
      ['PELUKAN', 5]
    ]
  },
  {
    QstID: 4,
    pertanyaan: 'Sebutkan nama danau?',
    jawaban: [
      ['TOBA', 47],
      ['GAJAH MUNGKUR', 46],
      ['JATI LUHUR', 5],
      ['TOWUTI', 2]
    ]
  },
  {
    QstID: 5,
    pertanyaan: 'Apa yang pria lakukan saat menemani kekasihnya di salon?',
    jawaban: [
      ['MAIN HP', 43],
      ['MEMBACA', 34],
      ['MEROKOK', 11],
      ['MENDENGARKAN MUSIK', 7]
    ]
  },
  {
    QstID: 6,
    pertanyaan: 'Sebutkan sesuatu yang berhubungan dengan printer?',
    jawaban: [
      ['KERTAS', 37],
      ['TINTA', 34],
      ['PRINTER', 16],
      ['CATRIDGE', 15]
    ]
  },
  {
    QstID: 7,
    pertanyaan: 'Minuman apa yang membutuhkan air panas?',
    jawaban: [
      ['KOPI', 52],
      ['SUSU', 24],
      ['TEH', 12],
      ['BANDREK', 6]
    ]
  },
  {
    QstID: 8,
    pertanyaan: 'Macam-macam permainan kartu?',
    jawaban: [
      ['SOLITER', 26],
      ['POKER', 21],
      ['41', 16],
      ['HEART', 12],
      ['REMI', 11],
      ['BLACKJACK', 5],
      ['UNO', 3],
      ['GAPLEH', 6]
    ]
  },
  {
    QstID: 9,
    pertanyaan: 'Gejala yang ditimbulkan demam berdarah?',
    jawaban: [
      ['DEMAM', 39],
      ['PUSING', 28],
      ['BINTIK MERAH', 21],
      ['BADAN LEMAS', 8],
      ['PANAS TINGGI', 4]
    ]
  },
  {
    QstID: 10,
    pertanyaan: 'Hewan langka di indonesia?',
    jawaban: [
      ['BADAK BERCULA SATU', 38],
      ['CENDRAWASIH', 27],
      ['KOMODO', 19],
      ['BURUNG KASUARI', 16]
    ]
  },
  {
    QstID: 11,
    pertanyaan: 'Pelawak terkenal?',
    jawaban: [
      ['MALIH', 33],
      ['PARTO', 23],
      ['JOJON', 18],
      ['NARJI', 10],
      ['SULE', 7],
      ['TUKUL', 6],
      ['BOLOT', 3]
    ]
  },
  {
    QstID: 12,
    pertanyaan: 'Sebutkan cara untuk mendapatkan barang impian?',
    jawaban: [
      ['MENABUNG', 41],
      ['BEKERJA', 26],
      ['HUTANG', 14],
      ['MENJUAL BARANG', 5]
    ]
  },
  {
    QstID: 13,
    pertanyaan: 'Film mengenai ikan hiu?',
    jawaban: [
      ['JAWS', 42],
      ['SHARKS', 27],
      ['DEEP BLUE SEA', 12],
      ['FREE WHEELY', 8],
      ['OPEN WATER', 9],
      ['SHARK TALE', 2]
    ]
  },
  {
    QstID: 14,
    pertanyaan: 'Dimana biasanya disebut tempat mistik?',
    jawaban: [
      ['KUBURAN', 34],
      ['GOA', 20],
      ['GUNUNG', 19],
      ['HUTAN', 13],
      ['RUMAH TUA', 10],
      ['LAUT', 4]
    ]
  },
  {
    QstID: 15,
    pertanyaan: 'Jenis binatang berbisa?',
    jawaban: [
      ['ULAR', 36],
      ['KELABANG', 21],
      ['LABA-LABA', 17],
      ['TAWON', 14],
      ['LEBAH', 8],
      ['KALAJENGKING', 4]
    ]
  },
  {
    QstID: 16,
    pertanyaan: 'Dimana orang biasa bersandar?',
    jawaban: [
      ['TIANG LISTRIK', 34],
      ['MOBIL', 21],
      ['KURSI', 16],
      ['PINTU', 14],
      ['TEMBOK', 9],
      ['PUNGUNG ORANG', 6]
    ]
  },
  {
    QstID: 17,
    pertanyaan: 'Sebutkan nama petenis terkenal dunia?',
    jawaban: [
      ['IVAN LENDLE', 33],
      ['ROGER FEDERER', 23],
      ['PETE SAMPRAS', 18],
      ['BORIS BECKER', 10],
      ['JHON MC ENROE', 7],
      ['ANDRE AGASSI', 6],
      ['DJOKOVIC', 3]
    ]
  },
  {
    QstID: 18,
    pertanyaan: 'Sebutkan bentuk-bentuk jimat?',
    jawaban: [
      ['KALUNG', 34],
      ['CINCIN', 22],
      ['GELANG', 14],
      ['BATU', 13],
      ['TINDIK', 10],
      ['TASBIH', 5],
      ['SABUK', 2]
    ]
  },
  {
    QstID: 19,
    pertanyaan: 'Pemain ovj di trans 7?',
    jawaban: [
      ['SULE', 32],
      ['ANDRE', 28],
      ['PARTO', 17],
      ['NUNUNG', 13],
      ['AZIS', 10]
    ]
  },
  {
    QstID: 20,
    pertanyaan: 'Yang di jual di lampu merah oleh pedagang?',
    jawaban: [
      ['KORAN', 32],
      ['KACANG', 27],
      ['TISUE', 16],
      ['ROKOK', 13],
      ['MINUMAN DINGIN', 12]
    ]
  },
  {
    QstID: 21,
    pertanyaan: 'Kegiatan ekstra kurikuler di sekolah?',
    jawaban: [
      ['PRAMUKA', 30],
      ['BASKET', 16],
      ['BELADIRI', 15],
      ['RENANG', 14],
      ['PMR', 11],
      ['PENCAK SILAT', 7],
      ['TAEKWONDO', 4],
      ['VOLI', 3],
    ]
  },
  {
    QstID: 22,
    pertanyaan: 'Rasa teh yang ada pada zaman sekarang?',
    jawaban: [
      ['STRAWBERRY', 30],
      ['JERUK', 24],
      ['MELON', 16],
      ['MANGGA', 11],
      ['LEMON', 10],
      ['LECI', 9]
    ]
  },
  {
    QstID: 23,
    pertanyaan: 'Apa yang ditulis ditangan?',
    jawaban: [
      ['NOMOR TELEPON', 45],
      ['ALAMAT', 21],
      ['CONTEKAN', 19],
      ['NAMA', 15]
    ]
  },
  {
    QstID: 24,
    pertanyaan: 'Perasaan apa yang ada bila mau kencan pertama?',
    jawaban: [
      ['SENANG', 51],
      ['GROGI', 24],
      ['GEMBIRA', 14],
      ['DAG DIG DUG', 11]
    ]
  },
]

function generateQuestion() { //CHOOSE WHICH QUESTION TO DISPLAY
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~GENERATE URUTAN QUESTION SECARA RANDOM~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  if (!flag) {
    var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
      ranNums = [],
      i = nums.length,
      j = 0;

    while (i--) {
      j = Math.floor(Math.random() * (i + 1));
      ranNums.push(nums[j]);
      nums.splice(j, 1);
    }
    // console.log(ranNums);

    flag = true
    randomQuestionIndex = ranNums
    let question = document.getElementById('question')
    let randomQuestion = questionsDB[randomQuestionIndex[counter]] //DB
    question.innerHTML = randomQuestion.pertanyaan // KEY
    counter++
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~GENERATE URUTAN QUESTION SECARA RANDOM~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  } else { // KALAU FLAG = TRUE QUESTION TIDAK DIACAK LAGI
    let question = document.getElementById('question')
    let randomQuestion = questionsDB[randomQuestionIndex[counter]] //DB
    if (counter < questionsDB.length) { //DB
      question.innerHTML = randomQuestion.pertanyaan //KEY
    }
    counter++
  }
  // console.log(counter);
}

generateQuestion() // UNTUK INVOKE "randomQuestionIndex" PERTAMA KALI


/* teruh di HTML
<progress value="0" max="30" id="progressBar"></progress>
*/

let answer = [] // HISTORY JAWABAN USER (PUSH'D FROM "valueJawabanID")
let historyPoinUser = [] //NILAI DARI TIAP JAWABAN USER (PUSH'D FROM =[LOOPING CEK JAWABAN BENAR/SALAH]=)
let countTimer = 0; //FUNGSI AGAR TIMER TIDAK JALAN 2 KALI
let timesUp = false;

function onClickAnswer(event) { //WHEN "SUBMIT" BUTTON IS CLICKED
  event.preventDefault()

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~START OF TIMER~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  if (countTimer === 0) { // KONDISI UNTUK TIMER (HATI2 NGUBAHNYA!!! KITA CUMA COPY DARI STACKOVERFLOW)
    var timeleft = 30; // UNTUK NENTUKAN BERAPA [DETIK] TIMER GAME (INGAT UBAH JUGA LINE 322 DAN HTML ID: "progressBar")
    var downloadTimer = setInterval(function () {
      if (timeleft <= 0) {
        clearInterval(downloadTimer);
        alert(`TIMES UP!`) 

        localStorage.setItem(`totalPoin`, totalPoin)

        window.location.href = 'prizePage.html'

      }
      document.getElementById("progressBar").value = 30 - timeleft; // KALAU UBAH TIMELEFT, UBAH JUGA ANGKA YANG DIKURANGI TIMELEFT
      timeleft -= 1;
    }, 1000);
    countTimer++
  } //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~END OF TIMER~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~FORM HTML JAWABAN USER~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  let userJawabanID = document.getElementById('answerBar')
  let valueJawabanID = userJawabanID.value.toUpperCase()
  answer.push(valueJawabanID)
  userJawabanID.value = '' // RESET FORM JAWABAN USER
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~FORM HTML JAWABAN USER~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


  let listJawaban = questionsDB[randomQuestionIndex[counter - 1]].jawaban // DB
  // console.log(answer[counter - 1], `answer[counter]`);
  let questionCheckerFlag = false
  for (let i = 0; i < listJawaban.length; i++) { //LOOP UNTUK COMPARE JAWABAN BENAR ATAU SALAH
    // poin = 0;
    // console.log(answer[counter - 1], listJawaban[i][0], 'INI TEST');
    if (answer[counter - 1] === listJawaban[i][0]) { // KONDISI APABILA JAWABAN KETEMU. POIN DAN TOTALPOIN DITAMBAH
      poin = listJawaban[i][1]
      historyPoinUser.push(poin)
      totalPoin += poin
      questionCheckerFlag = true
    }

    if (i === listJawaban.length - 1 && !questionCheckerFlag) { // KONDISI APABILA JAWABAN SALAH. POIN = 0
      poin = 0
      historyPoinUser.push(poin)
      totalPoin += poin
    }
    // Check until this point.
    // console.log(answer, historyPoinUser, 'TOLONG DI CEK');
  }

  let printUserAnswer = document.getElementById("userAnswer") // <====== WHERE WE WANT TO PUT THE TABLE
  let str = ""

  for (let i = 0; i < answer.length; i++) { // LOOP UNTUK TABEL PERTANYAAN, JAWABAN, DAN POIN, YANG DIDAPAT ()
    str += `
    <tr>
    <td>${questionsDB[randomQuestionIndex[i]].pertanyaan}</td>
    <td>${answer[i]}</td>
    <td>${historyPoinUser[i]}</td>
    </tr>
    `
    // console.log(questionsDB[randomQuestionIndex[i]]);//DB
  }
  printUserAnswer.innerHTML = str; // <=== DISINI PERINTAH UNTUK MASUKKAN TABEL KE ID: "printUserAnswer"
  // console.log(totalPoin, 'THIS IS TOTAL POINT');
  // console.log(answer, randomQuestionIndex[counter]);
  generateQuestion()
}



// let displayGuestName = ''

function login(e) {
  e.preventDefault()
  let userDB = [{}] // LIST EMAIL DAN PASSWORD YANG VALID
  let email = document.getElementById("exampleInputEmail1").value
  let password = document.getElementById("exampleInputPassword1").value
  let loginData = {
    "admin@email.com": "admin", //EXAMPLE
  }
  
  if (loginData[email] && password === loginData[email]) {
    localStorage.clear();
    localStorage.setItem("loginUser", email)
    window.location.href = 'instruction.html'
    displayGuestName = localStorage.getItem('loginUser')
  } else {
    alert("EMAIL ATAU PASSWORD SALAH")
  }
  console.log(email, password);
}

function guestName() { // display name user
  displayGuestName = document.getElementById('guestName').value

  localStorage.clear();

  localStorage.setItem('guestName', displayGuestName)
}


function panggil() {

  let displayGuestName = '';

  if (localStorage.getItem('guestName')) {
  displayGuestName = localStorage.getItem('guestName')
  } else if (localStorage.getItem('loginUser')) {
  displayGuestName = localStorage.getItem('loginUser')
  }

  let namaTampil = document.getElementById('guestName')
  namaTampil.innerHTML = displayGuestName

}

// console.log(localStorage, `ini isi localStorage`);

panggil()

console.log(displayGuestName);

// TAMPILAN PRIZE PAGE //
function displayPrize() {
  
    // alert(`
    // TIMES UP!
    // SELAMAT!
    // TOTAL POINT ANDA ${totalPoin}
    // DAN BERHAK MENDAPATKAN 
    // TOTAL HADIAH ${totalPoin * 50000}`) 

    // alert(`
    // TIMES UP!
    // SELAMAT!!
    // TOTAL POINT ANDA ${totalPoin}
    // DAN BERHAK MENDAPATKAN 
    // GRAND PRIZE SEBESAR 100000000`) 

    // alert(`
    // TIMES UP!
    // SAYANG SEKALI,
    // TOTAL POINT ANDA ${totalPoin}
    // SELISIH POINT ANDA ADALAH
    // ${150 - totalPoin} UNTUK 
    // BERHAK MENDAPATKAN HADIAH`) 
    // barisPertama.innerHTML = `{}`
}







//--------------------------------------------------------------------------------------|
//============[~~~~~~~~~~~~~~~~~~~~~~~~TO DO~~~~~~~~~~~~~~~~~~~~~~~~~~~~~]==============|
//                                                                                      |
//(1) historyPoinUser menambah lebih banyak daripada jumplah pertanyaan. (DONE)         |
//(2) pertanyaan tereksekusi 2x (DONE)                                                  |
//(3) finishing page hadiah2:                                                           |
//==>(3.1) total score                                                            |
//==>(3.2) hadiah yang didapat                                                    |
//==>(3.3) pilih mau main lagi atau balik ke main menu                            |
//(4) kalau semua pertanyaan terjawab/waktu habis, langsung ke finishing page           |
//                                                                                      |
//============[~~~~~~~~~~~~~~~~~~~~~~~~TO DO~~~~~~~~~~~~~~~~~~~~~~~~~~~~~]==============|
//---------------------------------------------------------------------------------------





/**                           [CONTOH FORMAT 1 OBJECT PERTANYAAN]
 * 
 *   {
    QstID: 8,
    pertanyaan: 'Macam-macam permainan kartu?',
    jawaban: [
      ['SOLITER', 26],
      ['POKER', 21],
      ['41', 16],
      ['HEART', 12],
      ['REMI', 11],
      ['BLACKJACK', 5],
      ['UNO', 3],
      ['GAPLEH', 6]
    ]
  },
 */