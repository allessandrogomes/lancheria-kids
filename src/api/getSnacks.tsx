
export async function getSnacks() {
    try {
        const response = await fetch('/public/data/snacks.json')

        if (!response.ok) {
            throw new Error('Não foi possível buscar os dados')
        }

        const data = await response.json()

        return data
    } catch (error) {
        console.log(error)
    }
}