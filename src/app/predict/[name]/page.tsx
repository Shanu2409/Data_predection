const fetchAge = async (name:string) => {
        const res : any = await fetch(`https://api.agify.io/?name=${name}`);
        return res.json();
    }

    const fetchGender = async (name:string) => {
        const res : any = await fetch(`https://api.genderize.io/?name=${name}`);
        return res.json();
    }

    const fetchCountry = async (name:string) => {
        const res : any = await fetch(`https://api.nationalize.io/?name=${name}`);
        return res.json();
    }


export default async function Home({params} : any) {
    
    const ageData = await fetchAge(params.name);
    const genderData = await fetchGender(params.name);
    const countryData = await fetchCountry(params.name);

    const [age, gender, country] = await Promise.all([ageData, genderData, countryData]);
  

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-900 text-white">
      <p className="text-2xl font-bold mb-4">
        Prediction Results of name :{" "}
        <span
          className="text-blue-500 font-bold cursor-pointer transition-transform hover:scale-105"
        >
          {params.name.toUpperCase()}
        </span>
      </p>

      <p>
        <span className="text-blue-500 font-bold">Predicted Age: </span>
        {age.age}
      </p>
      <p>
        <span className="text-blue-500 font-bold">Predicted Gender: </span>
        {gender.gender}
      </p>
      <p>
        <span className="text-blue-500 font-bold">Predicted Country Code: </span>
        {country.country[0].country_id}
      </p>
    </main>

  );
}
