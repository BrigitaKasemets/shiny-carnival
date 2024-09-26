<!DOCTYPE html>
<html lang="et">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hotelli tubade broneerimine</title>
<style>
    body {
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
    text-align: center;
    padding: 50px;
}
    input, select {
    padding: 10px;
    margin: 10px;
    font-size: 16px;
}
    button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
}
    #broneeringuKinnitus {
    margin-top: 20px;
    color: green;
    font-weight: bold;
}
</style>
</head>
<body>

<h2>Hotelli tubade broneerimine</h2>

<!-- Toad ja kuupäeva sisestus -->
<form id="broneerimisVorm">
    <label for="toad">Vali tubade arv:</label>
    <select id="toad">
        <option value="1">1 tuba</option>
        <option value="2">2 tuba</option>
        <option value="3">3 tuba</option>
        <option value="4">4 tuba</option>
    </select>
    <br>
        <label for="kuupaev">Vali kuupäev:</label>
        <input type="date" id="kuupaev" required>
            <br>
                <button type="button" onclick="broneeri()">Broneeri</button>
</form>

<!-- Broneeringu kinnitus -->
<div id="broneeringuKinnitus"></div>

<script>
    // Broneerimise funktsioon
    function broneeri() {
    // Hankige kasutaja valikud
    const toad = document.getElementById('toad').value;
    const kuupaev = document.getElementById('kuupaev').value;

    // Kontrollige, kas kuupäev on valitud
    if (!kuupaev) {
    alert('Palun valige kuupäev!');
    return;
}

    // Kuvatakse broneeringu kinnitus
    const kinnitusTekst = 'Broneerisite ' + toad + ' toad kuupäeval ' + kuupaev + '.';
    document.getElementById('broneeringuKinnitus').innerHTML = kinnitusTekst;
}
</script>

</body>
</html>

