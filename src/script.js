const Num = (val) => {
    document.getElementById('result').value += val;
}

const equal = () => {
    let input = document.getElementById('result').value;
    let Output = eval(input);
    document.getElementById('result').value = Output;
}

const clr = () => {
    document.getElementById('result').value = '';
}