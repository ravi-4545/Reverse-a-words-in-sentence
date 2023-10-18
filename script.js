function reverseWordsInSentence(sentence) {
      const words = sentence.split(' ');
      
      const reversedWords = words.map(word => {
        return word.split('').reverse().join('');
      });
      
      const reversedSentence = reversedWords.join(' ');
      
      return reversedSentence;
    }

    function sortArrayDescending(arr) {
      arr.sort((a, b) => b - a);
    }

    function reverseAndSort() {
      const sentenceInput = document.getElementById('sentenceInput');
      const output1 = document.getElementById('output1');
      const output2 = document.getElementById('output2');
      const inputSentence = sentenceInput.value;

      if (inputSentence) {
        const reversedSentence = reverseWordsInSentence(inputSentence);
        output1.textContent = "Reversed sentence: " + reversedSentence;
        sentenceInput.value = ''
        const numbers = [4, 2, 8, 1, 6, 3];
        sortArrayDescending(numbers);
        output2.textContent += "\nArray sorted in descending order: " + numbers;
      } else {
        output1.textContent = "No input sentence provided.";
      }
    }