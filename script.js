document.getElementById('pastaForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const grammiPasta = parseFloat(document.getElementById('grammiPasta').value);
    const litriAcqua = (grammiPasta / 100) * 1.5; // 1.5 litri di acqua per 100g di pasta
    const grammiSale = litriAcqua * 15; // 15g di sale per litro d'acqua
    const tempoBollitura = Math.ceil(litriAcqua * 8); // 8 minuti per litro

    document.getElementById('litriAcqua').innerText = `Litri di acqua: ${litriAcqua.toFixed(2)} L`;
    document.getElementById('grammiSale').innerText = `Grammi di sale: ${grammiSale.toFixed(2)} g`;
    document.getElementById('tempoBollitura').innerText = `Tempo per bollire: ${tempoBollitura} minuti`;

    document.getElementById('risultati').classList.remove('hidden');
});
