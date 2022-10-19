const calculateLoan = (principal,rate,year) => {
    let months = 12
    
    const intrstAmount =  (principal / months) * rate * (months * year)

    const payableAmt = principal + intrstAmount

    const emi = payableAmt / (months * year)
    
    return 'Payable Amount:' + payableAmt + 'Interest Amount:' + intrstAmount.toFixed(2) + 'EMI:' + emi.toFixed(2)
}
console.log(calculateLoan(20000, 0.1, 3));