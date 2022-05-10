const moneyBox = () => {
  var saveCoins = 0;
  const countCoins = (coins) => {
    saveCoins += saveCoins;
    console.log(saveCoins);
  };
  return countCoins;
};

let myMoneyBox1 = moneyBox();
let myMoneyBox2 = moneyBox();
myMoneyBox1(4);
myMoneyBox1(10);
myMoneyBox1(6);
