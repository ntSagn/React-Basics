const Game = () => {
    const randomNumber = Math.ceil(Math.random() * 10);
    let count = 0;

    const verifyNumber = (event) => {
        event.preventDefault();
        let numberInput = document.getElementById('number');
        let inputValue = numberInput.value;

        if (inputValue === randomNumber) {
            alert("You win");
        }
        if (count < 3) {
            count++;
            if (count === 3) {
                alert("You lose");
                count = 0;
            }
            else {
                alert("Try again, you have " + (3 - count) + " chances left");
                numberInput.value = "";
            }
        }



    }

    return (
        <>
            <div>
                <h1>Mini Game</h1>
                <p>Guess a number between 1 and 10</p>
                <input type="number" id="number" />
                <button onClick={verifyNumber}>Verify</button>
            </div>
        </>
    )
}

export default Game;