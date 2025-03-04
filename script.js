        document.getElementById('check-btn').addEventListener('click', function() {
            const input = document.getElementById('text-input').value.trim();
            const resultDiv = document.getElementById('result');

            if (!input) {
                alert("Please input a value");
                return;
            }

            
            const cleanedInput = input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
            const isPalindrome = cleanedInput === cleanedInput.split('').reverse().join('');

            if (isPalindrome) {
                resultDiv.textContent = `${input} is a palindrome`;
            } else {
                resultDiv.textContent = `${input} is not a palindrome`;
            }
        });