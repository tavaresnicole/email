function pegaDados(){
    const copia = document.getElementById('copia').value;
    const destinatario = document.getElementById('destinatario').value;
    const assunto = document.getElementById('assunto').value;
    const email = document.getElementById('textarea').value;
    console.log(`Cópia:${copia}`);
    console.log(`Para:${destinatario}`);
    console.log(`Assunto:${assunto}`);
    console.log(`Corpo do emails:${email}`);

    console.table({
        copia,
        destinatario,
        assunto,
        email
    })

    window.location.href = `mailto:${destinatario}?subject=${assunto}&cc=${copia}&body=${email}`

}

