const name="colombia"
const url =`https://restcountries.com/v3.1/name/${name}`;

const paisApi=async (enlace)=>{
    try{
        const response=await fetch(enlace)
        const data=await response.json()
        console.log(`La frontera de ${name} son:${data[0].borders}`)
    
    } catch (error){
        console.log(error)
    }
}
paisApi(url)