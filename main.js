let str = `
010-1234-5678
hyeminpak@naver.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
hyeminpark
HYE
abbcccdddd
`

console.log(str.match(/(?<=@).{1,}/g)) 
//특정 기호를 기준패턴으로 삼아서 그 뒤에 잇는 내용을 배열로 표출