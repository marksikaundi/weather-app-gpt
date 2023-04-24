"use client";
import { Country, City } from 'country-state-city'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Select from 'react-select';
import GlobeIcon from "@heroicons/react/solid"

type option = {
    value: {
        latitude: string;
        longitude: string;
        isoCode: string;
    };
    label: string;
} |null;

type cityOption = {
    value: {
        latitude: string;
        longitude: string;
        name: string;
        stateCode: string;
    };
    label: string;
} |null;

const options = Country.getAllCountries().map(Country => ({
    value: {
        latitude: Country.latitude,
        longitude: Country.longitude,
        isoCode: Country.isoCode,
    },
    label: Country.name,
}))

function CityPicker() {
    const [selectedCountry, setSelectedCountry] = useState<option>(null)
    const [selectedCity, setSelectedCity] = useState<cityOption>(null)
    const router = useRouter();

    const handleSelectedCountry = (option: option) => {
        setSelectedCountry(option);
        setSelectedCity(null);
    }

  return (
    <div>
        <div>
            <label htmlFor="country">Country</label>
        </div>
      <Select 
      className='text-black'
      value={selectedCountry}
      onChange={handleSelectedCountry}
      options={options}
      />
    </div>
  )
}

export default CityPicker
