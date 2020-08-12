function Zigzag(s) {
  if ((s + 1) % 4 != 0 || s < 0)  // cek kondisi s = positif && S = 4n - 1 (n adalah positif integer)
    return 'Error: S harus bilangan positif dan S harus dapat dinyatakan dalam 4n - 1'
  
  let maze = '' // membuat container
  for (let i = 0; i < s; i++) {
    maze += '@' // bangun tembok paling kiri
    for (let j = 0; j < s - 1; j++) {
      if (i % 2 == 0) {
        if ((i % 4 == 0 && j == 0) || (i % 4 != 0 && j == s - 2)) maze += ' ' // menentukan pintu untuk ke jalur berikutnya di kanan atau kiri
        else maze += '@' // membangun tembok pembatas
      }
      else maze += ' ' // membuat jalan
    }
    maze += '@' // bangun tembok paling kanan
    maze += '\n' // agar pindah ke jalur selanjutnya
  }
  return maze
}

console.log(Zigzag(15));
