// BEGIN
export default function Money(value, currency = 'usd') {
    this.value = value;
    this.currency = currency;
  
    this.getValue = function() {
      return this.value;
    };
  
    this.getCurrency = function() {
      return this.currency;
    };
  
    this.exchangeTo = function(targetCurrency) {
      let newValue;
      if (this.currency === 'usd' && targetCurrency === 'eur') {
        newValue = this.value * 0.7;
      } else if (this.currency === 'eur' && targetCurrency === 'usd') {
        newValue = this.value * 1.2;
      } else {
        newValue = this.value;
      }
      return new Money(newValue, targetCurrency);
    };
  
    this.add = function(money) {
      let newValue;
      if (this.currency !== money.getCurrency()) {
        const convertedMoney = money.exchangeTo(this.currency);
        newValue = this.value + convertedMoney.getValue();
      } else {
        newValue = this.value + money.getValue();
      }
      return new Money(newValue, this.currency);
    };
  
    this.format = function() {
      return new Intl.NumberFormat('en-US', { style: 'currency', currency: this.currency }).format(this.value);
    };
  }
// END
