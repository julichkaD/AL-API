function showResult(response) {
  alert(response.data.answer);
}

let apiKey = "b58a2f047af526to478d86be21c3e75d";
let prompt = "When was the firts AI created?";
let context = "Please, be polite and provide a very short answer";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

axios.get(apiUrl).then(showResult);
