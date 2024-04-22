import {GoogleGenerativeAI} from "@google/generative-ai";

// Access your API key (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI("AIzaSyAIVPmLP1mbTBV1QovQN6gRizYQy_orDUI");

async function run() {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({model: "gemini-pro"});
    var wordInput = document.getElementById("englishWordInput");
    var word = wordInput.value.trim();
    if (!word) {
      alert("Please enter the word");
    }else {
        const
            prompt = "your task is give the meaning of that given word, create descripion about the word and you should give what kind of word is that.also create five meaningful sentences using that word. the word is \"" + word + "\""

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();



       //open modal2
       const  responseModal =document.getElementById("responseModal");
       const responseArea =document.getElementById("responseTextArea");
       const wordLabel =document.getElementById("wordLabel");
       const modal2 =new bootstrap.Modal(responseModal);
       modal2.show();
       wordLabel.value =word;
       responseArea.value =text;
          console.log(text);

    }


}

const generateButton = document.getElementById("generate_button");
generateButton.addEventListener("click", run);



