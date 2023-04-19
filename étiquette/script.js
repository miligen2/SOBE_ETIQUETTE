const button = document.getElementById('button');
button.addEventListener('click', function() {
  const client = document.getElementById('client').value;
  const machine = document.getElementById('machine').value;
  const societe = document.getElementById('societe').value;

  const doc = new jsPDF();

  const text = `${client}\n\n${machine}\n\n${societe}`;
  doc.setFontSize(50);
  doc.text(text, 15, 15);
  doc.text(text, 15, 115);
  doc.text(text, 15, 210);

  const textmid = "_________________________________"
  doc.setFontSize(40);
  doc.text(textmid, 0, 95);
  doc.text(textmid, 0, 190);

  doc.save(`${client}-${machine}-${societe}.pdf`);
});














