// Asal Sayi Bulma !
console.log("Asal Sayi Bulma !");
let counter = 0;
function findPrime(...numbers) {
  for (let i = 2; i < numbers.length; i++) {
    for (let j = 2; j < numbers[i]; j++) {
      if (numbers[i] % j == 0) {
        counter++;
      }
    }
    if (counter != 0) {
      console.log(numbers[i] + " sayısı asal değildir");
    } else {
      console.log(numbers[i] + " sayısı asaldır");
    }
    counter = 0;
  }
}
findPrime(21, 50, 8, 21, 1);

console.log("arkadaş sayılar");
/////////////////////////
//arkadaş sayılar

function arkadasSayi(s1, s2) {
  let bolenToplami1 = 0;
  for (let i = 1; i < s1; i++) {
    let kalan = s1 % i;
    if (kalan == 0) {
      bolenToplami1 += i;
    }
  }
  let bolenToplami2 = 0;
  for (let i = 1; i < s2; i++) {
    let kalan = s2 % i;

    if (kalan == 0) {
      bolenToplami2 += i;
    }
  }

  if (bolenToplami1 == s2 && bolenToplami2 == s1) {
    console.log(s1 + " ve " + s2 + " arkadaş sayılardır.");
  } else {
    console.log(s1 + " ve " + s2 + " arkadaş sayı değildir.");
  }
}

arkadasSayi(440, 568);
arkadasSayi(1184, 1210);

console.log("mükemmel sayılar");
/////////////////////////
//mükemmel sayılar

function ms() {
  for (let i = 1; i <= 1000; i++) {
    let bolenToplami = 0;
    for (let j = 1; j <= i; j++) {
      let kalan = i % j;
      if (kalan == 0) {
        bolenToplami += j;
      }
    }
    if (bolenToplami == i * 2) {
      console.log(i);
    }
  }
}

ms();

console.log("1000'e kadarki tüm asal sayılar")
/////////////////////////
//1000'e kadarki tüm asal sayılar

function tumAsal() {
  for (let i = 1; i <= 1000; i++) {
    let counter = 0;
    for (let j = 1; j <= i; j++) {
      let remaning = i % j;

      if (remaning == 0) {
        counter++;
      }
    }
    if (counter == 2) {
      console.log(i);
    }
  }
}

tumAsal()