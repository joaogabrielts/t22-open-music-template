export async function fetchMusics() {
    try {
        let response = await fetch('https://openmusic-fake-api.onrender.com/api/musics');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        let data = await response.json();
        return data; 
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        return []; 
    }
}






