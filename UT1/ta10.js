function getSum(nums){
     // .reduce() recibe una función con dos parámetros: (acumulador, elemento_actual)
    // El '0' al final es el valor inicial de tu acumulador (coso = 0)
    const sumaTotal = nums.reduce((coso, num) => coso + num, 0);
    
    console.log(sumaTotal); // Imprime el resultado [1]
    return sumaTotal;
}