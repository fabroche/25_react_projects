export default async function fetchPicsumImages() {

    const url = 'https://picsum.photos/v2/list?page=1&limit=4'

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error('Error fetching picsum');
    }

    const images = await response.json();
    return images;

}