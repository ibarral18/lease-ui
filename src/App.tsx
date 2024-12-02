import { useEffect, useState } from "react";
import { supabase } from './supabaseClient'

function App() {
  const [countries, setCountries] = useState();

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {

    const { data: bed } = await supabase
      .from('bed')
      .select()

    setCountries(bed);
  }

  return (
    <div>
      <div>test</div>
      {/* <ul>
        {countries?.map((country) => (
          <li key={country}>{country}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default App;