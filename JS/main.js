// my account information

const myAccount = {
  name: "Sooyeon Choi",
  expenses: 0,
  income: 0
};

// function 1) Add the expenses
const addExpense = function(account, amount) {
  account.expenses = account.expenses + amount;
};

// function 2) Add my income
const addIncome = function(account, income) {
  account.income = account.income + income;
};

// function 3) Reset my account
const resetAccount = function(account) {
  account.expenses = 0;
  account.income = 0;
};

// function 4) To get my account summary
const getAccountSummary = function(account) {
  let balance = acount.income - account.expenses;
  return `Account for ${account.name} has $${balance}. $${
    account.income
  } in income`;
};
