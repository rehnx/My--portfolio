const fs = require('fs');

async function download(u, n) {
    try {
        const r = await fetch(u, { headers: { 'User-Agent': 'Mozilla/5.0' } });
        if (!r.ok) {
            console.error('Failed', n, r.status);
            return;
        }
        fs.writeFileSync('public/' + n, Buffer.from(await r.arrayBuffer()));
        console.log('Downloaded', n);
    } catch (e) {
        console.error('Error downloading', n, e);
    }
}

async function main() {
    await download('https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg/1280px-%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg', 'bg-languages.jpg');

    await download('https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Reconstruction_of_ancient_Rome_by_Joseph_Gandy.jpg/1200px-Reconstruction_of_ancient_Rome_by_Joseph_Gandy.jpg', 'bg-projects.jpg');

    await download('https://upload.wikimedia.org/wikipedia/commons/3/36/Edward_Burne-Jones_Love_Among_the_Ruins.jpg', 'bg-contact.jpg');

    try { fs.unlinkSync('link.txt'); } catch (e) { }

    let c = fs.readFileSync('src/style.css', 'utf8');
    c = c.replace(/url\('[^']*The_School_of_Athens[^']*'\)/g, "url('/bg-languages.jpg')");
    c = c.replace(/url\('[^']*Reconstruction_of_ancient_Rome[^']*'\)/g, "url('/bg-projects.jpg')");
    c = c.replace(/url\('[^']*Love_Among_the_Ruins[^']*'\)/g, "url('/bg-contact.jpg')");
    fs.writeFileSync('src/style.css', c);

    console.log('All set!');
}
main();
